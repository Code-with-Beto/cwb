import { Platform, ScrollView, useColorScheme, View } from "react-native";
import { Text } from "@code-with-beto/ui";
import { Stack } from "expo-router";
import { isLiquidGlassAvailable } from "expo-glass-effect";

const textVariants = [
  "default",
  "base",
  "title",
  "subtitle",
  "link",
  "body",
  "caption",
  "xs",
  "sm",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
] as const;

export default function TextScreen() {
  const colorScheme = useColorScheme();
  const headerBlurEffect = colorScheme === "dark" ? "dark" : "light";
  return (
    <>
      <Stack.Screen
        options={{
          title: "Text component",
          headerBackButtonDisplayMode: "minimal",
          headerBlurEffect: !isLiquidGlassAvailable()
            ? headerBlurEffect
            : undefined,
          headerTransparent: Platform.select({ ios: true, android: false }),
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {textVariants.map((variant) => (
          <View key={variant} style={{ marginBottom: 16 }}>
            <Text type="caption" style={{ marginBottom: 4, opacity: 0.6 }}>
              {`type="${variant}"`}
            </Text>
            <Text type={variant}>
              The quick brown fox jumps over the lazy dog
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
