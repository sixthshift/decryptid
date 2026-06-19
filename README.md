# Decryptid

Decryptid is a web application that helps players solve games of [Cryptid](https://boardgamegeek.com/boardgame/246784/cryptid), the deduction board game where players hunt for a hidden creature using secret clues. Recreate the board you are playing, record each player's cubes and discs as they are placed, and Decryptid continuously narrows down which clues each player could hold and which hexes remain as candidates for the creature.

![App Screenshot](./assets/images/screenshot.png)

## Features

- **Hex board editor** – Build the game board from the standard six map tiles and place the structures (shacks and stones) and animal territories that make up a Cryptid map.
- **Clue tracking** – Record the cubes and discs each player places on the board, keyed by player colour.
- **Inverted clues** – Toggle support for the "advanced"/inverted clue set when playing with negative hints.
- **Automatic deduction** – As the board changes, the solver re-evaluates every rule in the Cryptid ruleset and shows, per player, which clues are still consistent with their placements.
- **Responsive layout** – The interface adapts to portrait and landscape orientations for use on phones, tablets and desktops.

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) (dev server, build and preview)
- [Tailwind CSS](https://tailwindcss.com/) with PostCSS and Autoprefixer
- [Vitest](https://vitest.dev/) for unit tests
- [Biome](https://biomejs.dev/) for linting and formatting
- [lodash](https://lodash.com/) and [classnames](https://github.com/JedWatson/classnames) utilities
- [Bun](https://bun.sh/) as the package manager and script runner

## Prerequisites

- [Bun](https://bun.sh/) (used to install dependencies and run scripts)
- Node.js 20 or higher (`engines.node >= 20`)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/sixthshift/decryptid
cd decryptid
```

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

The app is served by Vite on [http://localhost:8791](http://localhost:8791). (`bun run serve` is an alias for the same command.)

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite dev server on port 8791. |
| `bun run serve` | Alias for `dev`. |
| `bun run build` | Build the production bundle into `dist/`. |
| `bun run preview` | Serve the production build locally for previewing. |
| `bun run test` | Run the test suite once with Vitest. |

### Building for production

```bash
bun run build
```

The optimized output is written to the `dist/` directory and can be served by any static host. Preview it locally with:

```bash
bun run preview
```

### Running tests

```bash
bun run test
```

Tests live alongside the code they cover (for example the solver and game-reducer specs under `src/components/`).

### Linting & formatting

The project uses [Biome](https://biomejs.dev/) (see `biome.json`) for both linting and formatting.

```bash
bun run lint        # lint only
bun run format      # format and write changes
bun run check       # lint + format check (read-only)
bun run check:fix   # lint + format + organize imports, writing fixes
```

A pre-commit hook (`.githooks/pre-commit`) runs Biome on staged files. Enable it once per clone with:

```bash
git config core.hooksPath .githooks
```

The dev container enables this automatically.

## Running in a Dev Container

You will need Docker and VS Code with the **Dev Containers** extension.

Open the project in VS Code and run **Dev Containers: Reopen in Container** from the command palette. The container (Node 20 + Bun, defined in `.devcontainer/`) installs dependencies on creation and forwards the Vite dev server on port 8791.

Then start the server from the container terminal:

```bash
bun run dev
```

## Project Structure

```
.
├── config.js                 # Static game data: board layout, tiles, structures, players, ruleset
├── vite.config.js            # Vite dev server (port 8791), build and Vitest config
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .devcontainer/            # VS Code Dev Container setup (Node 20 + Bun)
├── assets/                   # Static assets (including the screenshot)
└── src/
    ├── index.jsx             # App entry point
    ├── stylesheet.css        # Tailwind entry / global styles
    └── components/
        ├── app.jsx           # Top-level layout wiring the menus, board and decrypter together
        ├── context.jsx       # Game context provider (state + dispatch)
        ├── game/             # Hex board rendering (hexes, tiles, tokens, territories)
        ├── menu/             # Map and clue editing menus (tiles, shacks, stones, cubes, discs, invert)
        ├── decrypter/        # Deduction UI and solver logic
        ├── reducers/         # Game and UI state reducers (board, players, ruleset, etc.)
        └── icons/            # SVG icon components
```

## Deployment

`bun run build` produces a static bundle in `dist/`, which can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel, S3, etc.).

## Contributing

Issues and pull requests are welcome on the [GitHub repository](https://github.com/sixthshift/decryptid). Please make sure tests pass (`bun run test`) and Biome is clean (`bun run check`) before opening a pull request. CI enforces both on every push and pull request.

## Authors

- [@sixthshift](https://www.github.com/sixthshift)

## License

[MIT](https://choosealicense.com/licenses/mit/)
