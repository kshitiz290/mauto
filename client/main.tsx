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
import Attendance_Leave_Management from "./pages/solutions/Attendance_Leave_Management";
import Order_Management_Solution from "./pages/solutions/Order_Management_Solution";
import Field_Force_Tracking from "./pages/solutions/Field_Force_Tracking";
import Distributor_Management_Solution from "./pages/solutions/Distributor_Management_Solution";
import Merchandising_Retail from "./pages/solutions/Merchandising_Retail";
import Expenses_Claims from "./pages/solutions/Expenses_Claims";
import Retailer_Management from "./pages/solutions/Retailer_Management";
import Sales_Activity from "./pages/solutions/Sales_Activity";
import Purchase_Order from "./pages/solutions/Purchase_Order";
import Store_Management from "./pages/solutions/Store_Management";
import Production_Management from "./pages/solutions/Production_Management";
import Packing_Management from "./pages/solutions/Packing_Management";
import Demand_Generation from "./pages/solutions/Demand_Generation";
import Invoice_Generation from "./pages/solutions/Invoice_Generation";
import Dispatch_Management from "./pages/solutions/Dispatch_Management";
import Plant_Management from "./pages/solutions/Plant_Management";
import HRMS from "./pages/solutions/HRMS";
import Website_Development from "./pages/solutions/Website_Development";
import CRM from "./pages/solutions/CRM";
import Digital_Marketing from "./pages/solutions/Digital_Marketing";
import Whatsapp_Ordering from "./pages/solutions/Whatsapp_Ordering";


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
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/auto-site" element={
            <ProtectedRoute>
              <AutoSite />
            </ProtectedRoute>
          } />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/attendance-leave-management" element={<Attendance_Leave_Management />} />
          <Route path="/order-management-solution" element={<Order_Management_Solution />} />
          <Route path="/field-force-tracking" element={<Field_Force_Tracking />} />
          <Route path="/distributor-management-solution" element={<Distributor_Management_Solution />} />
          <Route path="/merchandising-retail-execution" element={<Merchandising_Retail />} />
          <Route path="/expenses-claims-management" element={<Expenses_Claims />} />
          <Route path="/retailer-management-solution" element={<Retailer_Management />} />
          <Route path="/sales-activity-management" element={<Sales_Activity />} />
          <Route path="/purchase-order-management" element={<Purchase_Order />} />
          <Route path="/store-management-software" element={<Store_Management />} />
          <Route path="/production-management" element={<Production_Management />} />
          <Route path="/packing-management" element={<Packing_Management />} />
          <Route path="/demand-generation" element={<Demand_Generation />} />
          <Route path="/invoice-generation-solution" element={<Invoice_Generation />} />
          <Route path="/dispatch-management" element={<Dispatch_Management />} />
          <Route path="/plant-management" element={<Plant_Management />} />
          <Route path="/hrms" element={<HRMS />} />
          <Route path="/website-development-services" element={<Website_Development />} />
          <Route path="/crm-software" element={<CRM />} />
          <Route path="/digital-marketing-services" element={<Digital_Marketing />} />
          <Route path="/whatsapp-ordering-system" element={<Whatsapp_Ordering />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
