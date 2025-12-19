import { Text } from "@cwb/ui";
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
      <Text variant="heading">Hello World</Text>
    </View>
  );
}
