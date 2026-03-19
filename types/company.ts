export type CompanySize = 'startup' | 'sme' | 'enterprise';

export interface Company {
  id: string;
  name: string;
  logo: string;
  country: string;
  countryCode: string;
  industry: string;
  size: CompanySize;
  description: string;
  website: string;
  verified: boolean;
}
