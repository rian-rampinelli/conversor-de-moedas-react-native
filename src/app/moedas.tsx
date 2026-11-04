import { Text, View, StyleSheet } from "react-native";

export default function Moedas() {
  return (
    <View style={styles.container}>
      <Text>Hello Moedas</Text>
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
