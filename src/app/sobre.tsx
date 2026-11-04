import { Text, View, StyleSheet } from "react-native";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <View style={styles.hr}></View>
            <View>
                <Text>App de conversor de moedas feito para disciplina de dev mobile, com os seguintes conceitos apresentados:
                </Text>
            </View>
            <View>
                <Text>- Navegação FileBased</Text>
                <Text>- Drawer, Tab navigations</Text>
                <Text> -requisições a APIs</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontWeight: "bold",
        marginTop: 50,
        fontSize: 20,
        marginBottom: 10

    },
    hr: {
        height: 3,
        width: "80%",
        backgroundColor: "black"

    }
});
