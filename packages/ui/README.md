# @code-with-beto/ui

A React Native UI component library built for Expo applications.

## Overview

This package provides reusable UI components for React Native applications. Components are built on top of React Native primitives and are designed to work seamlessly with Expo.

## Installation

```bash
pnpm add @code-with-beto/ui
```

Or with npm:

```bash
npm install @code-with-beto/ui
```

## Usage

```typescript
import { Text } from "@code-with-beto/ui";

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
   import { Text } from "@code-with-beto/ui";
   ```

3. Changes will hot-reload automatically in Expo.

### Building

Before publishing, you must build the package to compile TypeScript to JavaScript:

```bash
pnpm --filter @code-with-beto/ui build
```

This command:

- Compiles TypeScript files from `src/` to JavaScript in `dist/`
- Generates TypeScript declaration files (`.d.ts`) for type support
- Creates source maps for debugging

**Why build?** We publish compiled JavaScript to GitHub Packages, not TypeScript source files. This ensures:

- Faster installs (no compilation needed)
- Smaller package size
- Better compatibility across different TypeScript versions

### Type Checking

Run type checking without building:

```bash
pnpm --filter @code-with-beto/ui typecheck
```

## Publishing

### Prerequisites for Organization Admins

To publish packages, you need:

1. **GitHub Personal Access Token (PAT)** with `write:packages` and `read:packages` scopes
   - Create one at: https://github.com/settings/tokens
   - Select "Generate new token (classic)"
   - Name it something like "GitHub Packages - Code-with-Beto"
   - Check `write:packages` and `read:packages` scopes
   - Generate and copy the token immediately

2. **Configure `.npmrc`** in this package directory:

   ```ini
   @code-with-beto:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PAT_HERE
   ```

   Replace `YOUR_PAT_HERE` with your Personal Access Token.

   ⚠️ **Important:** The `.npmrc` file is already in `.gitignore` to prevent committing your token. Never commit this file!

### Version Bumping

Before publishing, update the version in `package.json` according to [Semantic Versioning](https://semver.org/):

- **Patch** (`0.0.1` → `0.0.2`): Bug fixes, small improvements
- **Minor** (`0.0.1` → `0.1.0`): New features (backward compatible)
- **Major** (`0.0.1` → `1.0.0`): Breaking changes

Example:

```json
{
  "version": "0.0.2" // Updated version
}
```

### Publishing Steps

1. **Build the package:**

   ```bash
   pnpm --filter @code-with-beto/ui build
   ```

2. **Test before publishing** (dry-run):

   ```bash
   pnpm --filter @code-with-beto/ui publish --dry-run
   ```

   This will show you what will be published without actually publishing.

3. **Publish:**
   ```bash
   pnpm --filter @code-with-beto/ui publish
   ```

### Package Configuration

The package is configured to publish to GitHub Packages:

- **Registry:** `https://npm.pkg.github.com`
- **Scope:** `@code-with-beto`
- **Files included:** Only the `dist/` folder (specified in `package.json`)

### Troubleshooting

**Error: "Permission not_found: owner not found"**

- Ensure your `.npmrc` has the correct scope: `@code-with-beto:registry=...`
- Verify your PAT has the correct scopes (`write:packages`, `read:packages`)
- Make sure you're authenticated with your personal GitHub account (betomoedano), even though you're publishing to the Code-with-Beto organization

**Error: "403 Forbidden"**

- Check that your PAT token is correct in `.npmrc`
- Verify the token hasn't expired
- Ensure you have admin permissions in the Code-with-Beto organization

## Components

### Text

A text component with variant support.

```typescript
import { Text } from "@code-with-beto/ui";

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

**PROPRIETARY - All Rights Reserved**

This package is proprietary software owned by Code with Beto LLC.

**Usage Rights:**

- ✅ Available to active members of the Code-with-Beto organization
- ✅ Can be used in applications within the organization
- ✅ Contributions from organization members are welcome

**Restrictions:**

- ❌ Cannot be used in projects for other organizations or employers without permission
- ❌ Cannot be redistributed, republished, or repackaged
- ❌ Cannot be transferred to third parties

**Warranty:**
This software is provided "AS IS" without warranty. Code with Beto LLC is a small team with limited resources and cannot guarantee functionality or provide technical support, though we're happy to assist when possible.

**Violations:**
Violation of these terms will result in immediate termination of access, removal from the organization, and loss of access to all packages and updates.

For commercial use or licensing outside the organization, please contact Code with Beto LLC.

See [LICENSE](../../LICENSE) for full terms and conditions.
