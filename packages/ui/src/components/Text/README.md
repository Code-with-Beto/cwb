# Text Component

A versatile text component with automatic color scheme support, multiple size variants, and extensive styling options.

## Features

- 🌗 **Automatic dark mode support** - Adapts to system color scheme
- 📏 **Multiple size variants** - From xs to 12xl, plus semantic types
- 🎨 **Flexible styling** - Support for weight, font style, and color overrides
- 🔤 **Secondary text variant** - Built-in support for description/caption text
- ✅ **Full React Native Text compatibility** - All standard props supported

## Installation

```bash
pnpm add @codewithbeto/ui
```

## Basic Usage

```typescript
import { Text } from "@codewithbeto/ui";

export default function App() {
  return <Text>Hello World</Text>;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Text content to display |
| `type` | `TextType` | `"default"` | Text size variant (see below) |
| `secondary` | `boolean` | `false` | Use secondary gray color for descriptions |
| `weight` | `FontWeight` | `"normal"` | Font weight (100-900 or "normal"/"bold") |
| `fontStyle` | `"normal" \| "italic"` | `"normal"` | Font style |
| `color` | `string` | - | Override the default color |
| ...rest | `TextProps` | - | All standard React Native Text props |

### Text Types

The `type` prop accepts the following values:

#### Size Scale (Numeric)
- `xs` - 12px / 16px line height
- `sm` - 14px / 20px line height
- `default` or `base` - 16px / 24px line height
- `lg` - 18px / 28px line height
- `xl` - 20px / 28px line height
- `2xl` - 24px / 32px line height
- `3xl` - 30px / 36px line height
- `4xl` - 36px / 44px line height
- `5xl` - 48px / 58px line height
- `6xl` - 60px / 72px line height
- `7xl` - 72px / 86px line height
- `8xl` - 96px / 116px line height
- `9xl` - 128px / 154px line height
- `10xl` - 160px / 192px line height
- `11xl` - 192px / 230px line height
- `12xl` - 220px / 268px line height

#### Semantic Types
- `title` - 32px / 32px line height
- `subtitle` - 20px / 28px line height
- `body` - 14px / 20px line height
- `caption` - 12px / 16px line height
- `link` - 16px / 30px line height

### Font Weights

The `weight` prop accepts:
- String values: `"normal"`, `"bold"`
- Numeric values: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- Or as numbers: `100`-`900`

## Usage Examples

### Size Variants

```typescript
// Using numeric size scale
<Text type="xs">Extra small text</Text>
<Text type="sm">Small text</Text>
<Text type="default">Default text</Text>
<Text type="lg">Large text</Text>
<Text type="2xl">2XL heading</Text>
<Text type="5xl">5XL heading</Text>

// Using semantic types
<Text type="title">Page Title</Text>
<Text type="subtitle">Section Subtitle</Text>
<Text type="body">Body text content</Text>
<Text type="caption">Small caption text</Text>
```

### Secondary Text

Use the `secondary` prop for descriptions, labels, or less prominent text. This follows Apple's Human Interface Guidelines for secondary label colors.

```typescript
<Text>Primary Text</Text>
<Text secondary>Secondary description text</Text>

<Text type="title">Settings</Text>
<Text type="caption" secondary>
  Manage your account preferences
</Text>
```

**Colors:**
- Light mode: `#6E6E73` (60% opacity gray)
- Dark mode: `#8E8E93` (60% opacity gray)

### Font Weight and Style

```typescript
// Using weight prop
<Text weight="bold">Bold text</Text>
<Text weight="300">Light text</Text>
<Text weight={600}>Semi-bold text</Text>

// Using fontStyle prop
<Text fontStyle="italic">Italic text</Text>
<Text weight="bold" fontStyle="italic">Bold italic text</Text>
```

### Custom Colors

Override the automatic color scheme with a custom color:

```typescript
<Text color="#FF0000">Red text</Text>
<Text color="#0066CC" weight="bold">Bold blue text</Text>
<Text type="title" color="rgba(255, 0, 0, 0.8)">
  Red title with transparency
</Text>
```

### Combining Props

All props can be combined for maximum flexibility:

```typescript
<Text 
  type="2xl" 
  weight="bold" 
  color="#1a1a1a"
  style={{ marginBottom: 8 }}
>
  Custom Heading
</Text>

<Text 
  type="body" 
  secondary 
  weight="400"
  style={{ marginTop: 4 }}
>
  Description text with custom styling
</Text>
```

### Standard React Native Props

All standard React Native `Text` props are supported:

```typescript
<Text 
  numberOfLines={2}
  ellipsizeMode="tail"
  onPress={() => console.log('Pressed')}
  style={{ textAlign: 'center' }}
>
  Truncated text with custom styling
</Text>

<Text
  selectable
  adjustsFontSizeToFit
  minimumFontScale={0.8}
>
  Text with native features
</Text>
```

## Dark Mode

The component automatically adapts to the system color scheme:

- **Light mode:** Black text (`#000000`) or secondary gray (`#6E6E73`)
- **Dark mode:** White text (`#FFFFFF`) or secondary gray (`#8E8E93`)

Use the `color` prop to override this behavior when needed.

## TypeScript

Full TypeScript support with exported types:

```typescript
import { Text, type TextProps } from "@codewithbeto/ui";

// Custom wrapper component
function Heading({ children, ...props }: TextProps) {
  return (
    <Text type="title" weight="bold" {...props}>
      {children}
    </Text>
  );
}
```

## Best Practices

### Size Selection

- Use **semantic types** (`title`, `subtitle`, `body`, `caption`) for consistent UI patterns
- Use **numeric scale** (`xs`, `sm`, `lg`, etc.) for more granular control
- Stick to one system (semantic or numeric) within a component for consistency

### Color Usage

- Prefer the automatic color scheme for most text
- Use `secondary` for descriptions, labels, and less important information
- Reserve the `color` prop for accent colors, links, or branded elements

### Weight Selection

- Use `"normal"` (400) for body text
- Use `"600"` or `"bold"` (700) for headings and emphasis
- Avoid extreme weights (`100`, `900`) unless specifically needed for design

## Accessibility

The component maintains all React Native Text accessibility features:

```typescript
<Text
  accessible
  accessibilityLabel="Welcome message"
  accessibilityRole="header"
>
  Welcome to the app
</Text>
```

## Performance

The component uses React hooks (`useMemo`) to optimize:
- Color calculations based on color scheme
- Style lookups for size variants
- Dynamic style generation from props

These optimizations ensure minimal re-renders and smooth performance.
