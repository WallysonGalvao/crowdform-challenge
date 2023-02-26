import { theme } from "@app/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { PublicRoutes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <PublicRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
