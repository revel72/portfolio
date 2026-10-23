export type ProjectStatus = 'Planned' | 'In Progress' | 'Complete';

export interface Project {
  id: string;
  step: number;
  title: string;
  status: ProjectStatus;
  objective: string;
  scope: string[];
  /** Real repository URL. Leave undefined until the repository exists: no link is rendered. */
  repoUrl?: string;
  /** Real write-up URL (case study page or README). */
  writeupUrl?: string;
}

/**
 * Personal demonstration projects. Do not change a status to "In Progress" or "Complete"
 * until the work exists, is documented, and has been tested. Only then add repoUrl.
 */
export const projects: Project[] = [
  {
    id: 'terraform-aws',
    step: 1,
    title: 'AWS infrastructure with Terraform',
    status: 'Planned',
    objective: 'Demonstrate Infrastructure as Code and cloud infrastructure design.',
    scope: [
      'Terraform-managed AWS network with public and private subnets where appropriate',
      'Security groups, outputs, and environment configuration',
      'Compute or application hosting for the sample workload',
      'Validation steps, deployment instructions, and teardown instructions to avoid unnecessary charges',
      'README with an architecture diagram and cost notes',
    ],
  },
  {
    id: 'kubernetes-reliability',
    step: 2,
    title: 'Kubernetes deployment and reliability',
    status: 'Planned',
    objective: 'Demonstrate practical Kubernetes operations and reliability awareness.',
    scope: [
      'Containerized sample application deployed with manifests or a Helm chart',
      'Readiness and liveness probes, resource requests and limits',
      'Configuration and secret handling',
      'Deployment and rollback instructions',
      'Logging and basic observability',
      'A documented failure-and-recovery exercise, clearly labeled as a simulation',
    ],
  },
  {
    id: 'cicd-pipeline',
    step: 3,
    title: 'CI/CD pipeline',
    status: 'Planned',
    objective: 'Demonstrate repeatable build, validation, and deployment workflows.',
    scope: [
      'Documented pipeline with automated tests',
      'Container build and validation',
      'Dependency or security scanning where practical, and Terraform validation',
      'Controlled deployment with approval gates and clear failure handling',
      'Rollback documentation',
    ],
  },
];
