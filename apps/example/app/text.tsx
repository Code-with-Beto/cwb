import { Platform, ScrollView, useColorScheme, View } from "react-native";
import { Text, LinkableText } from "@code-with-beto/ui";
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
          headerLargeTitleEnabled: true,
          headerTransparent: Platform.select({ ios: true, android: false }),
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <Text type="subtitle" weight="bold" color="#0066CC">
          Bold subtitle blue text
        </Text>

        {/* LinkableText Demo Section */}
        <View style={{ marginVertical: 24, padding: 16, borderRadius: 8, backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F2F2F7' }}>
          <Text type="subtitle" weight="bold" style={{ marginBottom: 12 }}>
            LinkableText Component
          </Text>
          <Text type="caption" secondary style={{ marginBottom: 8 }}>
            URLs are automatically detected and made clickable:
          </Text>
          <LinkableText type="body" style={{ marginBottom: 16 }}>
            Check out our guide at https://codewithbeto.dev/blog/employer-funded-developer-learning for more information about developer learning resources.
          </LinkableText>
          <Text type="caption" secondary style={{ marginBottom: 8 }}>
            Multiple URLs in one text block:
          </Text>
          <LinkableText type="body">
            Visit https://example.com for general info or https://docs.example.com for documentation.
          </LinkableText>
        </View>

        {textVariants.map((variant) => (
          <View key={variant} style={{ marginBottom: 16 }}>
            <Text type="caption" style={{ marginBottom: 4 }} secondary>
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
