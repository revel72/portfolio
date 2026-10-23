# Launch Checklist

Everything below still needs your confirmation or an asset from you. Nothing here is guessed on the site. Where something is unknown, it is either omitted or hidden.

## 1. Employment dates (highest priority)

- [ ] **Stratpoint, Cloud Engineer: June 2024 – June 2025.** Your original notes said "June 2024–Present", which overlapped the DevOps Engineer role (June–October 2025) and HCLSoftware (October 2025–Present). The site uses June 2025 as the end date based on your answer. Confirm this against your records, and if the arrangement was concurrent, contractual, or a formal transition, say so accurately. In `npm run dev` this entry shows a "Verify before launch" note. It never shows in production.
- [ ] Stratpoint DevOps Engineer: June 2025 – October 2025.
- [ ] HCLSoftware Cloud L2 Support Engineer: October 2025 – Present.
- [ ] Stratpoint QA Intern: February 2024 – May 2024.
- [ ] Stappl Co-Founder & CFO: December 2022 – January 2024.
- [ ] Locations shown: Ortigas (HCLSoftware) and Metro Manila (Stratpoint).
- [ ] Job titles match your resume exactly.

## 2. Certifications (check each against the issuer's record)

Edit in `src/data/credentials.ts`. Add `verifyUrl` only for links you have confirmed.

- [ ] HCL UnO Certification: July 2026
- [ ] Google Cloud Generative AI Leader: July 2026
- [ ] Microsoft Azure AZ-900: May 2026
- [ ] Google Cloud Associate Cloud Engineer: February 2026
- [ ] AWS Certified AI Practitioner: November 2025
- [ ] AWS Certified Solutions Architect – Associate: May 2025
- [ ] HashiCorp Terraform Associate: December 2024
- [ ] AWS re/Start: April 2024
- [ ] AWS Certified Cloud Practitioner: December 2023
- [ ] The "additional introductory certificates" from your CV are **not** on the site yet. Add them if you want them shown.
- [ ] Decide whether to show expiry status (no expiry dates were supplied, so none are shown).

## 3. Education

- [ ] Adamson University, BS Computer Science: confirm graduation details.
- [ ] Magna Cum Laude, Consistent Dean's Lister, and the Junior Officer title for the Adamson University Mathematics Society: confirm exact wording. The About page also says "graduated Magna Cum Laude".
- [ ] Optionally add the graduation year in `credentials.ts`.

## 4. Links and files

- [ ] **LinkedIn URL**: set `links.linkedin` in `src/data/profile.ts`.
- [ ] **GitHub URL**: set `links.github`.
- [ ] **Resume PDF**: place it in `public/` and set `links.resume`. It must match the site (titles, dates, certification names).
- [ ] Confirm `louisgimeno72@gmail.com` is still the email you want public. It is visible in the page source (mailto links), so expect some spam.
- [ ] Production domain chosen (optional). Then set the `SITE_URL` repository variable (see README).
- [ ] Replace `public/og.png` if you want a custom social preview image, and check how it renders when a link is shared.

## 5. Confidentiality review

- [ ] **EKS case study**: confirm the sanitized text breaches no confidentiality obligation to HCLSoftware, Stratpoint, or any client. If in doubt, set `published: false` in its frontmatter and it will disappear from the site (the homepage card and listing too).
- [ ] **GitLab/Docker case study**: confirm that describing the pipeline's general stages is acceptable to your former employer. No scripts, configuration, or client names are included.
- [ ] Confirm you are comfortable naming the products "HCL Workload Automation" and "UnO" publicly (they appear in the experience text).
- [ ] No phone number, address, references, or personal IDs are on the site.

## 6. Content decisions made on your behalf

- The Docker/GitLab case study **omits** the recalled build-time and image-size figures, as you chose. It says only that the results can't be verified.
- Contact is **email only**, as you chose. No form.
- Wording softened to match what you actually supplied, e.g. "worked with Jenkins and GitLab CI/CD pipelines" rather than "built and maintained". Edit if you did more and can stand behind it.
- Amazon EKS is listed with a qualifier (troubleshooting experience, not a platform build).
- The intro paragraph is lightly edited from your draft, with the same meaning.
- Bash is shown as "practical use", with no proficiency level, since none was confirmed.

## 7. Public projects (not started)

All three are labeled **Planned** on `/projects/`, with no repository links. Update `src/data/projects.ts` only when real, tested work exists.

- [ ] Terraform on AWS (include teardown and cost notes; never commit credentials)
- [ ] Kubernetes deployment and reliability (label any failure exercise as a simulation)
- [ ] CI/CD pipeline (document only features implemented and tested)

## 8. Testing after your first deploy

- [ ] Push to GitHub, set **Pages → Source: GitHub Actions**, confirm the workflow succeeds.
- [ ] Click every nav and footer link on the live URL, plus the 404 page.
- [ ] Check desktop and mobile layouts in real browsers, light and dark themes, and keyboard-only navigation.
- [ ] Run Lighthouse and an accessibility checker (axe).
- [ ] Share the URL in a chat or LinkedIn post and check the preview card.
- [ ] Re-read the site next to your resume for consistency.
