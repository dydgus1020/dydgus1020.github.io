# Agent Guidelines for This Academic Homepage

This public repository is Yonghyeon Jeon's academic homepage, built with Academic Pages/Jekyll and deployed through GitHub Pages. Treat template content as distinct from verified personal information.

## Core rules

1. Preserve the existing Academic Pages/Jekyll architecture unless a task explicitly requires a structural change.
2. Do not modify theme, layout, CSS, JavaScript, or deployment configuration unless the requested task specifically requires it.
3. Make small, content-specific changes and modify only files relevant to the request.
4. Never invent publications, citations, affiliations, academic positions, degrees, dates, grant information, DOIs, research claims, URLs, or other academic metadata.
5. Distinguish template/sample content from real personal academic information. Do not delete verified personal content unless explicitly requested.
6. Preserve precise mathematical and scientific terminology, working URLs, and downloadable files unless the task requires a change.
7. Treat Research, Publications, Funding, Talks, Teaching, and CV as independent maintenance units.
8. Do not expose local filesystem paths, private cloud-storage locations, credentials, tokens, machine-specific private configuration, or unintended personal information in public files.

## Standard workflow

For a requested content update, normally complete the full workflow:

`inspect -> edit -> validate -> stage -> commit -> push to origin/master -> verify GitHub Pages deployment -> verify the live page`

Before committing:

- Inspect `git status` and `git diff`.
- Run `git diff --check`.
- Run the existing site build when the environment supports it.
- Confirm unrelated files were not modified.
- Check relevant filenames, permalinks, links, front matter, duplicates, and public rendering.

Use focused commits. Do not force-push or rewrite Git history.

## Content-specific rules

### Research

- Research content is editorial, not mechanically generated.
- Do not infer or auto-generate substantive Research-page claims from CV metadata.
- Add substantive Research content only after explicit discussion and approval.

### Publications

- Use only verified real publication information.
- Preserve DOI and bibliographic information accurately.
- Do not publish citation counts as static metadata.
- Prevent duplicate entries, filenames, and permalinks.
- Keep entries consistent with the existing `_publications/` format.

### Funding

- Publish verified grant records only.
- Clearly distinguish Principal Investigator grants from participating projects.
- Do not publish funding amounts unless explicitly requested.

### Talks and Teaching

- Use active, verified CV information and ignore commented-out, obsolete, or template material.
- Do not invent exact dates or unsupported metadata.
- Deduplicate exact accidental source duplicates without merging materially different records.

### CV

- Synchronize website CV content from the user's authoritative private CV.
- Never copy or commit the private TeX source to this public repository.
- Keep the public downloadable CV at `files/Yonghyeon_Jeon_CV.pdf`.
- Do not publish the user's phone number in HTML unless explicitly requested.

### About and sidebar

- Keep About Me concise and limited to confirmed academic identity, affiliation, position, and research information.
- Do not expose the GitHub profile link unless explicitly requested.
- Preserve the intended email, Google Scholar, affiliation, and location.

## Navigation

Preserve this main navigation order unless explicitly requested otherwise:

1. Research
2. Publications
3. Funding
4. Talks
5. Teaching
6. CV

Do not restore template-only entries such as Portfolio, Blog Posts, or Guide unless explicitly requested.

## Main content locations

- `_config.yml`: site settings and sidebar profile information
- `_data/navigation.yml`: main navigation
- `_pages/about.md`: homepage and About Me
- `_pages/research.md`: editorial Research page
- `_pages/funding.md`: verified funding records
- `_pages/cv.md`: web CV
- `_publications/`: publication collection
- `_talks/`: talk collection
- `_teaching/`: teaching collection
- `files/Yonghyeon_Jeon_CV.pdf`: public downloadable CV
- `docs/WEBSITE_MAINTENANCE.md`: durable maintenance decisions and priorities
