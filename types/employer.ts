import { Company } from './company';

export interface Employer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: Company;
  jobsPosted: number;
  activeJobs: number;
  createdAt: string;
  verified: boolean;
}
