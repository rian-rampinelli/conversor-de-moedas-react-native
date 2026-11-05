import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE = "favoritos";

export async function carregarFavoritos(): Promise<[string, string][]> {
  try {
    const dados = await AsyncStorage.getItem(CHAVE);
    return dados ? JSON.parse(dados) : [];
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
