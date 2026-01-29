import { useMemo, useCallback, type ReactNode } from "react";
import {
  Text as RNText,
  Linking,
  Pressable,
  StyleSheet,
  useColorScheme,
  type TextProps as RNTextProps,
  type TextStyle,
} from "react-native";

/**
 * Props for the LinkableText component.
 */
export type LinkableTextProps = RNTextProps & {
  /** Text content that may contain URLs to be made clickable */
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
   * @default false
   */
  secondary?: boolean;
  /**
   * Font weight of the text.
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
   * Override the default text color.
   */
  color?: string;
  /**
   * Custom color for links. Defaults to a blue color appropriate for the color scheme.
   */
  linkColor?: string;
  /**
   * Custom style to apply to links.
   */
  linkStyle?: TextStyle;
  /**
   * Callback when a link is pressed. Receives the URL as argument.
   * If not provided, the default behavior opens the URL using Linking.openURL.
   */
  onLinkPress?: (url: string) => void;
};

// URL regex pattern that matches common URL formats
const URL_REGEX =
  /(?:https?:\/\/|www\.)[^\s<>[\]{}|\\^`"']+[^\s<>[\]{}|\\^`"'.,;:!?)]/gi;

/**
 * Parses text content and extracts URLs, returning an array of text segments
 * and URL segments.
 */
function parseTextWithUrls(
  text: string
): Array<{ type: "text" | "url"; content: string }> {
  const result: Array<{ type: "text" | "url"; content: string }> = [];
  let lastIndex = 0;

  // Reset regex lastIndex to ensure consistent behavior
  URL_REGEX.lastIndex = 0;

  let match;
  while ((match = URL_REGEX.exec(text)) !== null) {
    // Add text before the URL if any
    if (match.index > lastIndex) {
      result.push({
        type: "text",
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add the URL
    result.push({
      type: "url",
      content: match[0],
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last URL
  if (lastIndex < text.length) {
    result.push({
      type: "text",
      content: text.slice(lastIndex),
    });
  }

  return result;
}

/**
 * Recursively processes React children to find text content and make URLs clickable.
 */
function processChildren(
  children: ReactNode,
  linkColor: string,
  linkStyle: TextStyle | undefined,
  onLinkPress: (url: string) => void,
  textColor: string,
  sizeStyle: TextStyle,
  dynamicStyles: TextStyle
): ReactNode {
  if (typeof children === "string") {
    const segments = parseTextWithUrls(children);

    if (segments.length === 1 && segments[0].type === "text") {
      // No URLs found, return as-is
      return children;
    }

    // URLs found, render with clickable links
    return segments.map((segment, index) => {
      if (segment.type === "url") {
        return (
          <RNText
            key={index}
            style={[
              { color: linkColor, textDecorationLine: "underline" },
              linkStyle,
            ]}
            onPress={() => onLinkPress(segment.content)}
            accessibilityRole="link"
            accessibilityHint={`Opens ${segment.content}`}
          >
            {segment.content}
          </RNText>
        );
      }
      return segment.content;
    });
  }

  if (Array.isArray(children)) {
    return children.map((child, index) =>
      processChildren(
        child,
        linkColor,
        linkStyle,
        onLinkPress,
        textColor,
        sizeStyle,
        dynamicStyles
      )
    );
  }

  // For other React elements, return as-is
  return children;
}

/**
 * LinkableText component that automatically detects URLs in text content
 * and renders them as clickable links.
 *
 * @example
 * ```tsx
 * // Basic usage - URLs are automatically detected and made clickable
 * <LinkableText>
 *   Check out our guide at https://example.com/guide for more info.
 * </LinkableText>
 *
 * // With custom link color
 * <LinkableText linkColor="#0066CC">
 *   Visit https://example.com to learn more.
 * </LinkableText>
 *
 * // With custom link press handler
 * <LinkableText onLinkPress={(url) => console.log('Clicked:', url)}>
 *   See https://example.com for details.
 * </LinkableText>
 *
 * // With size variants (same as Text component)
 * <LinkableText type="body" secondary>
 *   For more information, visit https://docs.example.com
 * </LinkableText>
 * ```
 */
export function LinkableText({
  children,
  style,
  type = "default",
  secondary = false,
  weight,
  fontStyle,
  color: colorOverride,
  linkColor: linkColorOverride,
  linkStyle,
  onLinkPress,
  ...rest
}: LinkableTextProps) {
  const colorScheme = useColorScheme();

  // Calculate text color
  const textColor = useMemo(() => {
    if (colorOverride) {
      return colorOverride;
    }
    if (secondary) {
      return colorScheme === "dark" ? "#8E8E93" : "#6E6E73";
    }
    return colorScheme === "dark" ? "#ffffff" : "#000000";
  }, [colorScheme, secondary, colorOverride]);

  // Calculate link color
  const linkColor = useMemo(() => {
    if (linkColorOverride) {
      return linkColorOverride;
    }
    // Default link colors following platform conventions
    return colorScheme === "dark" ? "#58A6FF" : "#0969DA";
  }, [colorScheme, linkColorOverride]);

  // Memoize size style lookup
  const sizeStyle = useMemo(() => sizeStyles[type], [type]);

  // Build dynamic styles from props
  const dynamicStyles = useMemo(() => {
    const styles: TextStyle = {};
    if (weight !== undefined) {
      styles.fontWeight = weight as TextStyle["fontWeight"];
    }
    if (fontStyle !== undefined) {
      styles.fontStyle = fontStyle;
    }
    return styles;
  }, [weight, fontStyle]);

  // Default link press handler opens URL
  const handleLinkPress = useCallback(
    (url: string) => {
      if (onLinkPress) {
        onLinkPress(url);
      } else {
        // Ensure URL has protocol
        const fullUrl = url.startsWith("http") ? url : `https://${url}`;
        Linking.openURL(fullUrl).catch((err) => {
          console.warn("Failed to open URL:", fullUrl, err);
        });
      }
    },
    [onLinkPress]
  );

  // Process children to make URLs clickable
  const processedChildren = useMemo(
    () =>
      processChildren(
        children,
        linkColor,
        linkStyle,
        handleLinkPress,
        textColor,
        sizeStyle,
        dynamicStyles
      ),
    [
      children,
      linkColor,
      linkStyle,
      handleLinkPress,
      textColor,
      sizeStyle,
      dynamicStyles,
    ]
  );

  return (
    <RNText
      style={[{ color: textColor }, sizeStyle, dynamicStyles, style]}
      textBreakStrategy="simple"
      {...rest}
    >
      {processedChildren}
    </RNText>
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
