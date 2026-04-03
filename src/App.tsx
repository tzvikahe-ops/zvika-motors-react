import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import IndexHtmlRedirect from "./components/IndexHtmlRedirect.tsx";

const ImageStudioPage = lazy(() => import("./components/ImageStudioPage.tsx"));
const AdminPage = lazy(() => import("./components/AdminPage.tsx"));
const AuthPage = lazy(() => import("./components/AuthPage.tsx"));

// Lazy load toast components - not needed at initial render
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={null}>
          <Toaster />
          <Sonner />
        </Suspense>
        <BrowserRouter>
          <IndexHtmlRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Navigate to="/services/" replace />} />
            <Route path="/services/" element={<Index />} />
            <Route path="/about" element={<Navigate to="/about/" replace />} />
            <Route path="/about/" element={<Index />} />
            <Route path="/gallery" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/" element={<Index />} />
            <Route path="/contact" element={<Navigate to="/contact/" replace />} />
            <Route path="/contact/" element={<Index />} />
            <Route path="/faq" element={<Navigate to="/faq/" replace />} />
            <Route path="/faq/" element={<Index />} />
            <Route path="/blog" element={<Navigate to="/blog/" replace />} />
            <Route path="/blog/" element={<Index />} />
            <Route path="/blog/:slug/" element={<Index />} />
            <Route path="/privacy" element={<Navigate to="/privacy/" replace />} />
            <Route path="/privacy/" element={<Index />} />
            <Route path="/accessibility" element={<Navigate to="/accessibility/" replace />} />
            <Route path="/accessibility/" element={<Index />} />
            <Route path="/image-generator" element={<Navigate to="/image-generator/" replace />} />
            <Route path="/image-generator/" element={<Index />} />
            <Route path="/image-studio" element={<Suspense fallback={null}><ImageStudioPage /></Suspense>} />
            <Route path="/admin-panel" element={<Suspense fallback={null}><AdminPage /></Suspense>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
