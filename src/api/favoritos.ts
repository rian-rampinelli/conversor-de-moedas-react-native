import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE = "favoritos";

export async function carregarFavoritos(): Promise<[string, string][]> {
  try {
    const stringJson = await AsyncStorage.getItem(CHAVE);
    if (!stringJson) return [];

    const dados: unknown = JSON.parse(stringJson);
    if (!Array.isArray(dados)) {
      await AsyncStorage.setItem(CHAVE, "[]");
      return [];
    }

    return dados.filter(
      (item): item is [string, string] =>
        Array.isArray(item) &&
        typeof item[0] === "string" &&
        typeof item[1] === "string"
    );
  } catch (error) {
    console.error("Erro ao carregar favoritos:", error);
    return [];
  }
}

export async function salvarFavoritos(array: [string, string][]) {
  try {
    await AsyncStorage.setItem(CHAVE, JSON.stringify(array));
  } catch (error) {
    console.error("Erro ao salvar favoritos:", error);
  }
}
