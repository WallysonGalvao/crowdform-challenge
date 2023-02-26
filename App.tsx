import { theme } from "@app/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
} from "@expo-google-fonts/sora";

import { PublicRoutes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: Sora_400Regular,
    semiBold: Sora_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <PublicRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
