import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { firebaseConfig } from "../config/firebaseconfig";

import { initializeApp } from "firebase/app";

const Stack = createStackNavigator();

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useEffect, useState } from "react";

export default function RootRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => setIsAuthenticated(!!user));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthRoutes"
      >
        {isAuthenticated ? (
          <Stack.Screen name="AppRoutes" component={AppRoutes} />
        ) : (
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
