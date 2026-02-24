# Publishing Guide

This guide explains how packages in this monorepo are built and published to npm.

## Building Packages

Before publishing, packages need to be built to compile TypeScript to JavaScript.

To build a package:

```bash
pnpm --filter @codewithbeto/ui build
```

This compiles TypeScript to JavaScript in the `dist/` folder, which is what gets published to npm.

## Publishing

Publishing is automated via GitHub Actions. When a [GitHub Release](https://github.com/Code-with-Beto/cwb/releases/new) is created, the workflow builds and publishes the package to npm automatically.

### Publishing Workflow

1. **Update Version**: Update the package version in the package's `package.json`
2. **Commit Changes**: Commit the version bump to the main branch
3. **Create and Push a Tag**:
   ```bash
   git tag v55.0.0
   git push origin v55.0.0
   ```
   Or push all local tags at once with `git push origin --tags`.
4. **Create GitHub Release**: Go to the [Releases page](https://github.com/Code-with-Beto/cwb/releases/new) and select the tag you just pushed
5. **Automated Publishing**: The GitHub Actions workflow will automatically:
   - Build the package
   - Publish to npm
   - Use the npm token from repository secrets

For detailed instructions specific to the UI package, see the [UI package README](./packages/ui/README.md#publishing).

## Manual Publishing (If Needed)

While automated publishing is recommended, you can manually publish if necessary:

1. Build the package:
   ```bash
   pnpm --filter @codewithbeto/ui build
   ```

2. Navigate to the package directory:
   ```bash
   cd packages/ui
   ```

3. Publish to npm:
   ```bash
   npm publish --access public
   ```

**Note:** Manual publishing requires npm authentication. Make sure you're logged in and have the appropriate permissions.
