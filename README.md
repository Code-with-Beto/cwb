# CWB Monorepo

A pnpm workspace containing shared packages and example applications.

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

**PROPRIETARY - All Rights Reserved**

This repository and all packages are proprietary software owned by Code with Beto LLC.

**Key Terms:**

- Available exclusively to active members of the Code-with-Beto organization
- Cannot be used in projects for other organizations or employers without permission
- Redistribution, republishing, or repackaging is strictly prohibited
- Violations result in immediate termination of access and removal from the organization

**Warranty Disclaimer:**
This software is provided "AS IS" without warranty. Code with Beto LLC is a small team with limited resources and cannot guarantee functionality or provide technical support, though we're happy to assist when possible.

For commercial use or licensing inquiries, please contact Code with Beto LLC.

See [LICENSE](./LICENSE) for full terms and conditions.
