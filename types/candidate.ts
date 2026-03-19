export type WorkExperienceLevel = 'entry' | 'mid' | 'senior' | 'expert';

export interface LanguageSkill {
  language: string;
  proficiency: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'native';
}

export interface CandidateDocument {
  type: 'passport' | 'cv' | 'certificate' | 'police-clearance';
  url: string;
  verified: boolean;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  skills: string[];
  experienceLevel: WorkExperienceLevel;
  languages: LanguageSkill[];
  documents: CandidateDocument[];
  createdAt: string;
}
