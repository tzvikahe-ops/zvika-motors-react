-- Rate limiting table for contact form submissions
-- Tracks requests by phone number and IP address

CREATE TABLE public.rate_limits (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT        NOT NULL,
  id_type    TEXT        NOT NULL CHECK (id_type IN ('phone', 'ip')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast lookups by identifier + time window
CREATE INDEX rate_limits_lookup_idx
  ON public.rate_limits (identifier, id_type, created_at);

-- RLS: Edge Function uses service role → no public access needed
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Auto-cleanup: delete records older than 2 hours to prevent table bloat
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.rate_limits
  WHERE created_at < now() - INTERVAL '2 hours';
$$;
