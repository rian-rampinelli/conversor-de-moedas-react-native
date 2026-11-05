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
        backgroundColor: "#212121",
    },
    main: {
        width: "100%",
        maxWidth: 440,
    },
    brand: {
        color: "#A3A3A3",
        fontSize: 12,
        fontWeight: "600",
        letterSpacing: 1.6,
        textAlign: "center",
        marginBottom: 14,
    },
    title: {
        color: "#F5F5F5",
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 12,
    },
    descricao: {
        color: "#C5C5C5",
        fontSize: 16,
        lineHeight: 25,
        textAlign: "center",
    },
    hr: {
        width: "50%",
        height: 2,
        alignSelf: "center",
        backgroundColor: "#5D7569",
        marginVertical: 24,
    },
    subtitle: {
        color: "#E5E5E5",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 10,
    },
    item: {
        color: "#C5C5C5",
        fontSize: 16,
        lineHeight: 30,
    },
});
