import { useState, useEffect, useCallback } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const FEATURABLE_WIDGET_ID = "02d896b2-2c43-46ae-bbe6-9783d9fc0c61";
const API_URL = `https://featurable.com/api/v1/widgets/${FEATURABLE_WIDGET_ID}`;

interface Reviewer {
  displayName: string;
  profilePhotoUrl: string;
  isAnonymous: boolean;
}

interface Review {
  reviewId: string;
  reviewer: Reviewer;
  comment: string;
  starRating: number;
  createTime: string;
  updateTime: string;
}

interface WidgetResponse {
  success: boolean;
  reviews?: Review[];
  averageRating?: number;
  totalReviewCount?: number;
  profileUrl?: string;
  error?: { key: string; message: string };
}

/**
 * Extracts original (Hebrew) text from a review comment.
 * Google reviews sometimes include "(Original)\n<original text>"
 * or "(Translated by Google)\n<translated text>\n\n(Original)\n<original text>"
 */
function extractOriginalText(comment: string): string {
  // Pattern: "(Original)\n<text>"
  const originalMarker = "(Original)";
  const translatedMarker = "(Translated by Google)";
  
  if (comment.includes(originalMarker)) {
    const parts = comment.split(originalMarker);
    if (parts.length > 1) {
      return parts[parts.length - 1].trim();
    }
  }
  
  // If there's a translated marker but no original, strip the translated marker
  if (comment.includes(translatedMarker)) {
    return comment.replace(translatedMarker, "").trim();
  }
  
  return comment;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "היום";
  if (diffDays === 1) return "אתמול";
  if (diffDays < 7) return `לפני ${diffDays} ימים`;
  if (diffDays < 30) return `לפני ${Math.floor(diffDays / 7)} שבועות`;
  if (diffDays < 365) return `לפני ${Math.floor(diffDays / 30)} חודשים`;
  return `לפני ${Math.floor(diffDays / 365)} שנים`;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating
              ? "fill-[#FBBC04] text-[#FBBC04]"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const originalText = extractOriginalText(review.comment);
  const shouldTruncate = originalText.length > 180;
  const displayText = shouldTruncate && !expanded
    ? originalText.slice(0, 180) + "..."
    : originalText;

  return (
    <div className="bg-card border border-border rounded-xl p-5 md:p-6 flex flex-col gap-4 min-w-0 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center gap-3">
        {review.reviewer.profilePhotoUrl ? (
          <img
            src={review.reviewer.profilePhotoUrl}
            alt={review.reviewer.displayName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-red/10 text-brand-red font-bold flex items-center justify-center text-xs ring-2 ring-brand-red/20">
            {getInitials(review.reviewer.displayName)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-foreground font-semibold text-[13px] leading-tight truncate">
            {review.reviewer.displayName}
          </p>
          <p className="text-muted-foreground text-[11px] mt-0.5">
            {getRelativeTime(review.createTime)}
          </p>
        </div>
        <Quote className="w-5 h-5 text-brand-red/20 shrink-0" />
      </div>

      {/* Stars */}
      <StarRating rating={review.starRating} />

      {/* Comment */}
      <p className="text-foreground/85 text-[13px] md:text-[14px] leading-relaxed flex-1">
        {displayText}
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-brand-red font-semibold mr-1 hover:underline text-[12px]"
          >
            {expanded ? "הצג פחות" : "קרא עוד"}
          </button>
        )}
      </p>

      {/* Google attribution */}
      <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-border/50">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-muted-foreground text-[10px]">ביקורת Google</span>
      </div>
    </div>
  );
}

export default function FeaturableWidget() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [profileUrl, setProfileUrl] = useState("");

  // Responsive: show different card count
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getVisibleCount]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: WidgetResponse) => {
        if (data.success !== false && data.reviews) {
          // Filter only reviews with text and 4+ stars
          const filtered = data.reviews.filter(
            (r) => r.comment && r.comment.trim().length > 0 && r.starRating >= 4
          );
          setReviews(filtered);
          setAverageRating(data.averageRating ?? 0);
          setTotalCount(data.totalReviewCount ?? filtered.length);
          setProfileUrl(data.profileUrl ?? "");
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  if (loading) {
    return (
      <div className="flex gap-4 justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 w-[320px] animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-muted rounded w-24" />
                <div className="h-2 bg-muted rounded w-16" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-muted rounded" />
              <div className="h-2 bg-muted rounded w-4/5" />
              <div className="h-2 bg-muted rounded w-3/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground text-sm">
          לא ניתן לטעון ביקורות כרגע.{" "}
          <a
            href="https://reviewthis.biz/dry-bird-8259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red hover:underline font-semibold"
          >
            צפו בביקורות שלנו בגוגל →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary badge */}
      {averageRating > 0 && (
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-foreground font-bold text-lg">{averageRating.toFixed(1)}</span>
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-muted-foreground text-[12px]">({totalCount} ביקורות)</span>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="relative">
        {/* Navigation buttons */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="ביקורת קודמת"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        )}
        {currentIndex < maxIndex && (
          <button
            onClick={next}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="ביקורת הבאה"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
        )}

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.reviewId}
                className="shrink-0"
                style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 16) / visibleCount}px)` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        {reviews.length > visibleCount && (
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-brand-red w-5"
                    : "bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`עמוד ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      {profileUrl && (
        <div className="text-center pt-2">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red text-[13px] font-semibold hover:underline inline-flex items-center gap-1"
          >
            צפו בכל הביקורות בגוגל
            <ChevronLeft className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
