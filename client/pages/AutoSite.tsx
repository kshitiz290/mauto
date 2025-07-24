import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Header } from "../components/ui/header";
import { PaymentGateway } from "../components/ui/payment-gateway";
import { useLocation } from "react-router-dom";
import {
  Globe,
  Building2,
  Palette,
  FileText,
  Sparkles,
  Loader2,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Rocket,
  Zap,
  CreditCard
} from "lucide-react";
import React from "react";
import { useToast } from "../components/ui/use-toast";

interface FormData {
  hasDomain: boolean;
  domain: string;
  businessSector: string;
  theme: string;
  companyName: string;
  email: string;
  location: string;
  homeContent: string;
  aboutContent: string;
  contactContent: string;
  userPassword: string;
  logoPath?: string; // Optional field for logo path
  heading?: string;
  heading_desc?: string;
  banner_path?: string;
  photo_1?: string;
  photo_2?: string;
  photo_3?: string;
  photo_4?: string;
  servicesContent?: string;
  vision_desc?: string;
  mission_desc?: string;
  what_we_do?: string;
  // Product/Service fields
  isProductBased?: boolean;
  name?: string;
  short_description?: string;
  full_description?: string;
  product_image?: string;
  price?: string;
  sequence?: string;
  display_in_menu?: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;
}

const businessSectors = [
  "School",
  "Hotel",
  "Salon",
  "Coaching",
  "Restaurant",
  "Gym",
  "Clinic",
  "Shop",
  "Consulting",
  "Technology",
  "Real Estate",
  "Travel",
  "Education",
  "Healthcare",
  "Finance",
  "Other"
];

const themes = [
  "Modern Minimal",
  "Corporate Professional",
  "Creative Agency",
  "E-commerce",
  "Portfolio",
  "Blog",
  "Landing Page",
  "Dashboard"
];

const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const apiBase = isDevelopment ? 'http://localhost:8080' : '';

// Helper to check if a string is a valid URL
function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Add helper functions for validation
function isValidEmail(email: string) {
  // Simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password: string) {
  // At least 8 characters, at least one letter and one number
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(password);
}

