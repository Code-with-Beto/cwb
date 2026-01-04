import { useMemo } from "react";
import {
  Text as RNText,
  StyleSheet,
  useColorScheme,
  type TextProps as RNTextProps,
} from "react-native";
import { type ReactNode } from "react";

/**
 * Text component with automatic color scheme support and multiple size variants.
 *
 * @example
 * ```tsx
 * // Basic usage with default size
 * <Text>Hello World</Text>
 *
 * // Using different size types
 * <Text type="title">Page Title</Text>
 * <Text type="body">Body text content</Text>
 * <Text type="caption">Small caption text</Text>
 *
 * // Using numeric sizes
 * <Text type="xs">Extra small text</Text>
 * <Text type="lg">Large text</Text>
 * <Text type="3xl">Very large heading</Text>
 *
 * // Using secondary prop for description text
 * <Text secondary>This is a description with gray color</Text>
 * <Text type="caption" secondary>Secondary caption text</Text>
 *
 * // Using weight, fontStyle, and color props
 * <Text weight="bold">Bold text</Text>
 * <Text weight={600} fontStyle="italic">Semi-bold italic text</Text>
 * <Text color="#FF0000">Red text</Text>
 * <Text weight="bold" color="#0066CC">Bold blue text</Text>
 *
 * // All standard React Native Text props are supported
 * <Text type="heading" style={{ marginTop: 10 }}>
 *   Custom styled text
 * </Text>
 * ```
 */
export type TextProps = RNTextProps & {
  /** Text content to display */
  children?: ReactNode;
  /**
   * Text size variant
   * @default "default"
   */
  type?:
    | "default"
    | "base"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "10xl"
    | "11xl"
    | "12xl"
    | "title"
    | "subtitle"
    | "link"
    | "body"
    | "caption";
  /**
   * When enabled, uses a secondary gray color suitable for descriptions and less prominent text.
   * Follows Apple's Human Interface Guidelines for secondary label colors.
   * @default false
   */
  secondary?: boolean;
  /**
   * Font weight of the text.
   * Can be a string ("normal", "bold") or a number (100-900).
   * @default "normal"
   */
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | number;
  /**
   * Font style of the text.
   * @default "normal"
   */
  fontStyle?: "normal" | "italic";
  /**
   * Override the default color. When provided, this takes precedence over the automatic
   * color scheme and secondary prop.
   */
  color?: string;
};

/**
 * Text component that automatically adapts to light/dark color scheme.
 * Text color will be black in light mode and white in dark mode.
 * Use the `secondary` prop for description text with a gray color.
 */
export function Text({
  style,
  type = "default",
  secondary = false,
  weight,
  fontStyle,
  color: colorOverride,
  ...rest
}: TextProps) {
  const colorScheme = useColorScheme();
  // Default to light mode if colorScheme is null/undefined
  const color = useMemo(() => {
    // If color override is provided, use it
    if (colorOverride) {
      return colorOverride;
    }
    if (secondary) {
      // Apple's secondary label colors following HIG guidelines
      // Light mode: #6E6E73 (60% opacity equivalent)
      // Dark mode: #8E8E93 (60% opacity equivalent)
      return colorScheme === "dark" ? "#8E8E93" : "#6E6E73";
    }
    return colorScheme === "dark" ? "#ffffff" : "#000000";
  }, [colorScheme, secondary, colorOverride]);

  // Memoize size style lookup
  const sizeStyle = useMemo(() => sizeStyles[type], [type]);

  // Build dynamic styles from props
  const dynamicStyles = useMemo(() => {
    const styles: any = {};
    if (weight !== undefined) {
      styles.fontWeight = weight;
    }
    if (fontStyle !== undefined) {
      styles.fontStyle = fontStyle;
    }
    return styles;
  }, [weight, fontStyle]);

  return (
    <RNText
      style={[{ color }, sizeStyle, dynamicStyles, style] as any}
      textBreakStrategy="simple"
      {...rest}
    />
  );
}

const sizeStyles = StyleSheet.create({
  default: { fontSize: 16, lineHeight: 24 },
  base: { fontSize: 16, lineHeight: 24 },
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  "2xl": { fontSize: 24, lineHeight: 32 },
  "3xl": { fontSize: 30, lineHeight: 36 },
  "4xl": { fontSize: 36, lineHeight: 44 },
  "5xl": { fontSize: 48, lineHeight: 58 },
  "6xl": { fontSize: 60, lineHeight: 72 },
  "7xl": { fontSize: 72, lineHeight: 86 },
  "8xl": { fontSize: 96, lineHeight: 116 },
  "9xl": { fontSize: 128, lineHeight: 154 },
  "10xl": { fontSize: 160, lineHeight: 192 },
  "11xl": { fontSize: 192, lineHeight: 230 },
  "12xl": { fontSize: 220, lineHeight: 268 },
  title: { fontSize: 32, lineHeight: 32 },
  subtitle: { fontSize: 20, lineHeight: 28 },
  body: { fontSize: 14, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 16 },
  link: { lineHeight: 30, fontSize: 16 },
});
