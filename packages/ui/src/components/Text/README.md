# Text Component

A lightweight text component with multiple size variants and full React Native Text compatibility.

## Features

- **Multiple size variants** - From xs to 12xl, plus semantic types
- **Flexible styling** - Support for weight and font style
- **Full React Native Text compatibility** - All standard props supported
- **No internal color opinion** - You own your colors via `style`

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
| `weight` | `FontWeight` | `"normal"` | Font weight (100-900 or "normal"/"bold") |
| `fontStyle` | `"normal" \| "italic"` | `"normal"` | Font style |
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
<Text type="xs">Extra small text</Text>
<Text type="sm">Small text</Text>
<Text type="default">Default text</Text>
<Text type="lg">Large text</Text>
<Text type="2xl">2XL heading</Text>
<Text type="5xl">5XL heading</Text>

<Text type="title">Page Title</Text>
<Text type="subtitle">Section Subtitle</Text>
<Text type="body">Body text content</Text>
<Text type="caption">Small caption text</Text>
```

### Font Weight and Style

```typescript
<Text weight="bold">Bold text</Text>
<Text weight="300">Light text</Text>
<Text weight={600}>Semi-bold text</Text>

<Text fontStyle="italic">Italic text</Text>
<Text weight="bold" fontStyle="italic">Bold italic text</Text>
```

### Colors via Style

The component does not manage colors internally. Pass colors through the `style` prop, which gives you full control over theming:

```typescript
<Text style={{ color: "#FF0000" }}>Red text</Text>
<Text weight="bold" style={{ color: "#0066CC" }}>Bold blue text</Text>

// With a system color hook for dark/light mode support
const systemColors = useSystemColors();
<Text style={{ color: systemColors.text }}>Themed text</Text>
<Text style={{ color: systemColors.secondaryLabel }}>Secondary text</Text>
```

### Combining Props

```typescript
<Text
  type="2xl"
  weight="bold"
  style={{ color: "#1a1a1a", marginBottom: 8 }}
>
  Custom Heading
</Text>

<Text
  type="body"
  weight="400"
  style={{ color: "#6E6E73", marginTop: 4 }}
>
  Description text
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

## TypeScript

Full TypeScript support with exported types:

```typescript
import { Text, type TextProps } from "@codewithbeto/ui";

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

The component is a thin wrapper around React Native's `Text` with no internal state or hooks. It applies size styles from a static `StyleSheet` and passes everything else through. This means:

- No unnecessary re-renders from internal subscriptions
- Color scheme changes only re-render when your parent component re-renders
- Style objects are pre-created via `StyleSheet.create` for optimal performance
