import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Início", title: "Início" }}
        />
        <Drawer.Screen
          name="sobre"
          options={{ drawerLabel: "Sobre", title: "Sobre" }}
        />
        <Drawer.Screen
          name="moedas"
          options={{ drawerLabel: "Moedas", title: "Moedas" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
