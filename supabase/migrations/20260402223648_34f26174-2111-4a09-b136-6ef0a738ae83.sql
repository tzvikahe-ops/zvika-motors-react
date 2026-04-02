-- Remove the overly permissive old INSERT policy that bypasses filename validation
DROP POLICY IF EXISTS "Anon can upload generated images" ON storage.objects;
