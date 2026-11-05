import { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useFocusEffect } from "expo-router";
import { getMoedas } from "../../api/moedas";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { carregarFavoritos, salvarFavoritos } from "../../api/favoritos";

export default function Favoritas() {

  const [moedas, setMoedas] = useState<[string, string][]>([]);
  const [moedaProcurada, setMoedaProcurada] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [favoritos, setFavoritos] = useState<[string, string][]>([]);

  useEffect(() => {
    async function listarMoedas() {
      const data = await getMoedas();
      setMoedas(data);
      setCarregando(false);
    }
    listarMoedas();
  }, []);

  useFocusEffect(
    useCallback(() => {
      let ativa = true;

      carregarFavoritos().then((salvos) => {
        if (ativa) setFavoritos(salvos);
      });

      return () => {
        ativa = false;
      };
    }, [])
  );

  //remove e atualiza no storage
  async function alternarFavorito(moeda: [string, string]) {
    const ehFavorita = favoritos.some((item) => item[0] === moeda[0]);
    //diferente do moeda[0] == sigla
    const atualizados = ehFavorita ? favoritos.filter((item) => item[0] !== moeda[0]):[...favoritos,moeda];
    setFavoritos(atualizados);
    await salvarFavoritos(atualizados);
  }

  const moedasFiltradas = moedas.filter((item) =>
    item[0].toLowerCase().startsWith(moedaProcurada.trim().toLowerCase())
  );

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Moedas disponíveis</Text>
      <Text style={styles.subtitle}>Confira os códigos e nomes das moedas.</Text>

      <TextInput
        style={styles.input}
        onChangeText={setMoedaProcurada}
        value={moedaProcurada}
        placeholder="Buscar moeda"
        placeholderTextColor="#8A8A8A"
        autoCapitalize="characters"
        autoCorrect={false}
      />

      <View style={styles.list}>
        {carregando ? (
          <Text style={styles.message}>Carregando...</Text>
        ) : moedasFiltradas.length > 0 ? (
          moedasFiltradas.map(([sigla, nome]) => (
            <View key={sigla} style={styles.card}>
              <View style={styles.siglaWrapper}>
                <Text style={styles.sigla}>{sigla}</Text>
              </View>
              <Text style={styles.name}>{nome}</Text>
              <Pressable
                onPress={() => alternarFavorito([sigla, nome])}
                accessibilityRole="button"
                hitSlop={10}
                style={styles.favoriteButton}
              >
                <Ionicons
                  name={favoritos.some((item) => item[0] === sigla) ? "star" : "star-outline"}
                  size={26}
                  color={favoritos.some(([codigo]) => codigo === sigla) ? "#F5C542" : "#A3A3A3"}
                />
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.message}>Nenhuma moeda encontrada</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#212121",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: "#212121",
  },
  input: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#3A3A3A",
    backgroundColor: "#2B2B2B",
    color: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  list: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    gap: 12,
  },
  card: {
    width: "100%",
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#2B2B2B",
    borderWidth: 1,
    borderColor: "#3A3A3A",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  title: {
    color: "#F5F5F5",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: "#C5C5C5",
    fontSize: 14,
    marginBottom: 22,
  },
  message: {
    color: "#C5C5C5",
    fontSize: 15,
    textAlign: "center",
  },
  siglaWrapper: {
    minWidth: 62,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: "#393939",
    alignItems: "center",
  },
  sigla: {
    color: "#F5F5F5",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  name: {
    flex: 1,
    color: "#E5E5E5",
    fontSize: 15,
    fontWeight: "500",
  },
  favoriteButton: {
    minWidth: 36,
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});
