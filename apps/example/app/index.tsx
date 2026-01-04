import { Text } from "@code-with-beto/ui";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text type="title">Hello World</Text>
      <Link href="/text" asChild>
        <Pressable>
          <Text type="title">Text</Text>
        </Pressable>
      </Link>
    </View>
  );
}
