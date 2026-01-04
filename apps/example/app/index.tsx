import { Text } from "@code-with-beto/ui";
import { View } from "react-native";

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
    </View>
  );
}
