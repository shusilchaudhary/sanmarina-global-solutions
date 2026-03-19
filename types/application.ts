import { Job } from './job';
import { Candidate } from './candidate';

export type ApplicationStatus =
  | 'submitted'
  | 'under-review'
  | 'shortlisted'
  | 'interview-scheduled'
  | 'offered'
  | 'rejected'
  | 'withdrawn';

export interface Application {
  id: string;
  job: Job;
  candidate: Candidate;
  status: ApplicationStatus;
  coverLetter: string;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
  interviewDate?: string;
}
