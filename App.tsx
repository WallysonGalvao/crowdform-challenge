import { theme } from '@app/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
} from '@expo-google-fonts/sora';

import { PrivateRoutes, PublicRoutes } from './src/routes';
import { useAuthStore } from '@app/services/stores/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: Sora_400Regular,
    semiBold: Sora_600SemiBold,
  });

  const { token } = useAuthStore();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          {token ? <PrivateRoutes /> : <PublicRoutes />}
        </ThemeProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}
