import {
  Globe,
  Users,
  Monitor,
  FileCheck,
  ShieldCheck,
  Plane,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  href: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'recruitment',
    icon: 'Users',
    title: 'International Recruitment',
    description:
      'We connect skilled Nepali workers with verified European employers across 15+ countries. From hospitality to healthcare, we match talent with opportunity.',
    href: '/services#recruitment',
    features: [
      'Verified employer network',
      'Skill matching algorithm',
      'Pre-departure orientation',
      'On-ground support in destination',
    ],
  },
  {
    id: 'visa',
    icon: 'FileCheck',
    title: 'Visa & Work Permit Assistance',
    description:
      'Navigate complex European immigration requirements with our expert visa processing team. We handle documentation, applications, and embassy coordination.',
    href: '/services#visa',
    features: [
      'Work permit processing',
      'EU Blue Card applications',
      'Document preparation & verification',
      '98% visa approval rate',
    ],
  },
  {
    id: 'it-consulting',
    icon: 'Monitor',
    title: 'IT Consulting Services',
    description:
      'Transform your business with our expert IT consulting. We offer custom software development, cloud solutions, and digital transformation strategies for enterprises.',
    href: '/services#it-consulting',
    features: [
      'Custom software development',
      'Cloud infrastructure setup',
      'Digital transformation strategy',
      'Dedicated development teams',
    ],
  },
  {
    id: 'compliance',
    icon: 'ShieldCheck',
    title: 'Compliance & Legal Support',
    description:
      'Stay compliant with international labor laws and regulations. Our legal team ensures all placements meet EU and destination country requirements.',
    href: '/services#compliance',
    features: [
      'Labor law compliance',
      'Employment contract review',
      'Worker rights protection',
      'Regulatory updates',
    ],
  },
  {
    id: 'travel',
    icon: 'Plane',
    title: 'Travel & Relocation',
    description:
      'Seamless relocation support from Nepal to Europe. We arrange flights, accommodation, and orientation to ensure a smooth transition for every worker.',
    href: '/services#travel',
    features: [
      'Flight booking assistance',
      'Airport pickup coordination',
      'Temporary accommodation',
      'Cultural orientation program',
    ],
  },
  {
    id: 'global-staffing',
    icon: 'Globe',
    title: 'Global Staffing Solutions',
    description:
      'Enterprise-grade staffing solutions for businesses needing reliable workforce. Scalable teams, managed HR, and performance tracking included.',
    href: '/services#global-staffing',
    features: [
      'Contract & permanent staffing',
      'Managed workforce solutions',
      'Performance monitoring',
      'Scalable team deployment',
    ],
  },
];
