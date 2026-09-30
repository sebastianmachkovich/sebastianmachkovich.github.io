export interface Certification {
  name: string;
  issueDate: string;
  expiryDate?: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issueDate: 'Aug 2026',
    expiryDate: 'Aug 2029',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issueDate: 'Aug 2026',
    expiryDate: 'Aug 2029',
  },
  {
    name: 'Google Cybersecurity Certificate',
    issueDate: 'Nov 2023',
  },
];
