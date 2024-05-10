import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RecipeList from './src/components/recipeList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/home_screen';
import { SettingsScreen } from './src/screens/settings_screen';
import { NavigationContainer } from '@react-navigation/native';
import { Text, BottomNavigation } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
<Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel?.toString() ?? '';

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}