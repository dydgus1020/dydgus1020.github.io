# Academic Homepage Maintenance

## Site purpose

This repository contains Yonghyeon Jeon's public academic homepage. It is built with Academic Pages/Jekyll and deployed through GitHub Pages.

## Current public structure

The main navigation is:

**Research | Publications | Funding | Talks | Teaching | CV**

- **Research:** Curated discussion of research questions, methodology, and direction.
- **Publications:** Structured, verified bibliographic records.
- **Funding:** Formal records of verified research funding.
- **Talks:** Structured records of presentations and meetings.
- **Teaching:** Structured records of teaching roles and courses.
- **CV:** A consolidated academic record with a downloadable public PDF.

## Content philosophy

- **About Me** provides a concise academic identity and introduction.
- **Research** is an editorial account of research questions, methodology, and research direction. It is developed deliberately rather than generated from CV metadata.
- **Publications, Talks, Teaching, and Funding** are structured factual academic records.
- **CV** consolidates the academic record and links to the downloadable PDF.

Template examples and placeholders must always be distinguished from verified personal academic information.

## Sources of truth

- The authoritative CV source is maintained privately outside this repository.
- Publications, Talks, and Teaching are maintained as structured Jekyll collections.
- Confirmed Principal Investigator grant information is maintained on the Funding page.
- The public downloadable CV PDF is `files/Yonghyeon_Jeon_CV.pdf`.
- Substantive Research content is curated through explicit editorial discussion.

## Normal update workflow

`User/Codex request -> inspect current source and repository -> edit only the relevant content -> validate -> commit -> push to origin/master -> GitHub Pages deployment -> live-site verification`

Validation should include focused status and diff review, `git diff --check`, an available local build, checks for unrelated changes, and verification of the affected live page.

## Privacy rules

- Do not publish private local paths or private cloud-storage locations.
- Do not publish credentials, access tokens, or machine-specific private configuration.
- Do not automatically publish phone numbers.
- Do not commit the private CV TeX source.
- Remember that the repository and its files are publicly accessible.

## Git policy

- Use focused commits that contain only the requested files.
- Prefer one logical content update per commit where practical.
- Review status and diffs before staging and committing.
- Do not force-push.
- Do not rewrite published history.
- Push normal completed updates to `origin/master` and verify deployment.

## Current content status

- **Profile / About:** Established; subject to future editorial refinement.
- **Research:** Page exists; substantive content will be developed through future discussion.
- **Publications:** Populated.
- **Funding:** Populated.
- **Talks:** Populated.
- **Teaching:** Populated.
- **CV:** Populated; the downloadable PDF is managed separately.
- **Profile image:** Pending final user image.
- **ORCID:** Pending consolidation.
- **SEO / favicon / social preview:** Pending final review.
- **Final template cleanup / full-site audit:** Pending.

## Future maintenance priorities

1. Add the final profile image.
2. Refine About Me.
3. Develop Research content through extended discussion.
4. Consolidate ORCID.
5. Perform a full-site audit and template cleanup.
6. Review SEO, favicon, and social preview metadata.
7. Consider a custom domain only if a future need arises.

Update this document whenever a durable website management decision is made.
