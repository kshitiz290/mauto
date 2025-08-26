// Example usage of loading components throughout your app

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ButtonLoading, ComponentLoading } from '@/components/ui/loading';
import { LoadingOverlay, SkeletonCard } from '@/components/ui/loading-overlay';
import { useLoading } from '@/hooks/useLoading';

// Example: Form with loading states
export const ContactForm = () => {
  const { isLoading, setLoading } = useLoading();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true, 'Sending your message...');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          disabled={isLoading}
        />
        
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          disabled={isLoading}
        />
        
        <textarea
          className="w-full p-3 border rounded-lg resize-none"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          disabled={isLoading}
        />
        
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <ButtonLoading />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
      
      <LoadingOverlay 
        isVisible={isLoading} 
        message="Sending your message..."
      />
    </div>
  );
};

// Example: Data loading component
export const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useState(() => {
    setTimeout(() => {
      setProducts([1, 2, 3, 4, 5]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product, i) => (
        <div key={i} className="bg-card rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold">Product {product}</h3>
          <p className="text-muted-foreground">Product description here</p>
          <Button className="mt-4">View Details</Button>
        </div>
      ))}
    </div>
  );
};

// Example: File upload with progress
export const FileUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(i);
    }

    setUploading(false);
    setProgress(0);
  };

  return (
    <div className="p-6">
      <Button 
        onClick={handleUpload} 
        disabled={uploading}
        className="mb-4"
      >
        {uploading ? (
          <>
            <ButtonLoading />
            Uploading... {progress}%
          </>
        ) : (
          'Upload File'
        )}
      </Button>

      {uploading && (
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Uploading file...</div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Example: Dashboard with multiple loading states
export const Dashboard = () => {
  const [statsLoading, setStatsLoading] = useState(true);
  const [chartsLoading, setChartsLoading] = useState(true);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Stats Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        {statsLoading ? (
          <ComponentLoading message="Loading statistics..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats cards */}
          </div>
        )}
      </section>

      {/* Charts Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        {chartsLoading ? (
          <ComponentLoading message="Loading charts..." />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart components */}
          </div>
        )}
      </section>
    </div>
  );
};
