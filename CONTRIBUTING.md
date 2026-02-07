# Contributing Guide

Thank you for your interest in contributing to CWB! This guide will help you get started.

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
   import { MyComponent } from "@code-with-beto/ui";
   ```

4. Save and see your changes live in Expo!

### Testing Components

The example app (`apps/example`) is configured to use the UI package directly via workspace linking. This means:

- ✅ No need to rebuild after every change
- ✅ Hot reload works automatically
- ✅ Fast iteration cycle

Simply import components and start coding!

## Publishing

When you're ready to publish a new version of a package:

1. **Bump the version** in `package.json` according to [Semantic Versioning](https://semver.org/):
   - **Patch** (`0.0.1` → `0.0.2`): Bug fixes
   - **Minor** (`0.0.1` → `0.1.0`): New features (backward compatible)
   - **Major** (`0.0.1` → `1.0.0`): Breaking changes

2. **Build the package:**

   ```bash
   pnpm --filter @code-with-beto/ui build
   ```

3. **Test the build** (dry-run):

   ```bash
   pnpm --filter @code-with-beto/ui publish --dry-run
   ```

4. **Publish:**
   ```bash
   pnpm --filter @code-with-beto/ui publish
   ```

For detailed publishing instructions, including authentication setup, see the [UI package README](./packages/ui/README.md#publishing).

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Export types alongside components
- Use React Native components as the base

## License

By contributing to this repository, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

## Questions?

If you have questions or need help, please open an issue or reach out to the maintainers.
