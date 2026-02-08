# Contributing Guide

Thank you for your interest in contributing to CWB! We appreciate the help.

This project is maintained by a small team at [Code with Beto](https://cwb.sh). We built these packages for our own apps and our members, and we're happy to share them with the community. Contributions that improve quality, fix bugs, or add useful features are always welcome.

## Before You Contribute

### What we're looking for

- **Bug fixes** - Found something broken? We'd love a fix (with a reproduction if possible)
- **Documentation improvements** - Typos, unclear explanations, better examples
- **New components** - Especially ones that align with common React Native patterns
- **Performance improvements** - Faster, leaner, better

### What we'll likely decline

- Large architectural changes without prior discussion
- Features that are highly specific to one app or use case
- Changes that add significant maintenance burden for a niche benefit

**Tip:** For anything beyond a small fix, [open an issue](https://github.com/Code-with-Beto/cwb/issues) first to discuss the approach. This saves everyone time.

## Reporting Issues

When opening an issue, please include:

1. **What you expected** vs. **what happened**
2. **Steps to reproduce** the issue
3. **Environment details** - Expo SDK version, React Native version, platform (iOS/Android/Web)
4. **A minimal reproduction** if possible (an Expo Snack or small repo is ideal)

The more details you provide, the faster we can help. Issues without enough information to reproduce may be closed.

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   cd apps/example
   pnpm start
   ```

3. **Make your changes:**
   - Edit components in `packages/ui/src/`
   - Import them in `apps/example/app/` to test
   - Changes will hot-reload automatically in Expo

4. **Test your changes:**
   - Open the app in Expo Go or a simulator
   - Verify your component works as expected

5. **When ready to publish:**
   - See the [Publishing section](#publishing) below

## Development Workflow

### Creating New Components

1. Create your component file in `packages/ui/src/`:

   ```typescript
   // packages/ui/src/MyComponent.tsx
   import { View } from "react-native";

   export function MyComponent() {
     return <View>Hello World</View>;
   }
   ```

2. Export it from `packages/ui/src/index.ts`:

   ```typescript
   export { MyComponent } from "./MyComponent";
   ```

3. Import and test it in `apps/example/app/index.tsx`:

   ```typescript
   import { MyComponent } from "@codewithbeto/ui";
   ```

4. Save and see your changes live in Expo!

### Testing Components

The example app (`apps/example`) is configured to use the UI package directly via workspace linking. This means:

- No need to rebuild after every change
- Hot reload works automatically
- Fast iteration cycle

Simply import components and start coding!

## Pull Request Guidelines

- Keep PRs focused on a single change
- Include a clear description of what and why
- Make sure the example app still works with your changes
- Follow the existing code style (see below)

We review PRs as time allows. If you haven't heard back in a week, feel free to leave a friendly ping on the PR.

## Publishing

Publishing is automated via GitHub Actions -- no local `.npmrc` or tokens required.

1. **Bump the version** in the package's `package.json` following [Semantic Versioning](https://semver.org/):
   - **Patch** (`0.0.1` → `0.0.2`): Bug fixes
   - **Minor** (`0.0.1` → `0.1.0`): New features (backward compatible)
   - **Major** (`0.0.1` → `1.0.0`): Breaking changes

2. **Commit and push** the version bump to `main`.

3. **Create a GitHub Release** at [github.com/Code-with-Beto/cwb/releases/new](https://github.com/Code-with-Beto/cwb/releases/new) with a tag matching the version (e.g., `v0.0.2`).

The publish workflow will automatically build and publish the package to npm.

For more details, see the [UI package README](./packages/ui/README.md#publishing).

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Export types alongside components
- Use React Native components as the base

## License

By contributing to this repository, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

## Questions?

- Check [existing issues](https://github.com/Code-with-Beto/cwb/issues) first -- someone may have asked the same thing
- If not, [open a new issue](https://github.com/Code-with-Beto/cwb/issues/new) and we'll get to it when we can
- For direct support and community access, check out our [Pro membership](https://cwb.sh)
