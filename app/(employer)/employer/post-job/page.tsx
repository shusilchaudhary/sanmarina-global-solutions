import { PostJobForm } from '@/components/forms/PostJobForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post a Job',
  description: 'Post a new job opening and find skilled workers from Nepal.',
};

export default function PostJobPage() {
  return (
    <div className="bg-brand-950 py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-2xl font-display font-bold text-white mb-2">
          Post a New Job
        </h1>
        <p className="text-gray-400 mb-8">
          Fill in the details below. Our team will review and publish within 24 hours.
        </p>
        <PostJobForm />
      </div>
    </div>
  );
}
