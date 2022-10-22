import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Login from "./Screen/Login";
import OTP from "./Screen/OTP";
import Welcome from "./Screen/Welcome";
import Birth from "./Screen/Birth";
import Family from "./Screen/Family";
import Personal from "./Screen/Personal";
import Almost from "./Screen/Almost";
import Hello from "./Screen/Hello";
import Profile from "./Screen/Profile";
import Shortlist from "./Screen/Shortlist";
import Alerts from "./Screen/Alerts";
import Account from "./Screen/Account";
import Profiling from "./Screen/Profiling";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hello"
        component={Hello}
        options={{
          title: "Hello, Madam!",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="persons" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shortlist"
        component={Shortlist}
        options={{
          title: "Shortlist",
          tabBarLabel: "Shortlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-heart-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          title: "Alerts",
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-alert"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: "Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Birth"
          component={Birth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Family"
          component={Family}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Almost"
          component={Almost}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profiling"
          component={Profiling}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
