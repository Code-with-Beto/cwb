import {
  Text as RNText,
  StyleSheet,
  type TextProps as RNTextProps,
} from "react-native";
import { type ReactNode } from "react";

/**
 * Text component with multiple size variants.
 *
 * @example
 * ```tsx
 * <Text>Hello World</Text>
 *
 * <Text type="title">Page Title</Text>
 * <Text type="body">Body text content</Text>
 * <Text type="caption">Small caption text</Text>
 *
 * <Text type="xs">Extra small text</Text>
 * <Text type="lg">Large text</Text>
 * <Text type="3xl">Very large heading</Text>
 *
 * <Text weight="bold">Bold text</Text>
 * <Text weight={600} fontStyle="italic">Semi-bold italic text</Text>
 *
 * <Text type="heading" style={{ marginTop: 10 }}>
 *   Custom styled text
 * </Text>
 * ```
 */
export type TextProps = RNTextProps & {
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
};

export function Text({
  style,
  type = "default",
  weight,
  fontStyle,
  ...rest
}: TextProps) {
  return (
    <RNText
      style={[sizeStyles[type], weight !== undefined && { fontWeight: weight }, fontStyle !== undefined && { fontStyle }, style] as any}
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
