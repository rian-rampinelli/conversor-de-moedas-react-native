const KEY_API = process.env.EXPO_PUBLIC_KEY_API;

export type ResultadoConversao = {
    base_code: string;
    target_code: string;
    conversion_rate: number;
    requested_amount: number;
    conversion_result: number;
};

export type Moeda = [string, string];

export async function getMoedas(): Promise<Moeda[]> {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${KEY_API}/codes`);
        if (!response.ok) {
            return [];
        }

        const data = await response.json();
        const codigos = data.supported_codes;
        const moedas: Moeda[] = [];

        if (!Array.isArray(codigos)) {
            return moedas;
        }

        for (const moeda of codigos) {
            if (Array.isArray(moeda) && typeof moeda[0] === "string" && typeof moeda[1] === "string") {
                moedas.push([moeda[0], moeda[1]]);
            }
        }

        return moedas;
    } catch (error) {
        console.error("Erro ao buscar moedas:", error);
        return [];
    }
}

export async function converterMoedas(moedaOrigem: string,moedaDestino: string,valor: number): Promise<ResultadoConversao | null> {
    try {
        const origem = moedaOrigem.trim().toUpperCase();
        const destino = moedaDestino.trim().toUpperCase();
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${KEY_API}/pair/${origem}/${destino}/${valor}`
        );
        const data = await response.json();

        const taxa = Number(data.conversion_rate);
        const valorConvertido = Number(data.conversion_result);
        
        return {
            base_code: String(data.base_code),
            target_code: String(data.target_code),
            conversion_rate: taxa,
            requested_amount: valor,
            conversion_result: valorConvertido,
        };
    } catch (error) {
        console.error("Erro ao converter moedas:", error);
        return null;
    }
}
