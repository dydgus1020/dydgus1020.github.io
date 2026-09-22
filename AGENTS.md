# Agent Guidelines for This Academic Homepage

This repository is a personal academic homepage based on Academic Pages and deployed through GitHub Pages. Treat template examples and placeholder text as distinct from the owner's verified academic information. Changes to this personal site do not require a pull request to the upstream Academic Pages repository.

## Maintenance rules

1. Preserve the existing Academic Pages and Jekyll architecture unless the owner explicitly requests a structural change.
2. Do not modify theme, layout, CSS, JavaScript, or deployment configuration unless explicitly requested.
3. Modify only files directly relevant to the requested task. Prefer small, focused changes over repository-wide refactoring.
4. Never invent academic information, publications, citations, affiliations, degrees, positions, dates, DOIs, URLs, or bibliographic data.
5. When adding publications, use only information supplied by the owner or information that can be reliably verified. If required details remain uncertain, ask for them rather than guessing.
6. Preserve mathematically and scientifically precise terminology in research descriptions.
7. Keep publication entries consistent with the existing front matter and content format in `_publications/`.
8. Check for duplicate permalinks before adding pages or publications.
9. Preserve working URLs and downloadable files. Do not change or remove them without a request that calls for it.
10. Do not delete existing personal content unless explicitly requested. Distinguish template or sample content from real personal academic information before replacing anything.
11. Run appropriate Jekyll or build checks when practical before considering a task complete.
12. Before completing a change, inspect `git diff` and report exactly which files were modified.
13. Do not commit or push changes unless explicitly requested.

## Main content locations

- `_config.yml`: site settings and sidebar profile information.
- `_pages/about.md`: homepage content.
- `_data/navigation.yml`: header navigation links and order.
- `_publications/`: individual publication entries.
- `_talks/`: talk and presentation entries.
- `_teaching/`: teaching entries.
- `_portfolio/`: portfolio entries.
- `_pages/cv.md`: Markdown CV page.
- `images/`: profile and other site images.
- `files/`: downloadable PDFs and other files.
