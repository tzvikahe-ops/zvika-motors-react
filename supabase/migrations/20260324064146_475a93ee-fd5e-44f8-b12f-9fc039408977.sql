-- Create storage bucket for AI-generated images
INSERT INTO storage.buckets (id, name, public)
VALUES ('generated-images', 'generated-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to read generated images
CREATE POLICY "Public read access for generated images"
ON storage.objects FOR SELECT
USING (bucket_id = 'generated-images');

-- Allow anon to upload generated images (edge function uses service role anyway)
CREATE POLICY "Anon can upload generated images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'generated-images');

-- Table to track generated images
CREATE TABLE public.generated_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  storage_path TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.generated_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view generated images"
ON public.generated_images FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert generated images"
ON public.generated_images FOR INSERT
WITH CHECK (true);