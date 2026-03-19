import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  variant: 'job-card' | 'testimonial' | 'service-card';
  count?: number;
}

function JobCardSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-white/10" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-24 bg-white/10 rounded" />
          <div className="h-4 w-40 bg-white/10 rounded" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-20 bg-white/10 rounded-full" />
        <div className="h-5 w-24 bg-white/10 rounded-full" />
      </div>
      <div className="h-6 w-32 bg-white/10 rounded mb-3" />
      <div className="h-3 w-28 bg-white/10 rounded" />
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/10" />
        <div className="space-y-2">
          <div className="h-4 w-28 bg-white/10 rounded" />
          <div className="h-3 w-20 bg-white/10 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-5/6 bg-white/10 rounded" />
        <div className="h-3 w-3/4 bg-white/10 rounded" />
      </div>
    </div>
  );
}

function ServiceCardSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-white/10 mb-4" />
      <div className="h-5 w-32 bg-white/10 rounded mb-2" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-4/5 bg-white/10 rounded" />
      </div>
    </div>
  );
}

export function LoadingSkeleton({
  variant,
  count = 3,
}: LoadingSkeletonProps) {
  const Skeleton =
    variant === 'job-card'
      ? JobCardSkeleton
      : variant === 'testimonial'
      ? TestimonialSkeleton
      : ServiceCardSkeleton;

  return (
    <div
      className={cn(
        'grid gap-6',
        variant === 'job-card'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : variant === 'service-card'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2'
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}
