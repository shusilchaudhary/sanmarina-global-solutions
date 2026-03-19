import { Company } from './company';

export type VisaType = 'work-permit' | 'blue-card' | 'seasonal' | 'skilled-worker';

export type JobCategory =
  | 'hospitality'
  | 'construction'
  | 'healthcare'
  | 'it'
  | 'logistics'
  | 'agriculture';

export interface Salary {
  min: number;
  max: number;
  currency: string;
  period: 'monthly' | 'hourly' | 'annual';
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  country: string;
  countryCode: string;
  visaType: VisaType;
  salary: Salary;
  category: JobCategory;
  description: string;
  requirements: string[];
  benefits: string[];
  company: Company;
  postedAt: string;
  expiresAt: string;
  isFeatured: boolean;
  applicationCount: number;
}
