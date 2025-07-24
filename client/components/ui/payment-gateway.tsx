import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Loader2, CreditCard, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from './use-toast';

interface PaymentGatewayProps {
  amount: number;
  currency: string;
  domain: string;
  companyName: string;
  email: string;
  userPassword: string;
  onPaymentSuccess: (paymentId: string) => void;
  onPaymentFailure: (error: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function PaymentGateway({
  amount,
  currency,
  domain,
  companyName,
  email,
  userPassword,
  onPaymentSuccess,
  onPaymentFailure
}: PaymentGatewayProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');
  const { toast } = useToast();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createPaymentOrder = async () => {
    try {
      const response = await fetch('/api/create-payment-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          receipt: `receipt_${Date.now()}`,
          notes: {
            domain,
            companyName,
            email
          }
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment order');
      }

      return data;
    } catch (error) {
      console.error('Error creating payment order:', error);
      throw error;
    }
  };

  const verifyPayment = async (paymentId: string, orderId: string, signature: string) => {
    try {
      console.log('Verifying payment:', { paymentId, orderId, signature });
      
      const response = await fetch('/api/verify-payment-and-deploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId,
          orderId,
          signature,
          domain,
          companyName,
          email,
          userPassword
        }),
      });

      const data = await response.json();
      
      console.log('Payment verification response:', data);
      
      if (!response.ok) {
        const errorMessage = data.error || data.details || 'Payment verification failed';
        console.error('Payment verification failed:', errorMessage);
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentStatus('pending');

    try {
      // Create payment order
      const orderData = await createPaymentOrder();

      // Initialize Razorpay
      const options = {
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Codifye',
        description: `Website Deployment - ${companyName}`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            setPaymentStatus('pending');
            
            // Verify payment
            const verificationData = await verifyPayment(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );

            setPaymentStatus('success');
            onPaymentSuccess(response.razorpay_payment_id);
            
            toast({
              title: "Payment Successful!",
              description: "Your website is being deployed now.",
              variant: "default",
            });

          } catch (error) {
            setPaymentStatus('failed');
            onPaymentFailure(error instanceof Error ? error.message : 'Payment verification failed');
            
            toast({
              title: "Payment Failed",
              description: error instanceof Error ? error.message : 'Payment verification failed',
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: companyName,
          email: email,
        },
        theme: {
          color: '#6366f1',
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
            setPaymentStatus('pending');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      setIsLoading(false);
      setPaymentStatus('failed');
      const errorMessage = error instanceof Error ? error.message : 'Failed to initiate payment';
      onPaymentFailure(errorMessage);
      
      toast({
        title: "Payment Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Required
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-2">
            ₹{amount.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Website Deployment Fee
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Domain:</span>
            <span className="font-medium">{domain}</span>
          </div>
          <div className="flex justify-between">
            <span>Company:</span>
            <span className="font-medium">{companyName}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span className="font-medium">{email}</span>
          </div>
        </div>

        {paymentStatus === 'success' && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Payment successful! Deploying your site...</span>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <XCircle className="w-5 h-5" />
            <span>Payment failed. Please try again.</span>
          </div>
        )}

        <Button
          onClick={handlePayment}
          disabled={isLoading || paymentStatus === 'success'}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : paymentStatus === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Payment Successful
            </>
          ) : (
            <>
              <CreditCard className="w-4 h-4 mr-2" />
              Pay ₹{amount.toLocaleString()}
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Secure payment powered by Razorpay
        </p>
      </CardContent>
    </Card>
  );
} 