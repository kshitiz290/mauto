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
import * as React from "react";
import { useToast } from "../components/ui/use-toast";



interface FormData {
  hasDomain: boolean;
  domain: string;
  businessSector: string;
  template_type_id: number | null;
  theme: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  homeContent: string;
  aboutContent: string;
  contactContent: string;
  userPassword: string;
  logoPath: string;
  heading: string;
  heading_desc: string;
  banner_path: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
  photo_4: string;
  servicesContent: string;
  vision_desc: string;
  mission_desc: string;
  what_we_do: string;
  our_story: string;
  isProductBased: boolean;
  name: string;
  short_description: string;
  full_description: string;
  product_image: string;
  price: string;
  sequence: string;
  display_in_menu: number;
  status: string;
  facebookLink: string;
  youtubeLink: string;
  linkedinLink: string;
  iframe: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  campaign_name?: string;
  campaign_description?: string;
  volunteers?: string;
  raised?: string;
  campaign_status?: string;
  goal?: string;
  impact?: string;
  campaigns?: Array<{
    campaign_name: string;
    campaign_description: string;
    volunteers: string;
    raised: string;
    campaign_status: string;
    goal: string;
    impact: string;
  }>;
  products?: Array<{
    name: string;
    short_description: string;
    full_description: string;
    product_image: string;
    price: string;
    sequence: number;
    status: string;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by: string;
    display_in_menu: number;
  }>;
}

// Business sectors state from API
// ...existing code...

