import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o app</Text>
            <Text style={styles.description}>
                Aplicativo de conversão de moedas desenvolvido para a disciplina de
                Desenvolvimento Mobile.
            </Text>

            <Text style={styles.subtitle}>Conceitos utilizados</Text>
            <Text style={styles.item}>• Navegação baseada em arquivos</Text>
            <Text style={styles.item}>• Navegação por Drawer e Tabs</Text>
            <Text style={styles.item}>• Requisições a APIs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
        paddingHorizontal: 32,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
       
        marginBottom: 28,
    },
    subtitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        lineHeight: 28,
    },
});
