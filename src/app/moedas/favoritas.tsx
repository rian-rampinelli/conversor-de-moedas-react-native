import { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { getMoedas } from '../../api/moedas'

export default function Favoritas() {

  const [moedas, setMoedas] = useState<[string, string][]>([]);

  useEffect(() => {
    async function listarMoedas() {
      const data = await getMoedas();
      setMoedas(data);
    }
    listarMoedas();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {moedas.map(([sigla, nome]) => (
          <Text key={sigla}>
            {sigla} - {nome}
          </Text>

        ))}

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#212121",
  },
  card: {
    width: "100%",
    maxWidth: 440,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#2B2B2B",
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  title: {
    color: "#F5F5F5",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    color: "#C5C5C5",
    fontSize: 16,
    lineHeight: 24,
  },
});
