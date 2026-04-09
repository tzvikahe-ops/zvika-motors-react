import { useState } from "react";
import { lovableCloud } from "@/lib/lovable-cloud";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const switchMode = (m: "login" | "signup" | "forgot") => {
    setMode(m);
    setError("");
    setMessage("");
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const { error } = await lovableCloud.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setMessage("נשלח אליך מייל לאיפוס סיסמה. בדוק את תיבת הדואר שלך.");
    } catch (err: any) {
      setError(err.message || "שגיאה");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (mode === "login") {
        const { error } = await lovableCloud.auth.signInWithPassword({ email, password });
        if (error) throw error;

        await lovableCloud.functions.invoke("assign-admin-role").catch(() => {});

        setMessage("התחברת בהצלחה! מעביר...");
        setTimeout(() => {
          window.location.href = "/admin-panel";
        }, 1000);
      } else {
        const { error } = await lovableCloud.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        setMessage("נשלח אליך מייל אימות. בדוק את תיבת הדואר שלך.");
      }
    } catch (err: any) {
      setError(err.message || "שגיאה");
    } finally {
      setLoading(false);
    }
  };

  if (mode === "forgot") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">איפוס סיסמה</CardTitle>
            <CardDescription>הזן את כתובת האימייל שלך ונשלח לך קישור לאיפוס</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">אימייל</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  dir="ltr"
                />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              {message && <p className="text-sm text-foreground">{message}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "שולח..." : "שלח קישור איפוס"}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                חזרה להתחברות
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{mode === "login" ? "התחברות" : "הרשמה"}</CardTitle>
          <CardDescription>
            {mode === "login" ? "הזן את פרטי ההתחברות שלך" : "צור חשבון חדש"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">אימייל</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                dir="ltr"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">סיסמה</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                dir="ltr"
              />
            </div>

            {mode === "login" && (
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => switchMode("forgot")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  שכחת סיסמה?
                </button>
              </div>
            )}

            {error && <p className="text-destructive text-sm">{error}</p>}
            {message && <p className="text-sm text-foreground">{message}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "טוען..." : mode === "login" ? "התחבר" : "הירשם"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => switchMode(mode === "login" ? "signup" : "login")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {mode === "login" ? "אין לך חשבון? הירשם" : "כבר יש לך חשבון? התחבר"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
