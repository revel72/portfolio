export interface Credential {
  name: string;
  issuer: string;
  /** Display date, e.g. "May 2025". */
  date: string;
  /** Add a verified credential URL here when available. Leave undefined otherwise: no link is rendered. */
  verifyUrl?: string;
  /** Show on the homepage. */
  featured?: boolean;
}

// TODO(launch): check every name and date against the issuer's credential record.
// Do not add IDs, URLs, or expiry dates that you have not verified.
/** Newest first. */
export const credentials: Credential[] = [
  { name: 'HCL UnO Certification', issuer: 'HCLSoftware', date: 'July 2026' },
  { name: 'Google Cloud Generative AI Leader', issuer: 'Google Cloud', date: 'July 2026' },
  { name: 'Microsoft Azure AZ-900', issuer: 'Microsoft', date: 'May 2026', featured: true },
  { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', date: 'February 2026', featured: true },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'November 2025' },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'May 2025', featured: true },
  { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', date: 'December 2024', featured: true },
  { name: 'AWS re/Start', issuer: 'Amazon Web Services', date: 'April 2024' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'December 2023' },
];

export const education = {
  school: 'Adamson University',
  degree: 'Bachelor of Science in Computer Science',
  // TODO(launch): add the verified graduation year if you want it shown.
  highlights: [
    'Magna Cum Laude',
    "Consistent Dean's Lister",
    'Co-founder of Stappl',
    'Junior Officer, Adamson University Mathematics Society',
  ],
};
