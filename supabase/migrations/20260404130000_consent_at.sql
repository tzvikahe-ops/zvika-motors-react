-- הוספת עמודת חותמת זמן הסכמה לטבלת הפניות
-- נדרש לפי חוק הגנת הפרטיות הישראלי - תיעוד מתי המשתמש נתן הסכמה

ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS consent_at TIMESTAMPTZ;
