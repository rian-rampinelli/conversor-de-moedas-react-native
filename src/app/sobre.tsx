import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Sobre() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.brand}>CONVERSOR DE MOEDAS</Text>
                        <Text style={styles.title}>Sobre o app</Text>
                        <Text style={styles.descricao}>
                            Aplicativo de conversão de moedas desenvolvido para a disciplina de
                            Desenvolvimento Mobile.
                        </Text>

                        <View style={styles.hr} />

                        <Text style={styles.subtitle}>Conceitos utilizados</Text>
                        <Text style={styles.item}>• Navegação baseada em arquivos</Text>
                        <Text style={styles.item}>• Navegação por Drawer e Tabs</Text>
                        <Text style={styles.item}>• Requisições a APIs</Text>
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
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
        fontSize: 30,
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
    subtitle: {
        color: "#414940",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 10,
    },
    item: {
        color: "#5F665F",
        fontSize: 16,
        lineHeight: 30,
    },
});
