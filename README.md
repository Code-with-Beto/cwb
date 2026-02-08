# Code with Beto Labs 🧪🔬

Open-source packages and libraries built by the [Code with Beto](https://cwb.sh) team for our members and the React Native community.

We build these libraries for our own apps and to make life easier for our members. If you find them useful, that's awesome. If you want to contribute, even better.

## About This Project

This repo is maintained by a small team at Code with Beto. These packages come from real abstractions we use across our own applications -- things our members have asked for and that we use daily.

**What this means for you:**

- We use these packages in our own apps, so we care about quality
- We'll do our best to review issues and PRs, but response times may vary
- We can't guarantee support for every edge case or custom use case
- Community contributions are welcome and encouraged

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [`@codewithbeto/ui`](./packages/ui) | React Native UI component library | [![npm](https://img.shields.io/npm/v/@codewithbeto/ui)](https://www.npmjs.com/package/@codewithbeto/ui) |

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

3. Import components directly from the `@codewithbeto/ui` package in your app code - changes will hot-reload automatically.

Since everything works in Expo, you can:

- Install dependencies once
- Start the server
- Make changes to the UI package
- See live changes immediately

For more details on contributing, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Building Packages

To build a package (required before publishing):

```bash
pnpm --filter @codewithbeto/ui build
```

This compiles TypeScript to JavaScript in the `dist/` folder, which is what gets published to npm.

## Publishing

Publishing is automated via GitHub Actions. When a [GitHub Release](https://github.com/Code-with-Beto/cwb/releases/new) is created, the workflow builds and publishes the package to npm automatically.

For detailed instructions, see the [UI package README](./packages/ui/README.md#publishing).

## Contributing

We welcome contributions! Bug fixes, documentation improvements, and new components are all appreciated.

Before you contribute, please read our [Contributing Guide](./CONTRIBUTING.md) to understand the process and what types of contributions we're looking for.

## Support

This project is maintained by a small team -- we're not a big company with a dedicated support staff. Here's how to get help:

- **Bug reports:** [Open an issue](https://github.com/Code-with-Beto/cwb/issues) with a clear reproduction
- **Questions about usage:** Check existing issues first, then open a new one if needed
- **Feature requests:** We're open to suggestions, especially ones that solve common problems across apps
- **Community help:** If you've figured something out, consider helping others in open issues too

We'll do our best to address issues and review contributions, but please understand that response times may vary given our small team size.

## Code with Beto

These packages are part of the [Code with Beto](https://cwb.sh) ecosystem. If you're into React Native, check us out:

- [Pro Membership](https://cwb.sh) - Courses, private repos, Discord community, and direct access to the team
- [YouTube](https://youtube.com/@codewithbeto) - Free tutorials and content

## License

This project is licensed under the [MIT License](./LICENSE).
