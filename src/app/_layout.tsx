import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#212121" },
          headerTintColor: "#F5F5F5",
          headerTitleStyle: { color: "#F5F5F5", fontWeight: "600" },
          drawerStyle: { backgroundColor: "#212121" },
          drawerActiveTintColor: "#B8D4C2",
          drawerInactiveTintColor: "#B5B5B5",
        }}
      >
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
