import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Modal, Pressable, ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { converterMoedas, getMoedas, type Moeda, type ResultadoConversao } from "@/api/moedas";

export default function Converter() {
    const [moedas, setMoedas] = useState<Moeda[]>([]);
    const [origem, setOrigem] = useState<Moeda | null>(null);
    const [destino, setDestino] = useState<Moeda | null>(null);
    const [seletor, setSeletor] = useState<"origem" | "destino" | null>(null);
    const [valor, setValor] = useState("1");
    const [resultado, setResultado] = useState<ResultadoConversao | null>(null);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {
        async function carregarMoedas() {
            const lista = await getMoedas();
            setMoedas(lista);
            setCarregando(false);
            if (lista.length === 0) {
                setErro("Não foi possível carregar as moedas.");
            }
        }
        carregarMoedas();
    }, []);


    async function converter() {
        const quantidade = Number(valor.replace(",", "."));
        if (!origem || !destino || !Number.isFinite(quantidade) || quantidade <= 0) {
            setErro("Selecione as moedas e informe um valor válido.");
            setResultado(null);
            return;
        }
        setErro("");
        setCarregando(true);
        const data = await converterMoedas(origem[0], destino[0], quantidade);
        setResultado(data);
        setCarregando(false);
    }


    function escolherMoeda(moeda: Moeda) {
        if (seletor === "origem") {
            setOrigem(moeda);
        }
        else {
            setDestino(moeda);
        }
        setSeletor(null);
        setResultado(null);
        setErro("");
    }

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Conversão de moedas</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Moeda de origem</Text>

                    <Pressable style={styles.select} onPress={() => setSeletor("origem")}>
                        <Text style={origem ? styles.selectText : styles.placeholder}>
                            {origem ? `${origem[0]} — ${origem[1]}` : "Selecione uma moeda"}
                        </Text>
                        <Text style={styles.chevron}>⌄</Text>
                    </Pressable>

                    <Text style={styles.label}>Moeda de destino</Text>

                    <Pressable style={styles.select} onPress={() => setSeletor("destino")}>
                        <Text style={destino ? styles.selectText : styles.placeholder}>
                            {destino ? `${destino[0]} — ${destino[1]}` : "Selecione uma moeda"}
                        </Text>
                        <Text style={styles.chevron}>⌄</Text>
                    </Pressable>

                    <Text style={styles.label}>Valor</Text>

                    <TextInput
                        style={styles.input}
                        value={valor}
                        onChangeText={(texto) => {
                            setValor(texto);
                            setResultado(null);
                        }}
                        keyboardType="decimal-pad"
                        placeholder="1,00"
                        placeholderTextColor="#8A8A8A"
                    />

                    <Pressable
                        style={styles.button}
                        onPress={converter}
                        disabled={carregando}
                    >
                        {carregando
                            ? <ActivityIndicator color="#212121" />
                            : <Text style={styles.buttonText}>Converter</Text>
                        }
                    </Pressable>
                </View>

                {erro !== "" &&
                    <Text style={styles.error}>{erro}</Text
                    >}

                {resultado && (
                    <View style={styles.card}>
                        <Text style={styles.label}>Resultado</Text>
                        <Text style={styles.value}>
                            {resultado.requested_amount.toFixed(2)} {resultado.base_code}
                        </Text>
                        <Text style={styles.converted}>
                            {resultado.conversion_result.toFixed(2)} {resultado.target_code}
                        </Text>
                        <Text style={styles.rate}>
                            Taxa: 1 {resultado.base_code} = {resultado.conversion_rate.toFixed(4)} {resultado.target_code}
                        </Text>
                    </View>
                )}
            </ScrollView>

            <Modal
                visible={seletor !== null}
                transparent
                animationType="slide"
                onRequestClose={() => setSeletor(null)}
            >
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>
                            {seletor === "origem" ? "Escolha a moeda de origem" : "Escolha a moeda de destino"}
                        </Text>

                        {carregando ? (
                            <ActivityIndicator color="#F5C542" />
                        ) : (
                            <FlatList
                                data={moedas}
                                keyExtractor={(item) => item[0]}
                                renderItem={({ item }) => (
                                    <Pressable
                                        style={styles.option}
                                        onPress={() => escolherMoeda(item)}
                                    >
                                        <Text style={styles.optionText}>
                                            {item[0]} — {item[1]}
                                        </Text>
                                    </Pressable>
                                )}
                            />
                        )}

                        <Pressable style={styles.closeButton} onPress={() => setSeletor(null)}>
                            <Text style={styles.closeText}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#212121",
    },
    content: {
        paddingTop: 20,
        paddingBottom:20,
        marginTop:20,
        gap: 14,
    },
    title: {
        color: "#F5F5F5",
        fontSize: 26,
        fontWeight: "700",
    },
    card: {
        padding: 18,
        borderRadius: 14,
        backgroundColor: "#2B2B2B",
        borderWidth: 1,
        borderColor: "#3A3A3A",
        gap: 10,
    },
    label: {
        color: "#C5C5C5",
        fontSize: 14,
        fontWeight: "600",
    },
    select: {
        minHeight: 46,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        backgroundColor: "#212121",
        borderWidth: 1,
        borderColor: "#414141",
        borderRadius: 9,
        marginBottom: 8,
    },
    selectText: {
        flex: 1,
        color: "#F5F5F5",
        fontSize: 15,
    },
    placeholder: {
        flex: 1,
        color: "#8A8A8A",
        fontSize: 15,
    },
    chevron: {
        color: "#C5C5C5",
        fontSize: 20,
        marginLeft: 8,
    },
    input: {
        height: 46,
        color: "#F5F5F5",
        backgroundColor: "#212121",
        borderWidth: 1,
        borderColor: "#414141",
        borderRadius: 9,
        paddingHorizontal: 12,
        fontSize: 16,
        marginBottom: 8,
    },
    button: {
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9,
        backgroundColor: "#F5C542",
    },
    buttonText: {
        color: "#212121",
        fontSize: 15,
        fontWeight: "700",
    },
    error: {
        color: "#FF8A80",
        textAlign: "center",
    },
    value: {
        color: "#E5E5E5",
        fontSize: 16,
    },
    converted: {
        color: "#F5C542",
        fontSize: 22,
        fontWeight: "700",
    },
    rate: {
        color: "#C5C5C5",
        fontSize: 14,
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#0009",
    },
    modalCard: {
        height: "75%",
        padding: 18,
        paddingBottom: 30,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        backgroundColor: "#2B2B2B",
    },
    modalTitle: {
        color: "#F5F5F5",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
    },
    option: {
        minHeight: 48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#414141",
    },
    optionText: {
        color: "#E5E5E5",
        fontSize: 15,
    },
    check: {
        color: "#F5C542",
        fontSize: 18,
        fontWeight: "700",
    },
    closeButton: {
        alignItems: "center",
        paddingTop: 14,
    },
    closeText: {
        color: "#F5C542",
        fontSize: 15,
        fontWeight: "700",
    },
});
