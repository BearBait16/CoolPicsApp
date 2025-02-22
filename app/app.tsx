import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import NoGreaterJoy from "./Screens/NoGreaterJoy";

const Stack = createNativeStackNavigator<{
  Home: undefined;
  NoGreaterJoy: undefined;
}>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NoGreaterJoy" component={NoGreaterJoy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
