import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function MoedasLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F5F5F5",
        tabBarInactiveTintColor: "#8A8A8A",
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
        tabBarStyle: {
          backgroundColor: "#212121",
          borderTopWidth: 0,
                  
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Listar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritas"
        options={{
          title: "Favoritas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="converter"
        options={{
          title: "Converter",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
