import "./global.css";

import { Toaster } from "@/components/ui/toaster";
// Auth0 removed
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import AutoSite from "./pages/AutoSite";
import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import Signup from "./pages/Signup";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import HostingServices from "./pages/services/HostingServices";
import SEOServices from "./pages/services/SEOServices";
import ContentCreation from "./pages/services/ContentCreation";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portfolio" element={<Gallery />} />
          <Route path="/auto-site" element={
            <ProtectedRoute>
              <AutoSite />
            </ProtectedRoute>
          } />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/hosting-services" element={<HostingServices />} />
          <Route path="/services/hosting" element={<Navigate to="/services/hosting-services" replace />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
