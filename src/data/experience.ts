export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location?: string;
  dates: string;
  /** One-line summary used on the homepage. */
  summary: string;
  bullets: string[];
  technologies: string[];
  /** Shown only in dev builds and listed in LAUNCH_CHECKLIST.md. Never rendered in production. */
  verifyNote?: string;
}

/** Most recent first. */
export const experience: ExperienceEntry[] = [
  {
    id: 'hcl-cloud-l2',
    role: 'Cloud L2 Support Engineer',
    org: 'HCLSoftware',
    location: 'Ortigas, Philippines',
    dates: 'October 2025 – Present',
    summary:
      'Second-line support for HCL Workload Automation and UnO across SaaS and on-premises environments, with a focus on log-based root-cause investigation.',
    bullets: [
      'Support HCL Workload Automation and UnO across SaaS and on-premises environments.',
      'Investigate complex product, application, integration, and infrastructure issues.',
      'Analyze logs and technical evidence to identify likely root causes, then reproduce issues and validate fixes.',
      'Collaborate with development, DevOps, and engineering teams to move investigations to resolution.',
      'Work with AWS, Azure, Google Cloud, Kubernetes, Docker, and Helm in the troubleshooting contexts that arise.',
      'Contribute to technical documentation, troubleshooting guidance, knowledge base articles, installation procedures, and upgrade-related work.',
      'Support product integrations, observability-related investigations, and AI workflow automation initiatives where applicable.',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Helm', 'Workload Automation'],
  },
  {
    id: 'stratpoint-devops',
    role: 'DevOps Engineer',
    org: 'Stratpoint Technologies',
    location: 'Metro Manila, Philippines',
    dates: 'June 2025 – October 2025',
    summary:
      'AWS operations, GitLab CI/CD, Terraform and Bash automation, and incident response support.',
    bullets: [
      'Operated AWS cloud infrastructure and troubleshot compute, networking, and storage issues.',
      'Worked on GitLab CI/CD pipelines and Docker and Kubernetes workloads.',
      'Used CloudWatch and Grafana for monitoring and investigation.',
      'Used Terraform and Bash for automation, and worked with CloudFormation.',
      'Provided incident response and operational support.',
    ],
    technologies: ['AWS', 'GitLab CI/CD', 'CloudWatch', 'Grafana', 'Terraform', 'CloudFormation', 'Bash', 'Docker', 'Kubernetes'],
  },
  {
    id: 'stratpoint-cloud',
    role: 'Cloud Engineer',
    org: 'Stratpoint Technologies',
    location: 'Metro Manila, Philippines',
    dates: 'June 2024 – June 2025',
    summary:
      'Cloud resource monitoring and incident handling across AWS and Azure, with Terraform, CI/CD, and scripting.',
    bullets: [
      'Monitored cloud resources and handled incident tickets.',
      'Worked with AWS and Azure services, including VPCs, EC2, and storage.',
      'Worked with CI/CD pipelines in Jenkins and GitLab CI/CD.',
      'Worked with Terraform and CloudFormation for infrastructure as code.',
      'Worked with Docker and Kubernetes, administered Linux and Windows systems, and wrote Python and Bash scripts.',
    ],
    technologies: ['AWS', 'Azure', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes', 'Linux', 'Windows', 'Python', 'Bash'],
    verifyNote:
      'End date (June 2025) was supplied as the working answer. The original source said "June 2024–Present", which overlapped the DevOps and HCLSoftware roles. Confirm against your records before launch.',
  },
  {
    id: 'stratpoint-qa',
    role: 'QA Intern',
    org: 'Stratpoint Technologies',
    location: 'Metro Manila, Philippines',
    dates: 'February 2024 – May 2024',
    summary:
      'Test planning and manual and automated testing on two applications, in an Agile team.',
    bullets: [
      'Wrote test plans and test cases and carried out manual and automated testing.',
      'Tested the Wookie Booking App and the Atlas Asset Management System.',
      'Worked in an Agile team and gave stakeholder updates.',
      'Received training in performance testing.',
    ],
    technologies: ['Test planning', 'Manual testing', 'Automated testing', 'Agile'],
  },
  {
    id: 'stappl',
    role: 'Co-Founder & CFO',
    org: 'Stappl',
    dates: 'December 2022 – January 2024',
    summary:
      'Co-founded a student startup building AgriCrops, an application concept for rice and sugarcane disease detection.',
    bullets: [
      'Co-founded Stappl and worked on AgriCrops, an application concept for rice and sugarcane disease detection.',
      'Shaped the product roadmap and business strategy.',
      'Handled marketing and fundraising activities.',
      'Ran market validation and interviews in Tarlac and communicated with partners.',
      'Took part in technology selection and in patent-related requirements, and considered backup needs.',
    ],
    technologies: ['Product strategy', 'Market validation', 'Fundraising', 'Technology selection'],
  },
];
