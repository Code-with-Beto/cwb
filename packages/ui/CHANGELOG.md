# @codewithbeto/ui Changelog

## 55.0.0

Adopted Expo SDK versioning scheme. The major version now matches the Expo SDK version this package is built and tested against.

### Breaking Changes

- **Text**: Removed `useColorScheme` hook from the component. Text no longer subscribes to color scheme changes internally, which means it won't re-render on scheme changes unless the parent re-renders.
- **Text**: Removed `secondary` prop. Pass secondary colors via `style={{ color: '...' }}` instead.
- **Text**: Removed `color` prop. Pass colors via `style={{ color: '...' }}` instead.
- **Text**: Removed all internal `useMemo` calls. The component is now a stateless wrapper around React Native's `Text` with zero hooks.

### Migration from 0.x

Before:

```tsx
<Text color="#0066CC">Blue text</Text>
<Text secondary>Description text</Text>
```

After:

```tsx
<Text style={{ color: "#0066CC" }}>Blue text</Text>
<Text style={{ color: "#8E8E93" }}>Description text</Text>
```

For dark/light mode support, use your own color scheme hook and pass colors through `style`:

```tsx
const systemColors = useSystemColors();
<Text style={{ color: systemColors.text }}>Themed text</Text>
```

## 0.0.2

- Initial public release
- Text component with automatic dark mode support, size variants, `secondary` prop, `color` prop, `weight`, and `fontStyle`
