# GitHub README drafts

Draft README content for the [mlco2](https://github.com/mlco2) organisation and main repositories.

## Files

| File                                                               | Target location                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| [`mlco2-profile-README.md`](mlco2-profile-README.md)               | `mlco2/.github` → `profile/README.md`      |
| [`codecarbon-README.md`](codecarbon-README.md)                     | `mlco2/codecarbon` → `README.md`           |
| [`ecologits-README.md`](ecologits-README.md)                       | `mlco2/ecologits` → `README.md`            |
| [`ecologits-api-README.md`](ecologits-api-README.md)               | `mlco2/ecologits-api` → `README.md`        |
| [`ecologits-calculator-README.md`](ecologits-calculator-README.md) | `mlco2/ecologits-calculator` → `README.md` |

## Publishing the org profile README

1. Create or open the [`mlco2/.github`](https://github.com/mlco2/.github) repository (GitHub special repo for org profiles).
2. Add `profile/README.md` with the contents of `mlco2-profile-README.md` (strip the HTML comment header).
3. Merge to `main` — it appears on [github.com/mlco2](https://github.com/mlco2) within a few minutes.

## Draft approach

Each project README draft is a **minimal diff** against the current upstream file:

| Project                  | What changed                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **codecarbon**           | Sponsors block, Related projects table, community integrations line, when-to-use cross-links |
| **ecologits**            | NGO/volunteer wording, Related tools table, community integrations list                      |
| **ecologits-api**        | Logo header, quick try curl, sponsors block, cross-links                                     |
| **ecologits-calculator** | Volunteer wording, screenshot, CodeCarbon callout, sponsors, community line                  |

The **org profile** (`mlco2-profile-README.md`) carries the full ecosystem overview; project READMEs stay close to their originals.

## Image sources used

- CodeCarbon: `docs/images/` in [codecarbon](https://github.com/mlco2/codecarbon)
- EcoLogits logos & calculator screenshot: `docs/assets/` in [ecologits](https://github.com/mlco2/ecologits)
- Sponsor logos (CodeCarbon), light mode — official sources:
  - Clever Cloud: [cdn.clever-cloud.com](https://cdn.clever-cloud.com/uploads/2023/03/logoonwhite.svg)
  - Data For Good: [dataforgood.fr](https://dataforgood.fr/images/dataforgood.svg)
  - GitHub: [github.githubassets.com](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)
  - Mozilla: [Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/d/df/Mozilla_2024_logo.svg)
  - Dark mode fallbacks: white variants from `codecarbon-landing-page/public/assets/partners/`
- Sponsor logos (EcoLogits): `docs/assets/sponsors/` in [ecologits](https://github.com/mlco2/ecologits)

All image URLs in the drafts use `raw.githubusercontent.com` so they render on GitHub without copying assets into each repo.

## Community integrations listed

External projects referenced in the drafts (independent of mlco2):

- [DuarteVi/ecologits-statusline](https://github.com/DuarteVi/ecologits-statusline) — Claude Code status-line snippet (Vincent Duarte)
- [marmelab/ecologits-vscode](https://github.com/marmelab/ecologits-vscode) — VS Code status bar for Claude Code sessions

Screenshot sourced from `marmelab/ecologits-vscode/assets/vscode-report.png`.

## Review checklist

- [ ] Confirm NGO wording (“Code Carbon”, HelloAsso link) with the board
- [ ] Unify Discord invite links if the two servers should be merged in copy
- [ ] Verify sponsor list is current (especially historical partners section)
- [ ] Confirm authors are happy being named on the org profile
- [ ] Test org profile README rendering (tables, wide images on mobile)
- [ ] Apply `codecarbon-README.md` here if desired, or open PR in each target repo
