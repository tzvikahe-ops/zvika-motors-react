import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const FALLBACK_URL = "https://czwuljhqiqgtqtgdpvwr.supabase.co";
const FALLBACK_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6d3VsamhxaXFndHF0Z2RwdndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMDc0NTUsImV4cCI6MjA4OTc4MzQ1NX0.6sV7hp-LGbAzhGQBVbLIdj_1EII3FGJ--RjaoMcHSqA";

const resolveRuntimeValue = (value: string | undefined, placeholder: string) => {
  if (!value || value === placeholder) {
    return undefined;
  }

  return value;
};

const backendUrl = resolveRuntimeValue(import.meta.env.VITE_SUPABASE_URL, "https://placeholder.supabase.co") ?? FALLBACK_URL;
const publishableKey = resolveRuntimeValue(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY, "placeholder-key") ?? FALLBACK_PUBLISHABLE_KEY;

export const lovableCloud = createClient<Database>(backendUrl, publishableKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
