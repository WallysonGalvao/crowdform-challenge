import { Icon } from '@app/components/Icon';
import { ConstructionScreen } from '@app/screens/Construction';
import { DetailsScreen } from '@app/screens/Details';
import { HomeScreen } from '@app/screens/Home';
import { ResumeScreen } from '@app/screens/Resume';
import { theme } from '@app/styles/theme';
import { FundsProps } from '@app/utils/data';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootBottomParamList = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
  Resume: undefined;
};

export type PrivateRootStackParamList = {
  BottomTabs: undefined;
  Details: { fund: FundsProps };
};

const BottomTabs = () => {
  const Tab = createBottomTabNavigator<RootBottomParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.frenchViolet,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarItemStyle: {
          backgroundColor: theme.colors.white,
          marginTop: theme.metrics.px(10),
        },
        tabBarLabelStyle: {
          fontFamily: 'regular',
          fontSize: theme.metrics.px(10),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              color={focused ? theme.colors.frenchViolet : theme.colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={ConstructionScreen}
        options={{
          tabBarLabel: 'Trade',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="trade"
              color={focused ? theme.colors.frenchViolet : theme.colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={ConstructionScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="portfolio"
              color={focused ? theme.colors.frenchViolet : theme.colors.black}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Resume"
        component={ResumeScreen}
        options={{
          tabBarLabel: 'Resume',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="document-attach"
              size={25}
              color={focused ? theme.colors.frenchViolet : theme.colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const Stack = createNativeStackNavigator<PrivateRootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
