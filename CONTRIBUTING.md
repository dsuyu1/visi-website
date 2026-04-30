# Contributing to the VISI Website

Thanks for your interest in contributing! This guide covers everything you need to get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Getting Started

1. **Fork** the repo on GitHub, then clone your fork:
   ```bash
   git clone https://github.com/<your-username>/visi-website.git
   cd visi-website
   ```

2. Add the upstream remote so you can stay in sync:
   ```bash
   git remote add upstream https://github.com/dsuyu1/visi-website.git
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
   Fill in any required values (see the table in [README.md](README.md)).

5. Start the dev server:
   ```bash
   npm run dev
   ```

---

## Development Workflow

- **Always branch off `main`:**
  ```bash
  git checkout main
  git pull upstream main
  git checkout -b feature/your-feature-name
  ```

- **Branch naming conventions:**
  | Type | Prefix | Example |
  |------|--------|---------|
  | New feature | `feature/` | `feature/add-events-page` |
  | Bug fix | `fix/` | `fix/navbar-mobile-overflow` |
  | Content update | `content/` | `content/update-about-page` |
  | Refactor | `refactor/` | `refactor/footer-component` |

- **Keep commits small and focused.** One logical change per commit.

- **Before opening a PR**, make sure these pass locally:
  ```bash
  npm run lint    # TypeScript type check
  npm run build   # Verify production build succeeds
  ```

---

## Code Style

- **TypeScript** — all new files should be `.tsx` / `.ts`. Avoid `any`.
- **Tailwind CSS** — use utility classes; avoid writing custom CSS unless necessary.
- **Components** — place reusable components in `src/components/`, page components in `src/pages/`.
- **Imports** — use the `@/` path alias for absolute imports (e.g., `@/components/Navbar`).
- **No comments explaining what the code does** — write self-documenting code with clear names. Only comment *why* when it isn't obvious.

---

## Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a PR against `main` on the upstream repo.

3. Fill out the PR description:
   - **What** changed and **why**
   - Screenshots for any UI changes
   - Steps to test the change

4. A maintainer will review your PR. Address feedback by pushing additional commits to your branch — do not force-push after review has started.

5. Once approved, a maintainer will merge your PR.

---

## Reporting Bugs

Open a [GitHub Issue](https://github.com/dsuyu1/visi-website/issues) and include:

- A clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Browser / OS if it's a visual bug
- Screenshots if helpful

---

## Requesting Features

Open a [GitHub Issue](https://github.com/dsuyu1/visi-website/issues) with the label `enhancement` and describe:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you considered

---

## Questions?

Reach out in the VISI club Discord or open an issue tagged `question`.
