import { UserProvider } from "./src/contexts/userContext";

import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import RootRoutes from "./src/routes/root.routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <UserProvider>
      <RootRoutes />
    </UserProvider>
  );
}
