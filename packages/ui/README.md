# @codewithbeto/ui

A React Native UI component library built for Expo applications.

## Overview

This package provides reusable UI components for React Native applications. Components are built on top of React Native primitives and are designed to work seamlessly with Expo.

## Installation

```bash
pnpm add @codewithbeto/ui
```

Or with npm:

```bash
npm install @codewithbeto/ui
```

## Usage

```typescript
import { Text } from "@codewithbeto/ui";

export default function App() {
  return <Text variant="heading">Hello World</Text>;
}
```

## Development

### Local Development Setup

This package is part of a pnpm workspace. For local development:

1. Clone the repository and install dependencies:

   ```bash
   pnpm install
   ```

2. Use the workspace link in `apps/example` to test your changes:

   ```typescript
   import { Text } from "@codewithbeto/ui";
   ```

3. Changes will hot-reload automatically in Expo.

### Building

Before publishing, you must build the package to compile TypeScript to JavaScript:

```bash
pnpm --filter @codewithbeto/ui build
```

This command:

- Compiles TypeScript files from `src/` to JavaScript in `dist/`
- Generates TypeScript declaration files (`.d.ts`) for type support
- Creates source maps for debugging

**Why build?** We publish compiled JavaScript to npm, not TypeScript source files. This ensures:

- Faster installs (no compilation needed)
- Smaller package size
- Better compatibility across different TypeScript versions

### Type Checking

Run type checking without building:

```bash
pnpm --filter @codewithbeto/ui typecheck
```

## Publishing

Publishing is automated via GitHub Actions. No local `.npmrc` or Personal Access Token is required.

### How It Works

The repository includes a [publish workflow](../../.github/workflows/publish.yml) that:

- Triggers automatically when a **GitHub Release** is created
- Publishes as `latest` for stable releases, or `beta` for pre-releases
- Builds the package and publishes it to npm
- Uses an `NPM_TOKEN` repository secret for authentication

### Publishing a Stable Release

1. **Bump the version** in `package.json` according to [Semantic Versioning](https://semver.org/):
   - **Patch** (`0.0.1` → `0.0.2`): Bug fixes, small improvements
   - **Minor** (`0.0.1` → `0.1.0`): New features (backward compatible)
   - **Major** (`0.0.1` → `1.0.0`): Breaking changes

2. **Commit the version bump** and push to `main`.

3. **Create a GitHub Release:**
   - Go to the [Releases page](https://github.com/Code-with-Beto/cwb/releases/new)
   - Click "Draft a new release"
   - Create a new tag matching the version (e.g., `v0.0.2`)
   - Add release notes describing the changes
   - Click "Publish release"

4. The workflow will automatically build and publish the package under the `latest` tag.

### Publishing a Beta Release

Beta releases let you test new changes without affecting users on the stable version.

1. **Bump the version** with a prerelease identifier, e.g. `0.0.2-beta.1`.

2. **Commit the version bump** and push to your branch.

3. **Create a GitHub Release:**
   - Go to the [Releases page](https://github.com/Code-with-Beto/cwb/releases/new)
   - Create a new tag matching the version (e.g., `v0.0.2-beta.1`)
   - Check the **"Set as a pre-release"** checkbox
   - Click "Publish release"

4. The workflow detects the pre-release flag and publishes under the `beta` dist-tag instead of `latest`.

**Installing a beta version:**

```bash
pnpm add @codewithbeto/ui@beta
```

Users who run `pnpm add @codewithbeto/ui` (without `@beta`) will continue to get the latest stable version.

### Promoting Beta to Stable

Once a beta has been tested and is ready for production:

1. **Update the version** in `package.json` to the stable version (remove the prerelease identifier):
   - `0.0.2-beta.3` → `0.0.2`

2. **Commit the version bump** and push to `main`.

3. **Create a regular GitHub Release** (do **not** check "Set as a pre-release"):
   - Create a new tag matching the stable version (e.g., `v0.0.2`)
   - Click "Publish release"

4. The workflow publishes the package under `latest`. All users will get the stable version on their next install or update.

### Example: Full Release Lifecycle

Here's a typical workflow from development to stable release:

| Step | Version in `package.json` | Git Tag | Pre-release? | Dist-tag |
|------|---------------------------|---------|--------------|----------|
| First beta | `0.0.2-beta.1` | `v0.0.2-beta.1` | Yes | `beta` |
| Fix a bug in beta | `0.0.2-beta.2` | `v0.0.2-beta.2` | Yes | `beta` |
| Promote to stable | `0.0.2` | `v0.0.2` | No | `latest` |

You can also trigger the workflow manually from the **Actions** tab with a custom dist-tag if needed.

### Package Configuration

The package is configured to publish to npm:

- **Registry:** `https://registry.npmjs.org`
- **Scope:** `@codewithbeto`
- **Access:** Public
- **Files included:** Only the `dist/` folder (specified in `package.json`)

## Components

### Text

A text component with variant support.

```typescript
import { Text } from "@codewithbeto/ui";

<Text variant="heading">Heading Text</Text>
<Text variant="body">Body Text</Text>
<Text variant="caption">Caption Text</Text>
```

**Props:**

- `variant?: "body" | "heading" | "caption"` - Text style variant
- All standard React Native `Text` props are supported

## Adding New Components

1. Create your component file in `src/`:

   ```typescript
   // src/MyComponent.tsx
   import { View } from "react-native";

   export interface MyComponentProps {
     // your props
   }

   export function MyComponent({ ...props }: MyComponentProps) {
     return <View>...</View>;
   }
   ```

2. Export it from `src/index.ts`:

   ```typescript
   export { MyComponent, type MyComponentProps } from "./MyComponent";
   ```

3. Test it in `apps/example` before publishing.

## License

This package is licensed under the [MIT License](../../LICENSE).
