# Code with Beto Labs 🧪🔬

This repository contains packages and libraries that we built with love for the React Native community and [codewithbeto.dev](https://cwb.sh) members.

## Structure

This repository uses [pnpm workspaces](https://pnpm.io/workspaces) to manage multiple packages and apps:

- **`packages/`** - Shared packages that can be used across apps
  - `ui/` - React Native UI component library
- **`apps/`** - Example applications for testing and development
  - `example/` - Expo Router app for testing UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

### Installation

Install all dependencies for the workspace:

```bash
pnpm install
```

This will install dependencies for all packages and apps in the monorepo.

## Development

### Testing Components

The `apps/example` app is set up to test UI components during development:

1. Navigate to the example app:

   ```bash
   cd apps/example
   ```

2. Start the Expo development server:

   ```bash
   pnpm start
   ```

3. Import components directly from the `@code-with-beto/ui` package in your app code - changes will hot-reload automatically.

Since everything works in Expo, you can:

- Install dependencies once
- Start the server
- Make changes to the UI package
- See live changes immediately

For more details on contributing, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Building Packages

To build a package (required before publishing):

```bash
pnpm --filter @code-with-beto/ui build
```

This compiles TypeScript to JavaScript in the `dist/` folder, which is what gets published to GitHub Packages.

## Publishing

For information on publishing packages, see the [UI package README](./packages/ui/README.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the [MIT License](./LICENSE).
