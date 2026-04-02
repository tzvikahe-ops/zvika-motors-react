-- Add restrictive DELETE policy on generated_images table
CREATE POLICY "No public deletes on generated images"
ON public.generated_images
FOR DELETE
USING (false);

-- Add restrictive UPDATE policy on generated_images table
CREATE POLICY "No public updates on generated images"
ON public.generated_images
FOR UPDATE
USING (false);

-- Add restrictive DELETE policy on storage objects for generated-images bucket
CREATE POLICY "No deletes on generated-images storage"
ON storage.objects
FOR DELETE
USING (false);

-- Add restrictive UPDATE policy on storage objects for generated-images bucket
CREATE POLICY "No updates on generated-images storage"
ON storage.objects
FOR UPDATE
USING (false);

-- Restrict INSERT on storage to only the generated-images bucket with UUID-based filenames
CREATE POLICY "Only allow inserts to generated-images bucket"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'generated-images' AND name ~ '^[0-9a-f\-]{36}\.png$');
