/**
 * Single source of truth for identity and public contact details.
 *
 * Profile links: set a value only after confirming the URL is real.
 * Anything left as null is hidden everywhere on the site (no placeholder links are shown).
 */
export const profile = {
  name: 'Louis Gimeno',
  fullName: 'Gabriel Louis D. Gimeno',
  headline: 'Cloud Platform & DevOps Engineer',
  support:
    'Cloud infrastructure, Kubernetes, CI/CD automation, troubleshooting, and reliability-focused engineering.',
  intro:
    "I'm a Cloud Platform and DevOps engineer focused on cloud infrastructure, Kubernetes, CI/CD automation, and technical troubleshooting. My work spans cloud operations, workload automation, deployment workflows, and investigating complex application and infrastructure issues. I aim to build reliable, maintainable systems and make operational workflows more efficient.",
  // TODO(launch): confirm this is still the preferred public contact address.
  email: 'louisgimeno72@gmail.com',
  links: {
    // TODO(launch): e.g. 'https://www.linkedin.com/in/your-handle/'
    linkedin: null as string | null,
    // TODO(launch): e.g. 'https://github.com/your-handle'
    github: null as string | null,
    // TODO(launch): put the verified PDF in /public (e.g. /public/louis-gimeno-resume.pdf)
    // and set this to '/louis-gimeno-resume.pdf'. The Download Resume button appears automatically.
    resume: null as string | null,
  },
};
