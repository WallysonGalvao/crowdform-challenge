import { LoginScreen } from "@app/screens/Auth/Login";
import { SignUpScreen } from "@app/screens/Auth/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type PublicRootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Routes = () => {
  const Stack = createNativeStackNavigator<PublicRootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
