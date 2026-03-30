import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";

const RECAPTCHA_SITE_KEY = "6LddXZosAAAAAMqBHbxXsPEvVgcCZPiL9y5E2LZw";

const contactSchema = z.object({
  name: z.string().trim().min(2, "שם חייב להכיל לפחות 2 תווים").max(100),
  phone: z
    .string()
    .trim()
    .min(9, "מספר טלפון לא תקין")
    .max(20)
    .regex(/^[\d\-\+\s\(\)]+$/, "מספר טלפון לא תקין"),
  message: z.string().trim().max(1000).optional(),
});

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((p) => ({ ...p, [name]: value }));
      setErrors((p) => ({ ...p, [name]: "" }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const field = i.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA לא נטען");
      }

      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
            .then(resolve)
            .catch(reject);
        });
      });

      const { data, error } = await supabase.functions.invoke("verify-recaptcha", {
        body: { token, ...result.data },
      });

      if (error || !data?.success) {
        throw new Error(data?.error || "שגיאה בשליחת הטופס");
      }

      setStatus("success");
      trackFormSubmit(); /* GA4: form_submit */
      setForm({ name: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "שגיאה בשליחת הטופס, נסו שוב");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-sm)] border border-border text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="font-bold text-foreground text-[16px] mb-2">הפנייה נשלחה בהצלחה!</h3>
        <p className="text-muted-foreground text-[13px]">נחזור אליכם בהקדם. תודה רבה!</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-brand-red text-[13px] font-bold hover:underline"
        >
          שלח פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-lg p-8 shadow-[var(--shadow-sm)] border border-border"
      noValidate
    >
      <h2 className="font-bold text-[16px] text-foreground mb-1">מעדיפים שנחזור אליכם?</h2>
      <p className="text-[12px] text-muted-foreground mb-5 leading-relaxed">השאירו שם וטלפון — ניצור קשר בהקדם, בלי התחייבות.</p>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-[13px] font-bold text-foreground mb-1.5">
            שם מלא <span className="text-brand-red">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
            placeholder="הזינו את שמכם"
          />
          {errors.name && <p className="text-destructive text-[11px] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-phone" className="block text-[13px] font-bold text-foreground mb-1.5">
            טלפון <span className="text-brand-red">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            maxLength={20}
            dir="ltr"
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors text-left"
            placeholder="050-0000000"
          />
          {errors.phone && <p className="text-destructive text-[11px] mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-[13px] font-bold text-foreground mb-1.5">
            הודעה
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={1000}
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors resize-none"
            placeholder="ספרו לנו על הרכב והבעיה (אופציונלי)"
          />
        </div>

        {status === "error" && (
          <p className="text-destructive text-[12px] bg-destructive/5 rounded-md px-3 py-2">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand-red text-accent-foreground rounded-md px-5 py-3 text-[13px] font-bold hover:bg-brand-red-hover transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "שולח..." : "שלחו פנייה"}
        </button>

        <p className="text-muted-foreground text-[10px] text-center leading-relaxed">
          הטופס מוגן באמצעות reCAPTCHA של Google.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">פרטיות</a>{" "}
          ו<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">תנאי שימוש</a>.
        </p>
      </div>
    </form>
  );
}
