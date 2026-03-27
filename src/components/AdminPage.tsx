import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Submission {
  id: string;
  name: string;
  phone: string;
  message: string | null;
  recaptcha_score: number | null;
  created_at: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("get-submissions", {
        body: { password },
      });

      if (fnError || !data?.success) {
        setError(data?.error || "שגיאה בהתחברות");
        return;
      }

      setSubmissions(data.submissions);
      setAuthenticated(true);
    } catch {
      setError("שגיאה בהתחברות");
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    setLoading(true);
    try {
      const { data } = await supabase.functions.invoke("get-submissions", {
        body: { password },
      });
      if (data?.success) setSubmissions(data.submissions);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
        <form onSubmit={handleLogin} className="bg-card border border-border rounded-lg p-8 w-full max-w-sm shadow-md">
          <h1 className="text-xl font-bold text-foreground mb-6 text-center">ניהול פניות</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="סיסמת מנהל"
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          />
          {error && <p className="text-destructive text-xs mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red text-accent-foreground rounded-md py-2.5 text-sm font-bold hover:bg-brand-red-hover transition-colors disabled:opacity-60"
          >
            {loading ? "מתחבר..." : "כניסה"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-foreground">פניות שהתקבלו ({submissions.length})</h1>
          <button
            onClick={refresh}
            disabled={loading}
            className="bg-brand-red text-accent-foreground rounded-md px-4 py-2 text-sm font-bold hover:bg-brand-red-hover transition-colors disabled:opacity-60"
          >
            {loading ? "טוען..." : "רענן"}
          </button>
        </div>

        {submissions.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">אין פניות עדיין</p>
        ) : (
          <div className="space-y-3">
            {submissions.map((s) => (
              <div key={s.id} className="bg-card border border-border rounded-lg p-5 shadow-sm">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground">{s.name}</span>
                    <a
                      href={`tel:${s.phone}`}
                      className="text-brand-red font-medium text-sm hover:underline"
                      dir="ltr"
                    >
                      {s.phone}
                    </a>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {new Date(s.created_at).toLocaleString("he-IL")}
                  </span>
                </div>
                {s.message && (
                  <p className="text-foreground text-sm mt-2 bg-muted/50 rounded-md p-3">{s.message}</p>
                )}
                <div className="flex gap-3 mt-3">
                  <a
                    href={`https://wa.me/972${s.phone.replace(/^0/, "").replace(/[\-\s\(\)]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-600 hover:underline font-medium"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href={`tel:${s.phone}`}
                    className="text-xs text-blue-600 hover:underline font-medium"
                  >
                    📞 התקשר
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
