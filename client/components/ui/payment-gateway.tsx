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

  // Payment script loading disabled for production build without Razorpay
  useEffect(() => { /* Razorpay disabled */ }, []);

  const createPaymentOrder = async () => {
    throw new Error('Online payment disabled.');
  };

  const verifyPayment = async () => { throw new Error('Payment verification disabled.'); };

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentStatus('pending');

    try {
      // Directly trigger success flow without real payment
      setTimeout(() => {
        setPaymentStatus('success');
        onPaymentSuccess('offline-payment');
        toast({
          title: 'Payment Skipped',
          description: 'Payment gateway disabled in this build. Proceeding...',
          variant: 'default'
        });
      }, 600);

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
              Continue (No Charge)
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">Payment gateway disabled for production hardening.</p>
      </CardContent>
    </Card>
  );
} 