export default function AutoSite() {
  // Business sectors state from API (move inside component)
  type BusinessSector = { name: string; template_type_id: number };
  const [businessSectors, setBusinessSectors] = useState<BusinessSector[]>([]);
  const [sectorLoading, setSectorLoading] = useState(false);
  useEffect(() => {
    setSectorLoading(true);
    fetch("/api/business-sectors")
      .then(res => res.json())
      .then(data => {
        setBusinessSectors(data.sectors || []);
        setSectorLoading(false);
      })
      .catch(() => setSectorLoading(false));
  }, []);

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

  const apiBase = window.location.origin;
  console.log(apiBase)

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
  // Campaigns state for NGO
  const [campaigns, setCampaigns] = useState([
    {
      campaign_name: "",
      campaign_description: "",
      volunteers: "",
      raised: "",
      campaign_status: "",
      goal: "",
      impact: ""
    }
  ]);

  // Sync campaigns to formData when campaigns change
  useEffect(() => {
    if (formData.template_type_id === 2) {
      updateFormData("campaigns", campaigns);
    }
    // eslint-disable-next-line
  }, [campaigns]);
  // Clear localStorage on logout or new user session
  React.useEffect(() => {
    // Listen for user logout/login events
    const handleUserLogout = () => {
      console.log('[AutoSite] User logout event received');
      // On logout, we clear all localStorage (user will be gone)
      localStorage.removeItem('autoSiteFormData');
      localStorage.removeItem('autoSiteCurrentStep');
      localStorage.removeItem('autoSiteCompanyId');
      localStorage.removeItem('autoSiteLastUserID'); // Clear the last user tracking

      // Reset to defaults
      setFormData(defaultFormData);
      setCurrentStep(0);
      setCompanyId(0);

      console.log('[AutoSite] Cleared form data due to logout');
    };

    const handleUserLogin = () => {
      console.log('[AutoSite] User login event received');
      // On login, we DON'T clear anything immediately
      // The user change detection effect above will handle it properly
      // This prevents clearing data when the same user logs back in
    };

    window.addEventListener("user-logout", handleUserLogout);
    window.addEventListener("user-login", handleUserLogin);
    return () => {
      window.removeEventListener("user-logout", handleUserLogout);
      window.removeEventListener("user-login", handleUserLogin);
    };
  }, []);
  // Product/Service array state for step 3
  const [products, setProducts] = useState([
    {
      name: "",
      short_description: "",
      full_description: "",
      product_image: "",
      price: "",
      sequence: 1,
      status: "active",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      created_by: "admin",
      updated_by: "admin",
      display_in_menu: 0
    }
  ]);
  const [productPreviews, setProductPreviews] = useState([""]);

  // Handle image upload for each product
  const handleProductImageUploadMulti = async (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);
    try {
      const res = await fetch(`${apiBase}/api/upload-logo?folder=product-images`, {
        method: 'POST',
        body: formDataUpload,
      });
      const data = await res.json();
      if (res.ok && data.path) {
        const newProducts = [...products];
        newProducts[idx].product_image = data.path;
        setProducts(newProducts);
        const newPreviews = [...productPreviews];
        newPreviews[idx] = data.path;
        setProductPreviews(newPreviews);
      }
    } catch { }
  };

  // Add More button handler
  const handleAddMore = () => {
    const last = products[products.length - 1];
    if (!last.name || !last.full_description || !last.product_image) {
      toast({ title: "Fill all required fields for previous item", variant: "destructive" });
      return;
    }
    setProducts([
      ...products,
      {
        name: "",
        short_description: "",
        full_description: "",
        product_image: "",
        price: "",
        sequence: products.length + 1,
        status: "active",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        created_by: "admin",
        updated_by: "admin",
        display_in_menu: isProductBased ? 1 : 0
      }
    ]);
    setProductPreviews([...productPreviews, ""]);
  };

  // Generate Site handler: send products array
  const handleGenerateSite = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      let payload;
      if (formData.template_type_id === 2) {
        payload = {
          ...formData,
          campaigns,
          company_id: companyId,
          isEditing: isEditing
        };
      } else {
        payload = {
          ...formData,
          products,
          company_id: companyId,
          isEditing: isEditing,
          template_type_id: formData.template_type_id
        };
      }
      const response = await fetch(`${apiBase}/api/generate-site`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Failed to save site data");
      await saveStep(currentStep + 1, formData);
      setCurrentStep(currentStep + 1);
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
  // Phone validation error state
  const [phoneError, setPhoneError] = useState<string>("");

  // Phone validation handler
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateFormData("phone", value);
    // Only allow digits, length 10
    if (!/^\d{10}$/.test(value)) {
      setPhoneError("Phone number must be exactly 10 digits.");
    } else {
      setPhoneError("");
    }
  };
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
  // const [currentStep, setCurrentStep] = useState(0);
  const defaultFormData: FormData = {
    hasDomain: false,
    domain: "",
    businessSector: "",
    template_type_id: null,
    theme: "",
    companyName: "",
    email: "",
    phone: "",
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
    facebookLink: "",
    linkedinLink: "",
    youtubeLink: "",
    iframe: "",
    photo_2: "",
    photo_3: "",
    photo_4: "",
    servicesContent: "",
    vision_desc: "",
    mission_desc: "",
    what_we_do: "",
    our_story: "",
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
    updated_by: "",
    // Campaign fields for NGO
    campaign_name: "",
    campaign_description: "",
    volunteers: "",
    raised: "",
    campaign_status: "",
    goal: "",
    impact: ""
  };
  // Helper to detect user changes and reset form state ONLY for different users
  useEffect(() => {
    const userID = localStorage.getItem('userID');
    const lastUserID = localStorage.getItem('autoSiteLastUserID');

    // Only proceed if we have a current user ID
    if (!userID) {
      console.log('[AutoSite] No userID found, skipping user change detection');
      return;
    }

    // If no lastUserID is stored, this might be first visit or after logout
    if (!lastUserID) {
      console.log('[AutoSite] No previous user ID stored, setting current user:', userID);
      localStorage.setItem('autoSiteLastUserID', userID);
      return; // Don't reset progress, just track the user
    }

    // Only reset if it's actually a DIFFERENT user
    if (userID !== lastUserID) {
      console.log('[AutoSite] DIFFERENT user detected:', { lastUserID, newUserID: userID });

      // Store the new user ID
      localStorage.setItem('autoSiteLastUserID', userID);

      // Clear localStorage form data (since we use DB now, this is just cleanup)
      localStorage.removeItem('autoSiteFormData');
      localStorage.removeItem('autoSiteCurrentStep');
      localStorage.removeItem('autoSiteCompanyId');

      // Reset component state to defaults (will be overridden by DB load)
      setFormData(defaultFormData);
      setCurrentStep(0);
      setCompanyId(0);

      console.log('[AutoSite] Reset state for different user:', userID);
    } else {
      console.log('[AutoSite] Same user returning:', userID, '- keeping their progress');
    }
  }, [localStorage.getItem('userID')]);

  const getInitialFormData = () => {
    const saved = localStorage.getItem("autoSiteFormData");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultFormData;
      }
    }
    return defaultFormData;
  };
  const getInitialStep = () => {
    const saved = localStorage.getItem("autoSiteCurrentStep");
    if (saved && !isNaN(Number(saved))) {
      return Number(saved);
    }
    return 0;
  };
  const [formData, setFormData] = useState<FormData>(getInitialFormData());

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
  const [currentStep, setCurrentStep] = useState(getInitialStep());
  // Move these out of renderStep/case 4
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // FIX: Move these hooks to top level to avoid blank screen/hook error
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [photoPreviews, setPhotoPreviews] = useState<string[]>(["", "", "", ""]);
  const [heroTitleError, setHeroTitleError] = useState<string>("");
  const [bannerError, setBannerError] = useState<string>("");
  const [companyId, setCompanyId] = useState(() => {
    const saved = localStorage.getItem("autoSiteCompanyId");
    return saved && !isNaN(Number(saved)) ? Number(saved) : 0;
  });

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
    // Restore companyId from localStorage if available
    const savedCompanyId = localStorage.getItem("autoSiteCompanyId");
    if (savedCompanyId && !isNaN(Number(savedCompanyId))) {
      setCompanyId(Number(savedCompanyId));
    }

    // Wait for userID to be available after Google auth
    const attemptLoadForm = async () => {
      console.log('[AutoSite] Starting form load attempt...');

      let userID = localStorage.getItem('userID');
      let attempts = 0;
      const maxAttempts = 15; // Increased from 10 to 15

      // Wait for userID to be available (especially important after OAuth)
      while (!userID && attempts < maxAttempts) {
        console.log(`[AutoSite] Waiting for userID, attempt ${attempts + 1}/${maxAttempts}`);
        await new Promise(resolve => setTimeout(resolve, 300)); // Increased from 200ms to 300ms
        userID = localStorage.getItem('userID');
        attempts++;
      }

      if (!userID) {
        console.warn('[AutoSite] No userID found after waiting, initializing defaults');
        setCurrentStep(0);
        setFormData(defaultFormData);
        setCompanyId(0);
        localStorage.removeItem("autoSiteCompanyId");
        return;
      }

      console.log('[AutoSite] Found userID:', userID, 'loading form data...');

      try {
        const response = await fetch(`/api/load-form`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: "include",
          body: JSON.stringify({ user_id: userID })
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        console.log('[AutoSite] Form data loaded for user', userID, ':', {
          step_number: data.step_number,
          has_form_data: !!data.form_data && Object.keys(data.form_data).length > 0,
          has_company: !!data.company,
          debug: data.debug
        });

        // Always use the step_number from the database, no fallbacks to localStorage
        const dbStepNumber = data.step_number || 0;
        setCurrentStep(dbStepNumber);
        console.log('[AutoSite] Set current step to:', dbStepNumber);

        // Robustly parse form_data if string
        let parsedFormData = defaultFormData;
        if (typeof data.form_data === "string") {
          try {
            const parsed = JSON.parse(data.form_data);
            parsedFormData = Object.keys(parsed).length ? parsed : defaultFormData;
          } catch {
            console.warn('[AutoSite] Failed to parse form_data string');
            parsedFormData = defaultFormData;
          }
        } else if (data.form_data && Object.keys(data.form_data).length) {
          parsedFormData = data.form_data;
        } else {
          parsedFormData = defaultFormData;
        }
        setFormData(parsedFormData);

        // Restore products and campaigns arrays if present in loaded form_data
        if (parsedFormData.products && Array.isArray(parsedFormData.products)) {
          setProducts(parsedFormData.products);
        }
        if (parsedFormData.campaigns && Array.isArray(parsedFormData.campaigns)) {
          setCampaigns(parsedFormData.campaigns);
        }

        // Set companyId from backend if available
        if (data.company && data.company.id) {
          setCompanyId(data.company.id);
          localStorage.setItem("autoSiteCompanyId", String(data.company.id));
          console.log('[AutoSite] Set companyId from database:', data.company.id);
        } else {
          // Clear company ID if no company exists
          setCompanyId(0);
          localStorage.removeItem("autoSiteCompanyId");
          console.log('[AutoSite] No company found, cleared companyId');
        }
      } catch (error) {
        console.error('[AutoSite] Failed to load form for user', userID, ':', error);
        setCurrentStep(0);
        setFormData(defaultFormData);
        setCompanyId(0);
        localStorage.removeItem("autoSiteCompanyId");
      }
    };

    attemptLoadForm();
  }, []);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem("autoSiteFormData", JSON.stringify(updated));
      return updated;
    });
  };

  const saveStep = async (stepNumber, data) => {
    const userID = localStorage.getItem('userID');
    if (!userID) {
      console.warn('[saveStep] missing userID; aborting');
      return;
    }
    // Always include products and campaigns arrays in form_data
    const formDataToSave = {
      ...data,
      products: products,
      campaigns: campaigns
    };
    try {
      const res = await fetch('/api/save-step', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ step_number: stepNumber, form_data: formDataToSave, user_id: userID })
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        console.warn('[saveStep] server rejected', res.status, j);
        toast({
          title: 'Save Failed',
          description: j.error || 'Could not save progress. Please try again.',
          variant: 'destructive'
        });
      } else {
        console.log('[saveStep] success for step', stepNumber);
      }
    } catch (e) {
      console.warn('[saveStep] network error', e);
      toast({
        title: 'Network Error',
        description: 'Could not save progress. Check connection.',
        variant: 'destructive'
      });
    }
  };

  const nextStep = async () => {
    if (currentStep < 9) {
      const newStep = currentStep + 1;
      await saveStep(newStep, formData);
      setCurrentStep(newStep);
      localStorage.setItem("autoSiteCurrentStep", String(newStep));
    }
  };

  const handleDomain = async () => {
    setIsLoading(true);
    // Basic validation before hitting API
    const d = (formData.domain || '').trim();
    if (!d) {
      toast({ title: 'Domain Required', description: 'Please enter a sub-domain before continuing.', variant: 'destructive' });
      setIsLoading(false);
      return;
    }
    if (currentStep < 9) {
      const newStep = currentStep + 1;
      await saveStep(newStep, formData);
      try {
        const apiUrl = `${apiBase}/api/domain-check`;
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({ domain: d }),
        });
        let data: any = {};
        try { data = await response.json(); } catch { }
        if (!response.ok) {
          const msg = data?.error || 'Failed to check domain';
          toast({ title: 'Domain Check Failed', description: msg, variant: 'destructive' });
          setIsLoading(false);
          return;
        }
        if (data.exists) {
          if (isEditing) {
            // If editing, allow using existing domain, just save progress and go to next step
            await saveStep(newStep, formData);
            setCurrentStep(newStep);
            setIsLoading(false);
            return;
          } else {
            // If creating new, show error and block
            toast({
              title: "Sub-Domain Already Exists",
              description: "Please choose a different sub-domain.",
              variant: "destructive",
            });
            setIsLoading(false);
            return;
          }
        }
        // If domain does not exist, proceed as normal
        setCurrentStep(newStep);
        localStorage.setItem("autoSiteCurrentStep", String(newStep));
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to check domain. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  }


  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => {
        const newStep = prev - 1;
        localStorage.setItem("autoSiteCurrentStep", String(newStep));
        return newStep;
      });
    }


  };

  const saveCompanyDetails = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const newStep = currentStep + 1;
    const userID = localStorage.getItem('userID');
    try {
      // Always use latest formData including phone and template_type_id
      const payload = { ...formData, user_id: userID, phone: formData.phone, template_type_id: formData.template_type_id };
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
        localStorage.setItem("autoSiteCompanyId", String(data.companyId));
        await saveStep(newStep, { ...formData, phone: formData.phone, template_type_id: formData.template_type_id });
        setCurrentStep(newStep);
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
    const newStep = currentStep + 1;
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
      await saveStep(newStep, formData);
      setCurrentStep(newStep); // Show success page
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
    // Hostinger deployment route disabled; simulate success using previewUrl
    setIsDeploying(true);
    setErrorMessage("");
    try {
      const simulatedUrl = previewUrl || siteUrl || (formData.domain.startsWith('http') ? formData.domain : `https://${formData.domain}`);
      if (!isValidUrl(simulatedUrl)) {
        setErrorMessage('Cannot determine site URL for deployment simulation.');
        return;
      }
      setTimeout(() => {
        setDeployedUrl(simulatedUrl);
        setSiteUrl(simulatedUrl);
        setPreviewUrl(simulatedUrl);
        localStorage.setItem('autoSiteDeployedUrl', simulatedUrl);
        localStorage.setItem('autoSiteSiteUrl', simulatedUrl);
        localStorage.setItem('autoSitePreviewUrl', simulatedUrl);
        nextStep();
        localStorage.removeItem('autoSiteCurrentStep');
        localStorage.removeItem('autoSiteFormData');
      }, 600);
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
                <Label htmlFor="domain">Sub-Domain Name <span className="text-red-500">*</span></Label>
                <Input
                  id="domain"
                  type="text"
                  placeholder="mybusiness.com"
                  value={formData.domain}
                  onChange={(e) => updateFormData("domain", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleDomain}
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
                <Label htmlFor="sector">Business Sector <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.businessSector}
                  onValueChange={(value) => {
                    const selected = businessSectors.find(s => s.name === value);
                    updateFormData("businessSector", selected?.name || "");
                    updateFormData("template_type_id", selected?.template_type_id ?? null);
                  }}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={sectorLoading ? "Loading..." : "Select your business sector"} />
                  </SelectTrigger>
                  <SelectContent>
                    {businessSectors.map((sector) => (
                      <SelectItem key={sector.name} value={sector.name}>
                        {sector.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={prevStep}
                  className="flex-1 outline"
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
                <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className="mt-2"
                  required
                />
                {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
              </div>
              <div>
                <Label htmlFor="phone">Business Phone <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9999999999"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="mt-2"
                  required
                />
                {phoneError && <div className="text-red-500 text-xs mt-1">{phoneError}</div>}
              </div>
              {/* Social Links */}
              <div>
                <Label htmlFor="facebookLink">Facebook Link</Label>
                <Input
                  id="facebookLink"
                  type="url"
                  placeholder="https://facebook.com/yourpage"
                  value={formData.facebookLink || ""}
                  onChange={e => updateFormData("facebookLink", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="youtubeLink">YouTube Link</Label>
                <Input
                  id="youtubeLink"
                  type="url"
                  placeholder="https://youtube.com/yourchannel"
                  value={formData.youtubeLink || ""}
                  onChange={e => updateFormData("youtubeLink", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="linkedinLink">LinkedIn Link</Label>
                <Input
                  id="linkedinLink"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedinLink || ""}
                  onChange={e => updateFormData("linkedinLink", e.target.value)}
                  className="mt-2"
                />
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
                <Label htmlFor="logoUpload">Upload Your Logo <span className="text-red-500">*</span></Label>
                <Input
                  id="logoUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="mt-2"
                  required
                />
                {formData.logoPath && (
                  <div className="mt-2 text-xs text-green-600">Logo uploaded: {formData.logoPath}</div>
                )}
              </div>
              <div>
                <Label htmlFor="location">Address <span className="text-red-500">*</span></Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="iframe">Map Iframe</Label>
                <div className="flex gap-2">
                  <Input
                    id="iframe"
                    type="text"
                    placeholder="Paste your Google Maps iframe code here"
                    value={formData.iframe || ""}
                    onChange={e => updateFormData("iframe", e.target.value)}
                    className="mt-2 flex-1"
                  />
                  <Button
                    type="button"
                    className="mt-2"
                    onClick={() => window.open('https://www.google.com/maps', '_blank')}
                  >
                    Get Your Iframe
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={prevStep}
                  className="flex-1 border border-foreground/30 bg-transparent text-foreground"
                  disabled={isEditing} // Disable back button in editing mode
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={saveCompanyDetails}
                  disabled={
                    !formData.companyName?.trim() ||
                    !formData.email?.trim() ||
                    !isValidEmail(formData.email) ||
                    !formData.phone?.trim() ||
                    !formData.logoPath?.trim() ||
                    !formData.location?.trim()
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
                    <Label htmlFor="heroTitle">Hero Section (Landing Page) Title <span className="text-red-500">*</span></Label>
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
                      required
                    />
                    {heroTitleError && <div className="text-red-500 text-xs mt-1">{heroTitleError}</div>}
                  </div>
                  <div>
                    <Label htmlFor="heroSubtitle">Hero Section Subtitle <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="heroSubtitle"
                      placeholder="Sub-heading below the title"
                      value={formData.heading_desc || ""}
                      onChange={e => updateFormData("heading_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bannerImage">Hero Banner Image <span className="text-red-500">*</span></Label>
                    <Input
                      id="bannerImage"
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "banner_path")}
                      className="mt-2"
                      required
                    />
                    {bannerError && <div className="text-red-500 text-xs mt-1">{bannerError}</div>}
                    {bannerPreview && bannerPreview !== "" && (
                      <img
                        src={bannerPreview}
                        alt="Banner Preview"
                        className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="200"
                      />
                    )}
                  </div>
                  {/* <div>
                    <Label>Homepage Photo 1 (Optional)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageUpload(e, "photo_1", 0)}
                      className="mt-2"
                    />
                    {photoPreviews[0] && photoPreviews[0] !== "" && (
                      <img 
                        src={photoPreviews[0]} 
                        alt="Photo 1 Preview" 
                        className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="200"
                      />
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
                      <img 
                        src={photoPreviews[1]} 
                        alt="Photo 2 Preview" 
                        className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="200"
                      />
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
                      <img 
                        src={photoPreviews[2]} 
                        alt="Photo 3 Preview" 
                        className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="200"
                      />
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
                      <img 
                        src={photoPreviews[3]} 
                        alt="Photo 4 Preview" 
                        className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="200"
                      />
                    )}
                  </div> */}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">About-us Page Contents</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="vision_desc">Our Vision <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="vision_desc"
                      placeholder="Describe your company's long-term vision..."
                      value={formData.vision_desc || ""}
                      onChange={e => updateFormData("vision_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mission_desc">Our Mission <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="mission_desc"
                      placeholder="Describe your company's mission statement..."
                      value={formData.mission_desc || ""}
                      onChange={e => updateFormData("mission_desc", e.target.value)}
                      className="mt-2 min-h-[60px]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="our_story">Our Story <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="our_story"
                      placeholder="Describe your company's core activities or services..."
                      value={formData.our_story || ""}
                      onChange={e => updateFormData("our_story", e.target.value)}
                      className="mt-2 min-h-[60px]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="what_we_do">What We Do <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="what_we_do"
                      placeholder="Describe your company's core activities or services..."
                      value={formData.what_we_do || ""}
                      onChange={e => updateFormData("what_we_do", e.target.value)}
                      className="mt-2 min-h-[60px]"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Conditional NGO Campaigns UI */}
              {formData.template_type_id === 2 ? (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Add Campaigns</h3>
                  {campaigns.map((campaign, idx) => (
                    <div key={idx} className="space-y-4 border rounded p-4 mb-4 relative">
                      <h4 className="text-lg font-semibold mb-2 flex items-center justify-between">
                        <span>Campaign {idx + 1}</span>
                        {campaigns.length > 1 && (
                          <button
                            type="button"
                            aria-label="Remove"
                            className="ml-2 text-red-500 hover:text-red-700 text-xl font-bold absolute top-2 right-2"
                            onClick={() => {
                              setCampaigns(prev => prev.filter((_, i) => i !== idx));
                            }}
                          >
                            &times;
                          </button>
                        )}
                      </h4>
                      <div>
                        <Label htmlFor={`campaign_name_${idx}`}>Campaign Name <span className="text-red-500">*</span></Label>
                        <Input
                          id={`campaign_name_${idx}`}
                          type="text"
                          placeholder="Enter campaign name"
                          value={campaign.campaign_name}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].campaign_name = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`campaign_description_${idx}`}>Campaign Description (Optional)</Label>
                        <Textarea
                          id={`campaign_description_${idx}`}
                          placeholder="Describe the campaign"
                          value={campaign.campaign_description}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].campaign_description = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2 min-h-[60px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`volunteers_${idx}`}>Volunteers <span className="text-red-500">*</span></Label>
                        <Input
                          id={`volunteers_${idx}`}
                          type="number"
                          placeholder="Number of volunteers"
                          value={campaign.volunteers}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].volunteers = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`raised_${idx}`}>Raised Amount (Optional)</Label>
                        <Input
                          id={`raised_${idx}`}
                          type="number"
                          placeholder="Amount raised"
                          value={campaign.raised}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].raised = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`campaign_status_${idx}`}>Status <span className="text-red-500">*</span></Label>
                        <Select
                          value={campaign.campaign_status}
                          onValueChange={value => {
                            const updated = [...campaigns];
                            updated[idx].campaign_status = value;
                            setCampaigns(updated);
                          }}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Ongoing">Ongoing</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor={`goal_${idx}`}>Goal <span className="text-red-500">*</span></Label>
                        <Input
                          id={`goal_${idx}`}
                          type="text"
                          placeholder="Goal of campaign"
                          value={campaign.goal}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].goal = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`impact_${idx}`}>Impact <span className="text-red-500">*</span></Label>
                        <Input
                          id={`impact_${idx}`}
                          type="text"
                          placeholder="Impact of campaign"
                          value={campaign.impact}
                          onChange={e => {
                            const updated = [...campaigns];
                            updated[idx].impact = e.target.value;
                            setCampaigns(updated);
                          }}
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => {
                      // Validate previous campaigns
                      const last = campaigns[campaigns.length - 1];
                      if (!last.campaign_name || !last.volunteers || !last.campaign_status || !last.goal || !last.impact) {
                        toast({
                          title: "Fill all required fields for previous campaign",
                          variant: "destructive"
                        });
                        return;
                      }
                      setCampaigns(prev => ([
                        ...prev,
                        {
                          campaign_name: "",
                          campaign_description: "",
                          volunteers: "",
                          raised: "",
                          campaign_status: "",
                          goal: "",
                          impact: ""
                        }
                      ]));
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white mb-4"
                  >
                    Add More Campaigns
                  </Button>
                </div>
              ) : (
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="isProductBased"
                      checked={isProductBased}
                      onChange={e => {
                        const checked = e.target.checked;
                        setIsProductBased(checked);
                        updateFormData('isProductBased', checked);
                        updateFormData('display_in_menu', checked ? 1 : 0);
                        setProducts(prev => prev.map(prod => ({
                          ...prod,
                          display_in_menu: checked ? 1 : 0
                        })));
                      }}
                      className="mr-2"
                    />
                    <Label htmlFor="isProductBased">Is your company product-based?</Label>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {isProductBased ? 'Products' : 'Services'}
                  </h3>
                  {products.map((item, idx) => (
                    <div key={idx} className="space-y-4 border rounded p-4 mb-4 relative">
                      <h4 className="text-lg font-semibold mb-2 flex items-center justify-between">
                        <span>{isProductBased ? `Product ${idx + 1}` : `Service ${idx + 1}`}</span>
                        {products.length > 1 && (
                          <button
                            type="button"
                            aria-label="Remove"
                            className="ml-2 text-red-500 hover:text-red-700 text-xl font-bold absolute top-2 right-2"
                            onClick={() => {
                              setProducts(prev => prev.filter((_, i) => i !== idx));
                              setProductPreviews(prev => prev.filter((_, i) => i !== idx));
                            }}
                          >
                            &times;
                          </button>
                        )}
                      </h4>
                      <div>
                        <Label htmlFor={`name_${idx}`}>Name <span className="text-red-500">*</span></Label>
                        <Input
                          id={`name_${idx}`}
                          type="text"
                          placeholder="Enter name"
                          value={item.name}
                          onChange={e => {
                            const newProducts = [...products];
                            newProducts[idx].name = e.target.value;
                            setProducts(newProducts);
                          }}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`short_description_${idx}`}>Short Description (Optional)</Label>
                        <Input
                          id={`short_description_${idx}`}
                          type="text"
                          placeholder="Short description"
                          value={item.short_description}
                          onChange={e => {
                            const newProducts = [...products];
                            newProducts[idx].short_description = e.target.value;
                            setProducts(newProducts);
                          }}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`full_description_${idx}`}>Full Description <span className="text-red-500">*</span></Label>
                        <Textarea
                          id={`full_description_${idx}`}
                          placeholder="Full description"
                          value={item.full_description}
                          onChange={e => {
                            const newProducts = [...products];
                            newProducts[idx].full_description = e.target.value;
                            setProducts(newProducts);
                          }}
                          className="mt-2 min-h-[80px]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`product_image_${idx}`}>Image <span className="text-red-500">*</span></Label>
                        <Input
                          id={`product_image_${idx}`}
                          type="file"
                          accept="image/*"
                          onChange={e => handleProductImageUploadMulti(e, idx)}
                          className="mt-2"
                          required
                        />
                        {productPreviews[idx] && productPreviews[idx] !== "" && (
                          <img
                            src={productPreviews[idx]}
                            alt="Preview"
                            className="mt-2 rounded shadow w-full max-w-xs mx-auto"
                            loading="lazy"
                            decoding="async"
                            width="320"
                            height="200"
                          />
                        )}
                      </div>
                      {isProductBased && (
                        <div>
                          <Label htmlFor={`price_${idx}`}>Price (Optional)</Label>
                          <Input
                            id={`price_${idx}`}
                            type="number"
                            placeholder="Price"
                            value={item.price}
                            onChange={e => {
                              const newProducts = [...products];
                              newProducts[idx].price = e.target.value;
                              setProducts(newProducts);
                            }}
                            className="mt-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={handleAddMore}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white mb-4"
                  >
                    Add More {isProductBased ? "Product" : "Service"}
                  </Button>
                </div>
              )}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={prevStep}
                  className="flex-1"
                  disabled={isLoading}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleGenerateSite}
                  disabled={
                    isLoading ||
                    !formData.heading ||
                    !formData.heading_desc ||
                    !formData.banner_path ||
                    !formData.vision_desc ||
                    !formData.mission_desc ||
                    !formData.what_we_do ||
                    !formData.our_story ||
                    (formData.template_type_id === 2
                      ? campaigns.length === 0 || campaigns.some(camp =>
                        !camp.campaign_name ||
                        !camp.volunteers ||
                        !camp.campaign_status ||
                        !camp.goal ||
                        !camp.impact
                      )
                      : products.length === 0 || products.some(item => !item.name || !item.full_description || !item.product_image)
                    )
                  }
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {isEditing ? "Updating..." : "Generating..."}
                    </>
                  ) : (
                    <>
                      {isEditing ? "Update Site" : "Generate Site"}
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
          setFormData(defaultFormData);
          localStorage.setItem("autoSiteCurrentStep", "0");
          localStorage.setItem("autoSiteFormData", JSON.stringify(defaultFormData));
          setBuildId("");
          setBuildStatus("");
          setPreviewUrl("");
          setIsLoading(false);
          setIsDeploying(false);
          setDeployedUrl("");
          setErrorMessage("");
          setIsSuccess(false);
          setIsEditing(false);
        };

        // Edit Your Site button handler
        const handleEditYourSite = async () => {
          if (!companyId) {
            toast({ title: "Error", description: "Company ID missing.", variant: "destructive" });
            return;
          }
          try {
            const response = await fetch(`/api/times-edited`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ company_id: companyId })
            });
            if (!response.ok) {
              toast({
                title: "Edit Limit Reached",
                description: "You have reached the maximum number of edits allowed.",
                variant: "destructive"
              });
              return;
            }
            setCurrentStep(2);
            setIsEditing(true);
          } catch (err) {
            toast({ title: "Error", description: "Failed to check edit limit.", variant: "destructive" });
          }
        };

        const handleVisitWebsite = async () => {
          let host = '';
          if (companyId) {
            try {
              const res = await fetch(`/api/company-host/${companyId}`);
              const data = await res.json();
              if (res.ok && data.host) {
                host = data.host;
              }
            } catch (err) {
              // ignore error, fallback to old logic
            }
          }
          const baseUrl = window.location.origin;
          window.open(`${baseUrl}/${host}`, '_blank');

          // const url = `http://localhost:3000/${host}`;
          // window.open(url, '_blank');
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
                {isEditing ? "Your site has been updated." : "Your site has been created."}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              <Button
                onClick={handleVisitWebsite}
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 text-white"
              >
                Visit Your Website
              </Button>
              <Button
                onClick={handleEditYourSite}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
              >
                Edit Your Site
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
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
                  <span className="gradient-text">Automated</span>
                  <span className="block mt-2">Website Builder</span>
                </h1>
                <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Create a professional website in minutes with our guided builder.
                  No coding requiredjust answer a few questions and watch your site come to life.
                </p>
              </div>

              {/* Progress Steps - Responsive, no scroll */}
              <div className="w-full mb-14">
                {/* On small screens, stack vertically; on md+ screens, show in a row and center */}
                <div className="flex flex-col gap-4 items-center px-2 sm:flex-row sm:justify-center sm:gap-2">
                  {steps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-row sm:flex-col items-center sm:items-center min-w-[70px] max-w-[120px] flex-1 sm:flex-none">
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
                        <div className="ml-3 sm:ml-0 sm:mt-1 text-left sm:text-center">
                          <p className="text-xs font-bold leading-tight">{step.title}</p>
                          <p className="text-[10px] text-foreground/60 leading-tight">{step.description}</p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <>
                          {/* Down arrow for xs, right arrow for sm+ */}
                          <div className="flex sm:hidden items-center justify-center flex-none">
                            <svg width="18" height="18" className="text-foreground/20" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 3v12m-3-3 3 3 3-3" />
                            </svg>
                          </div>
                          <div className="hidden sm:flex items-center justify-center flex-none">
                            <svg width="18" height="18" className="text-foreground/20" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 9h12m-3-3 3 3-3 3" />
                            </svg>
                          </div>
                        </>
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