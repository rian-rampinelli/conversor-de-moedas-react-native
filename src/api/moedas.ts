const KEY_API = process.env.EXPO_PUBLIC_KEY_API;

export async function getMoedas() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${KEY_API}/codes`)
        const data = await response.json();
        return data.supported_codes; //pega o array ja com a moedas
    } catch (error) {
        console.error("Erro ao buscar moedas:", error);
        return [];
    }

}
