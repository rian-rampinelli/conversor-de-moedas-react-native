import { StyleSheet, Text, View } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.brand}>CONVERSOR DE MOEDAS</Text>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.descricao}>
          Consulte valores e acompanhe a conversão entre diferentes moedas.
        </Text>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#212121",
  },
  main: {
    width: "100%",
    maxWidth: 440,
  },
  brand: {
    color: "#A3A3A3",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.6,
    textAlign: "center",
    marginBottom: 14,
  },
  title: {
    color: "#F5F5F5",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  descricao: {
    color: "#C5C5C5",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  }
});