export default function AutoSite() {
  const location = useLocation();
  // Product/Service form state
  const [isProductBased, setIsProductBased] = useState<boolean>(false);
  const [productImagePreview, setProductImagePreview] = useState<string>("");
  // Product/Service image upload handler
  const handleProductImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);
    try {
      // Upload to product-images subfolder
      const res = await fetch(`${apiBase}/api/upload-logo?folder=product-images`, {
        method: 'POST',
        body: formDataUpload,
      });
      const data = await res.json();
      if (res.ok && data.path) {
        updateFormData('product_image', data.path); // Store path for DB insert
        setProductImagePreview(data.path);
      } else {
        toast({
          title: 'Upload Failed',
          description: data.error || 'Could not upload image. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Upload Failed',
        description: 'Could not upload image. Please try again.',
        variant: 'destructive',
      });
    }
  };
  const [currentStep, setCurrentStep] = useState(0);
  const defaultFormData: FormData = {
    hasDomain: false,
    domain: "",
    businessSector: "",
    theme: "",
    companyName: "",
    email: "",
    location: "",
    homeContent: "",
    aboutContent: "",
    contactContent: "",
    userPassword: "",
    logoPath: "",
    heading: "",
    heading_desc: "",
    banner_path: "",
    photo_1: "",
    photo_2: "",
    photo_3: "",
    photo_4: "",
    servicesContent: "",
    vision_desc: "",
    mission_desc: "",
    what_we_do: "",
    isProductBased: false,
    name: "",
    short_description: "",
    full_description: "",
    product_image: "",
    price: "",
    sequence: "",
    display_in_menu: 0,
    status: "",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: ""
  };
  // const formDataFromLogin = location.state?.formData as FormData || defaultFormData;
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const [isLoading, setIsLoading] = useState(false);
  const [buildStatus, setBuildStatus] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployedUrl, setDeployedUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [revealedStep, setRevealedStep] = useState<number>(0);
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(() => {
    const saved = localStorage.getItem("autoSiteIsSuccess");
    return saved === "true";
  });
  // Move these out of renderStep/case 4
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // FIX: Move these hooks to top level to avoid blank screen/hook error
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [photoPreviews, setPhotoPreviews] = useState<string[]>(["", "", "", ""]);
  const [heroTitleError, setHeroTitleError] = useState<string>("");
  const [bannerError, setBannerError] = useState<string>("");
  const [companyId, setCompanyId] = useState(0);

  // const stepFromLogin = location.state?.stepNumber || 0;
  

  // Home page image upload handler (banner and photos)
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData,
    photoIndex?: number
  ) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);
    try {
      // Always upload to page-content-uploads subdirectory
      const res = await fetch(`${apiBase}/api/upload-logo?folder=page-content-uploads`, {
        method: 'POST',
        body: formDataUpload,
      });
      const data = await res.json();
      if (res.ok && data.path) {
        updateFormData(field, data.path);
        if (field === 'banner_path') {
          setBannerPreview(data.path);
          setBannerError("");
        } else if (photoIndex !== undefined) {
          setPhotoPreviews(prev => {
            const updated = [...prev];
            updated[photoIndex] = data.path;
            return updated;
          });
        }
      } else {
        if (field === 'banner_path') setBannerError(data.error || 'Could not upload image.');
        toast({
          title: 'Upload Failed',
          description: data.error || 'Could not upload image. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      if (field === 'banner_path') setBannerError('Could not upload image.');
      toast({
        title: 'Upload Failed',
        description: 'Could not upload image. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const buildSteps = [
    "Analyzing requirements...",
    "Generating content...",
    "Applying theme...",
    "Optimizing for SEO..."
  ];


  // Only use DB for progress, no localStorage for step/formData


  // Optionally keep deployedUrl/siteUrl localStorage logic if needed for preview, but remove for step/formData

  // Step-by-step animation for Building Your Site

  // useEffect(() => {
  //   if (location.state?.formData) {
  //     setFormData(location.state.formData);
  //   }
  //   setCurrentStep(stepFromLogin);
  // }, []);


  useEffect(() => {
    if (currentStep === 6 && buildStatus && buildStatus !== "Error building site. Please try again.") {
      setRevealedStep(0);
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setRevealedStep(step);
        if (step >= buildSteps.length) clearInterval(interval);
      }, 1000); // 1s per step (artificial delay)
      return () => clearInterval(interval);
    }
  }, [currentStep, buildStatus]);

  useEffect(() => {
    fetch("/api/load-form", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        setCurrentStep(data.step_number || 0);
        setFormData(data.form_data || {});
      })
      .catch(() => {
        setCurrentStep(0);
        setFormData(defaultFormData);
      });
  }, []);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const saveStep = async (stepNumber, data) => {
    await fetch("/api/save-step", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ step_number: stepNumber, form_data: data }),
    });
  };

  const nextStep = async () => {
    if (currentStep < 9) {
      const newStep = currentStep + 1;
      await saveStep(newStep, formData);
      setCurrentStep(newStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const saveCompanyDetails = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const userID = localStorage.getItem('userID');
    try {
      const payload = { ...formData, user_id: userID };
      const apiUrl = `${apiBase}/api/company-details`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setCompanyId(data.companyId);
        setCurrentStep(3);
      } else {
        setErrorMessage(data.error || "Failed to save data");
        setIsLoading(false);
        toast({
          title: "Error",
          description: data.error || "Failed to save your data. Please try again.",
          variant: "destructive",
        });
      }
    }
    catch (error) {
      setErrorMessage("Error saving company data. Please try again.");
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Error saving your company data. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  }

  // const handleDomainQuestion = (hasDomain: boolean) => {
  //   updateFormData("hasDomain", hasDomain);
  //   if (hasDomain) {
  //     nextStep();
  //   }
  // };

  const [buildId, setBuildId] = useState<string>("");

  // New generateSite: save each section to its own table
  const generateSite = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {

      // 2. Send all formData + company_id to one API endpoint
      const payload = { ...formData, company_id: companyId };
      const response = await fetch(`${apiBase}/api/generate-site`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Failed to save site data");
      setCurrentStep(4); // Show success page
    } catch (error: any) {
      setErrorMessage(error.message || "Error saving data. Please try again.");
      setIsLoading(false);
      toast({
        title: "Error",
        description: error.message || "Error saving your data. Please try again.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(false);
  };

  const pollBuildStatus = async (id: string) => {
    let pollCount = 0;
    const pollInterval = setInterval(async () => {
      pollCount++;
      try {
        const apiUrl = `${apiBase}/api/site-status/${id}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const status = await response.json();
          console.log(`Polling #${pollCount}:`, status);
          setBuildStatus(status.message);
          if (status.status === "ready") {
            setPreviewUrl(status.previewUrl);
            setIsLoading(false);
            clearInterval(pollInterval);
          } else if (status.status === "error") {
            setBuildStatus("Error building site. Please try again.");
            setErrorMessage(status.message || "Error building site. Please try again.");
            setIsLoading(false);
          }
        } else {
          const errorData = await response.json().catch(() => ({}));
          console.error(`Polling error #${pollCount}:`, errorData);
          setErrorMessage(errorData.error || "Failed to poll build status");
          setBuildStatus("Error polling build status. Please try again.");
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Polling exception #${pollCount}:`, error);
        setErrorMessage("Error polling build status. Please try again.");
        setBuildStatus("Error polling build status. Please try again.");
        setIsLoading(false);
      }
    }, 2000);
    setTimeout(() => {
      clearInterval(pollInterval);
      if (isLoading) {
        setBuildStatus("Build timeout. Please try again.");
        setErrorMessage("Build timed out. Please try again.");
        setIsLoading(false);
      }
    }, 5 * 60 * 1000);
  };

  // In deploySite, ensure all required fields are present
  const deploySite = async () => {
    setIsDeploying(true);
    setErrorMessage("");
    try {
      const apiUrl = `${apiBase}/api/deploy-to-hostinger`;
      const deployBody = {
        ...formData,
        previewUrl: previewUrl || siteUrl || "",
        siteUrl: siteUrl || "",
      };
      // Check for missing required fields
      if (!deployBody.domain || !deployBody.companyName || !deployBody.email || !deployBody.userPassword || !deployBody.siteUrl) {
        setErrorMessage("Missing required fields");
        setIsDeploying(false);
        return;
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deployBody),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.deployedUrl && isValidUrl(data.deployedUrl)) {
          setDeployedUrl(data.deployedUrl);
          setSiteUrl(data.deployedUrl); // Always use the deployedUrl for preview/visit
          setPreviewUrl(data.deployedUrl); // Make previewUrl same as deployedUrl
          localStorage.setItem("autoSiteDeployedUrl", data.deployedUrl);
          localStorage.setItem("autoSiteSiteUrl", data.deployedUrl);
          localStorage.setItem("autoSitePreviewUrl", data.deployedUrl);
          setErrorMessage("");
          nextStep();
          localStorage.removeItem("autoSiteCurrentStep");
          localStorage.removeItem("autoSiteFormData");
        } else {
          setDeployedUrl("");
          setErrorMessage(data.error || "Deployment failed. Please try again.");
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        setDeployedUrl("");
        setErrorMessage(errorData.error || "Failed to deploy site");
      }
    } catch (error) {
      setDeployedUrl("");
      setErrorMessage("Error deploying site. Please try again.");
    } finally {
      setIsDeploying(false);
    }
  };

  // Handle payment success
  const handlePaymentSuccess = async (paymentId: string) => {
    setIsSuccess(true); // Always show Congratulations after payment
    setCurrentStep(9); // Show Congratulations page
    // Removed deploy-to-hostinger API call for now
    localStorage.setItem("autoSiteIsSuccess", "true");
  };

  // Handle payment failure
  const handlePaymentFailure = (error: string) => {
    setIsSuccess(false); // Only show error if payment fails
    setCurrentStep(9); // Show error page
    setErrorMessage(error);
    toast({
      title: "Payment Failed",
      description: error,
      variant: "destructive",
    });
  };

  // Wrap deploySite with a delay for the Deploy button
  const handleDeployWithDelay = async () => {
    setIsDeploying(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5s delay
    await deploySite();
  };

  // Only show the steps for the new flow
  const steps = [
    {
      title: "Domain Name",
      description: "Enter your domain",
      icon: Globe
    },
    {
      title: "Business Sector",
      description: "Select your industry",
      icon: Building2
    },
    {
      title: "Company Details",
      description: "Basic information",
      icon: FileText
    },
    {
      title: "Content Creation",
      description: "Page content",
      icon: Sparkles
    }
  ];

  const handleRedirect = (path: string) => {
    window.location.href = path;
  };
  const renderStep = () => {
    // Remove local isSuccess variable, use only state
    const buildIsComplete = buildStatus === "Site generated successfully!";
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md mx-auto"
          >
            <div className="mb-8 text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Enter Your Sub-Domain</h2>
              <p className="text-lg text-foreground/70">
                Your site will be visible at (subdomain.mSell.in)
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="domain">Sub-Domain Name</Label>
                <Input
                  id="domain"
                  type="text"
                  placeholder="mybusiness.com"
                  value={formData.domain}
                  onChange={(e) => updateFormData("domain", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={nextStep}
                  disabled={!formData.domain}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md mx-auto"
          >
            <div className="mb-8 text-center">
              <Building2 className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Business Sector</h2>
              <p className="text-lg text-foreground/70">
                Select your business sector or industry
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sector">Business Sector</Label>
                <Select value={formData.businessSector} onValueChange={(value) => updateFormData("businessSector", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your business sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessSectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!formData.businessSector}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        // Email and password validation
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          updateFormData("email", value);
          if (!isValidEmail(value)) {
            setEmailError("Please enter a valid email address.");
          } else {
            setEmailError("");
          }
        };
        // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //   const value = e.target.value;
        //   updateFormData("userPassword", value);
        //   if (!isStrongPassword(value)) {
        //     setPasswordError("Password must be at least 8 characters and contain a letter and a number.");
        //   } else {
        //     setPasswordError("");
        //   }
        // };
        // Logo upload handler
        const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const formDataUpload = new FormData();
          formDataUpload.append('logo', file);
          try {
            const res = await fetch(`${apiBase}/api/upload-logo`, {
              method: 'POST',
              body: formDataUpload,
            });
            const data = await res.json();
            if (res.ok && data.path) {
              updateFormData('logoPath', data.path); // Store path in formData
            } else {
              toast({
                title: 'Upload Failed',
                description: data.error || 'Could not upload logo. Please try again.',
                variant: 'destructive',
              });
            }
          } catch (err) {
            toast({
              title: 'Upload Failed',
              description: 'Could not upload logo. Please try again.',
              variant: 'destructive',
            });
          }
        };
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md mx-auto"
          >
            <div className="mb-8 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Company Details</h2>
              <p className="text-lg text-foreground/70">
                Fill in your company information
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className="mt-2"
                />
                {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
              </div>
              {/* <div>
                <Label htmlFor="userPassword">Admin Password</Label>
                <Input
                  id="userPassword"
                  type="password"
                  placeholder="Set a password for your admin account"
                  value={formData.userPassword}
                  onChange={handlePasswordChange}
                  className="mt-2"
                /> */}
              {/* {passwordError && <div className="text-red-500 text-xs mt-1">{passwordError}</div>} */}
              {/* </div> */}
              <div>
                <Label htmlFor="logoUpload">Upload Your Logo</Label>
                <Input
                  id="logoUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="mt-2"
                />
                {formData.logoPath && (
                  <div className="mt-2 text-xs text-green-600">Logo uploaded: {formData.logoPath}</div>
                )}
              </div>
              <div>
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={saveCompanyDetails}
                  disabled={
                    !formData.companyName ||
                    !formData.email ||
                    !!emailError ||
                    !isValidEmail(formData.email)
                  }
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div >
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-8 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Page Contents</h2>
              <p className="text-lg text-foreground/70">Describe what you want on each page</p>
            </div>
            <div className="space-y-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Home Page Contents</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="heroTitle">Hero Section Title</Label>
                    <Input
                      id="heroTitle"
                      type="text"
                      placeholder="Main heading for your homepage"
                      value={formData.heading || ""}
                      onChange={e => {
                        updateFormData("heading", e.target.value);
                        setHeroTitleError(e.target.value ? "" : "Title is required.");
                      }}
                      className="mt-2"
                    />
                    {heroTitleError && <div className="text-red-500 text-xs mt-1">{heroTitleError}</div>}
                  </div>
                  <div>
                    <Label htmlFor="heroSubtitle">Hero Section Subtitle</Label>
                    <Textarea
                      id="heroSubtitle"
                      placeholder="Sub-heading below the title"
                      value={formData.heading_desc || ""}
                      onChange={e => updateFormData("heading_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bannerImage">Hero Banner Image</Label>
                    <Input
                      id="bannerImage"
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "banner_path")}
                      className="mt-2"
                    />
                    {bannerError && <div className="text-red-500 text-xs mt-1">{bannerError}</div>}
                    {bannerPreview && bannerPreview !== "" && (
                      <img src={bannerPreview} alt="Banner Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                  <div>
                    <Label>Homepage Photo 1</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "photo_1", 0)}
                      className="mt-2"
                    />
                    {photoPreviews[0] && photoPreviews[0] !== "" && (
                      <img src={photoPreviews[0]} alt="Photo 1 Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                  <div>
                    <Label>Homepage Photo 2 (Optional)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "photo_2", 1)}
                      className="mt-2"
                    />
                    {photoPreviews[1] && photoPreviews[1] !== "" && (
                      <img src={photoPreviews[1]} alt="Photo 2 Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                  <div>
                    <Label>Homepage Photo 3 (Optional)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "photo_3", 2)}
                      className="mt-2"
                    />
                    {photoPreviews[2] && photoPreviews[2] !== "" && (
                      <img src={photoPreviews[2]} alt="Photo 3 Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                  <div>
                    <Label>Homepage Photo 4 (Optional)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "photo_4", 3)}
                      className="mt-2"
                    />
                    {photoPreviews[3] && photoPreviews[3] !== "" && (
                      <img src={photoPreviews[3]} alt="Photo 4 Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                </div>
              </div>
              {/* ...existing About, Contact, Services fields... */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">About-us Page Contents</h3>
                <div className="space-y-4">

                  <div>
                    <Label htmlFor="vision_desc">Our Vision</Label>
                    <Textarea
                      id="vision_desc"
                      placeholder="Describe your company's long-term vision..."
                      value={formData.vision_desc || ""}
                      onChange={e => updateFormData("vision_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mission_desc">Our Mission</Label>
                    <Textarea
                      id="mission_desc"
                      placeholder="Describe your company's mission statement..."
                      value={formData.mission_desc || ""}
                      onChange={e => updateFormData("mission_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="what_we_do">What We Do</Label>
                    <Textarea
                      id="what_we_do"
                      placeholder="Describe your company's core activities or services..."
                      value={formData.what_we_do || ""}
                      onChange={e => updateFormData("what_we_do", e.target.value)}
                      className="mt-2 min-h-[60px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="isProductBased"
                    checked={isProductBased}
                    onChange={e => {
                      setIsProductBased(e.target.checked);
                      updateFormData('isProductBased', e.target.checked);
                      // Always set display_in_menu to 1 if checked, 0 if unchecked
                      updateFormData('display_in_menu', e.target.checked ? 1 : 0);
                    }}
                    className="mr-2"
                  />
                  <Label htmlFor="isProductBased">Is your company product-based?</Label>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {isProductBased ? 'Add Product' : 'Add Service'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product/Service Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter name"
                      value={formData.name || ""}
                      onChange={e => updateFormData("name", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="short_description">Short Description</Label>
                    <Input
                      id="short_description"
                      type="text"
                      placeholder="Short description"
                      value={formData.short_description || ""}
                      onChange={e => updateFormData("short_description", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="full_description">Full Description</Label>
                    <Textarea
                      id="full_description"
                      placeholder="Full description"
                      value={formData.full_description || ""}
                      onChange={e => updateFormData("full_description", e.target.value)}
                      className="mt-2 min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="product_image">Image</Label>
                    <Input
                      id="product_image"
                      type="file"
                      accept="image/*"
                      onChange={handleProductImageUpload}
                      className="mt-2"
                    />
                    {productImagePreview && productImagePreview !== "" && (
                      <img src={productImagePreview} alt="Product Preview" className="mt-2 rounded shadow w-full max-w-xs mx-auto" />
                    )}
                  </div>
                  {isProductBased && (
                    <div>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="text"
                        placeholder="Price"
                        value={formData.price || ""}
                        onChange={e => updateFormData("price", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="sequence">Display Order</Label>
                    <Input
                      id="sequence"
                      type="number"
                      placeholder="Display order"
                      value={formData.sequence || ""}
                      onChange={e => updateFormData("sequence", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  {/* Hidden fields for status, created_at, updated_at, created_by, updated_by */}
                  <input type="hidden" value={formData.status || "active"} />
                  <input type="hidden" value={formData.created_at || new Date().toISOString()} />
                  <input type="hidden" value={formData.updated_at || new Date().toISOString()} />
                  <input type="hidden" value={formData.created_by || "admin"} />
                  <input type="hidden" value={formData.updated_by || "admin"} />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                  disabled={isLoading}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={generateSite}
                  disabled={
                    isLoading ||
                    // Home section required fields
                    !formData.heading ||
                    !formData.heading_desc ||
                    !formData.banner_path ||
                    // About section required fields
                    !formData.vision_desc ||
                    !formData.mission_desc ||
                    !formData.what_we_do ||
                    // Product/Service section required fields
                    !formData.name ||
                    !formData.full_description ||
                    !formData.product_image
                  }
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Site
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div >
        );

      // New success page after saving to DB
      case 4:
        const handleMakeAnotherWebsite = () => {
          setCurrentStep(0);
          setFormData({
            hasDomain: false,
            domain: "",
            businessSector: "",
            theme: "",
            companyName: "",
            email: "",
            location: "",
            homeContent: "",
            aboutContent: "",
            contactContent: "",
            userPassword: ""
          });
          setBuildId("");
          setBuildStatus("");
          setPreviewUrl("");
          setIsLoading(false);
          setIsDeploying(false);
          setDeployedUrl("");
          setErrorMessage("");
          setIsSuccess(false);
          // No localStorage clearing for step/formData
        };
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className="mb-8">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-3xl font-bold mb-4">Success!</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Your data has been saved successfully.
              </p>
            </div>
            <Button
              onClick={handleMakeAnotherWebsite}
              className="w-full mt-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
            >
              Make Another Website
            </Button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />

        <main className="pt-20 sm:pt-24 md:pt-16">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-animation"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">AI-Powered</span>
                  <span className="block mt-2">Website Builder</span>
                </h1>
                <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Create a professional website in minutes with our intelligent AI builder.
                  No coding required, just answer a few questions and watch your site come to life.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="w-full overflow-x-auto mb-14">
                <div className="flex items-center justify-center gap-2 px-2">
                  {steps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center min-w-[70px] max-w-[90px] flex-none">
                        <div
                          className={`w-9 h-9 flex items-center justify-center rounded-full border-2
                            ${index <= currentStep ? "bg-primary border-primary text-white" : "border-foreground/30 text-foreground/50"}
                          `}
                        >
                          {index < currentStep ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <step.icon className="w-4 h-4" />
                          )}
                        </div>
                        <div className="mt-1 text-center">
                          <p className="text-xs font-bold leading-tight">{step.title}</p>
                          <p className="text-[10px] text-foreground/60 leading-tight">{step.description}</p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="flex items-center justify-center flex-none">
                          <svg width="18" height="18" className="text-foreground/20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9h12m-3-3 3 3-3 3" />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-4xl mx-auto">
                <Card className="glass-effect">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {renderStep()}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}