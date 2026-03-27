
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  message text,
  recaptcha_score real
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
ON public.contact_submissions FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "No public reads on contact submissions"
ON public.contact_submissions FOR SELECT
TO public
USING (false);
