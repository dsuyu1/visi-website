# VISI Website

The official website for the **Vaquero Information Security Initiative (VISI)** club. Built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS 4, React Router 7
- **Build:** Vite 6
- **Infrastructure:** Docker, Nginx, Keycloak (OAuth2), oauth2-proxy
- **AI:** Google Gemini API

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment file and fill in values:
   ```bash
   cp .env.example .env
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

   The app runs at `http://localhost:3001`.

## Run with Docker

**Prerequisites:** Docker, Docker Compose

```bash
docker compose up --build
```

For SSL setup, see [`scripts/init-ssl.sh`](scripts/init-ssl.sh). For Keycloak configuration, see [`scripts/setup-keycloak.md`](scripts/setup-keycloak.md).

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |

Copy `.env.example` to `.env` and fill in the values before running.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3001 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove the `dist/` directory |

## Project Structure

```
src/
├── assets/          # Images and logos
├── components/      # Shared UI components (Navbar, Footer)
└── pages/           # Route-level page components
```

---

## Contributing

We welcome contributions from club members and the community! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

### Quick Start for Contributors

1. **Fork** the repository and clone your fork.
2. **Create a branch** for your change:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**, following the code style of the project (TypeScript, Tailwind CSS).
4. **Verify** your changes build cleanly:
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit** with a clear message and **push** your branch.
6. **Open a pull request** against `main` and fill out the PR template.

For full details on the development workflow, code style, and review process, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
