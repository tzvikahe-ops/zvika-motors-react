import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const ImageStudioPage = lazy(() => import("./components/ImageStudioPage.tsx"));
const AdminPage = lazy(() => import("./components/AdminPage.tsx"));

// Lazy load toast components — not needed at initial render
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Suspense fallback={null}>
        <Toaster />
        <Sonner />
      </Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/gallery" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/faq" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/blog/:slug" element={<Index />} />
          <Route path="/privacy" element={<Index />} />
          <Route path="/accessibility" element={<Index />} />
          <Route path="/image-generator" element={<Index />} />
          <Route path="/image-studio" element={<Suspense fallback={null}><ImageStudioPage /></Suspense>} />
          <Route path="/admin-panel" element={<Suspense fallback={null}><AdminPage /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
