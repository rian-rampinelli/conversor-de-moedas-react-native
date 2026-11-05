import { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { carregarFavoritos, salvarFavoritos } from "../../api/favoritos";

type Moeda = [string, string];

export default function Favoritas() {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let ativa = true;

      carregarFavoritos().then((favoritos) => {
        if (ativa) {
          setMoedas(favoritos);
          setCarregando(false);
        }
      });

      return () => {
        ativa = false;
      };
    }, [])
  );

  async function removerFavorito(sigla: string) {
    const atualizadas = moedas.filter(([codigo]) => codigo !== sigla);
    setMoedas(atualizadas);
    await salvarFavoritos(atualizadas);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Moedas favoritas</Text>
      <Text style={styles.subtitle}>Suas moedas salvas para encontrar mais rápido.</Text>

      <View style={styles.list}>
        {carregando ? (
          <Text style={styles.message}>Carregando...</Text>
        ) : moedas.length ? (
          moedas.map(([sigla, nome]) => (
            <View key={sigla} style={styles.card}>
              <View style={styles.codeBadge}>
                <Text style={styles.code}>{sigla}</Text>
              </View>
              <Text style={styles.name}>{nome}</Text>
              <Pressable
                onPress={() => removerFavorito(sigla)}
                accessibilityRole="button"
                accessibilityLabel={`Remover ${nome} dos favoritos`}
                hitSlop={10}
                style={styles.favoriteButton}
              >
                <Ionicons name="star" size={23} color="#F5C542" />
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.message}>Você ainda não favoritou nenhuma moeda.</Text>
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
  codeBadge: {
    minWidth: 62,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: "#393939",
    alignItems: "center",
  },
  code: {
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
  message: {
    color: "#C5C5C5",
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 24,
  },
});
