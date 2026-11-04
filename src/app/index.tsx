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
        <View style={styles.hr} />
        <Text style={styles.fraseDica}>Use o menu lateral para começar.</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#F7F7F2",
  },
  main: {
    width: "100%",
    maxWidth: 440,
  },
  brand: {
    color: "#687268",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.6,
    textAlign: "center",
    marginBottom: 14,
  },
  title: {
    color: "#30352F",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  descricao: {
    color: "#5F665F",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  },
  hr: {
    width: "50%",
    height: 2,
    alignSelf: "center",
    backgroundColor: "#A5AA9E",
    marginVertical: 24,
  },
  fraseDica: {
    color: "#747B73",
    fontSize: 14,
    textAlign: "center",
  },
});
