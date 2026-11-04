import { Text, View, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Hello Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
