

## Fix: Google Reviews Link Blocked

The `g.page` domain is being blocked by the browser (`ERR_BLOCKED_BY_RESPONSE`). This is a known issue — Google's short-link domains often set `Cross-Origin-Opener-Policy` headers that block embedded/new-tab navigation from some contexts.

### Solution

Replace the `g.page` short URL with the full Google Maps review URL format:

**File: `src/components/HomePage.tsx`** (line 172)
- Change `https://g.page/r/CWH4eCfd2MAOEBM/review` to `https://search.google.com/local/writereview?placeid=CWH4eCfd2MAOEBM`

Alternatively, use the Google Maps direct URL format:
- `https://www.google.com/maps/place/?q=place_id:CWH4eCfd2MAOEBM`

The `search.google.com/local/writereview` format opens the review dialog directly and is not blocked by CORP headers.

