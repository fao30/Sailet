import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { DetailScreen } from "./src/Screens/DetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Main"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Clinic"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: "Заметка",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
