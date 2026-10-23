export interface Skill {
  name: string;
  /** Optional honest qualifier, e.g. a proficiency level or the context the skill was used in. */
  note?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud platforms',
    skills: [{ name: 'Amazon Web Services (AWS)' }, { name: 'Microsoft Azure' }, { name: 'Google Cloud Platform (GCP)' }],
  },
  {
    title: 'Containers and orchestration',
    skills: [
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'Helm' },
      { name: 'Amazon EKS', note: 'Troubleshooting experience (see the EKS case study); not presented as a full platform build.' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    skills: [{ name: 'Terraform' }, { name: 'AWS CloudFormation' }],
  },
  {
    title: 'CI/CD and DevOps',
    skills: [
      { name: 'GitLab CI/CD' },
      { name: 'Jenkins' },
      { name: 'Docker image build and deployment workflows' },
      { name: 'Pipeline validation and failure handling' },
    ],
  },
  {
    title: 'Monitoring and troubleshooting',
    skills: [
      { name: 'AWS CloudWatch' },
      { name: 'Grafana' },
      { name: 'Application and container logs' },
      { name: 'Kubernetes events and pod descriptions' },
      { name: 'CI/CD pipeline logs' },
      { name: 'Root-cause investigation' },
    ],
  },
  {
    title: 'Scripting and programming',
    skills: [
      { name: 'Python', note: 'Intermediate' },
      { name: 'C#', note: 'Intermediate' },
      { name: 'SQL', note: 'Intermediate' },
      { name: 'Java', note: 'Beginner' },
      { name: 'HTML, CSS, and JavaScript', note: 'Beginner' },
      { name: 'R', note: 'Beginner' },
      { name: 'Bash', note: 'Practical use in automation and infrastructure workflows' },
    ],
  },
  {
    title: 'Other areas',
    skills: [
      { name: 'Workload automation' },
      { name: 'Technical documentation' },
      { name: 'Incident investigation' },
      { name: 'Knowledge base development' },
      { name: 'AI and generative AI workflows' },
      { name: 'Technical communication and collaboration' },
    ],
  },
];
