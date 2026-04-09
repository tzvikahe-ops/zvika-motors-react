import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
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
const ResetPasswordPage = lazy(() => import("./components/ResetPasswordPage.tsx"));
const DiagnosticsPage = lazy(() => import("./components/DiagnosticsPage.tsx"));
const ACPage = lazy(() => import("./components/ACPage.tsx"));
const TestPrepPage = lazy(() => import("./components/TestPrepPage.tsx"));
const GeneralMechanicPage = lazy(() => import("./components/GeneralMechanicPage.tsx"));

/** Redirects /blog/:slug → /blog/:slug/ */
function BlogSlugRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/blog/${slug}/`} replace />;
}

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
            <Route path="/blog/:slug" element={<BlogSlugRedirect />} />
            <Route path="/blog/:slug/" element={<Index />} />
            {/* 301-style redirect from old article slug to new one */}
            <Route path="/blog/איך-לבחור-מוסך-אמין-בירושלים/" element={<Navigate to="/blog/musach-mumla-yerushalayim/" replace />} />
            <Route path="/blog/%D7%90%D7%99%D7%9A-%D7%9C%D7%91%D7%97%D7%95%D7%A8-%D7%9E%D7%95%D7%A1%D7%9A-%D7%90%D7%9E%D7%99%D7%9F-%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/" element={<Navigate to="/blog/musach-mumla-yerushalayim/" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy/" replace />} />
            <Route path="/privacy/" element={<Index />} />
            <Route path="/accessibility" element={<Navigate to="/accessibility/" replace />} />
            <Route path="/accessibility/" element={<Index />} />
            <Route path="/image-generator" element={<Navigate to="/image-generator/" replace />} />
            <Route path="/image-generator/" element={<Index />} />
            <Route path="/services/diagnostics" element={<Navigate to="/services/diagnostics/" replace />} />
            <Route path="/services/diagnostics/" element={<Suspense fallback={null}><DiagnosticsPage /></Suspense>} />
            <Route path="/services/ac" element={<Navigate to="/services/ac/" replace />} />
            <Route path="/services/ac/" element={<Suspense fallback={null}><ACPage /></Suspense>} />
            <Route path="/services/test" element={<Navigate to="/services/test/" replace />} />
            <Route path="/services/test/" element={<Suspense fallback={null}><TestPrepPage /></Suspense>} />
            <Route path="/services/general" element={<Navigate to="/services/general/" replace />} />
            <Route path="/services/general/" element={<Suspense fallback={null}><GeneralMechanicPage /></Suspense>} />
            <Route path="/image-studio" element={<Suspense fallback={null}><ImageStudioPage /></Suspense>} />
            <Route path="/auth" element={<Suspense fallback={null}><AuthPage /></Suspense>} />
            <Route path="/reset-password" element={<Suspense fallback={null}><ResetPasswordPage /></Suspense>} />
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
