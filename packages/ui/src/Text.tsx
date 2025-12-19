import { Text as RNText, type TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  variant?: "body" | "heading" | "caption";
}

export function Text({ variant = "body", style, ...props }: TextProps) {
  return (
    <RNText
      style={[
        variant === "body" && { fontSize: 16 },
        variant === "heading" && { fontSize: 24, fontWeight: "bold" },
        variant === "caption" && { fontSize: 12, color: "#666" },
        style,
      ]}
      {...props}
    />
  );
}
