import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screen/Home";
import ProfileRoutes from "./profile.routes";
import Favorites from "../screen/Favorites";
import Search from "../screen/Search";
import MySchedules from "../screen/MySchedules";

const Tab = createBottomTabNavigator();

import { Feather } from "@expo/vector-icons";
import MyScheduleIcon from "../components/MyScheduleIcon";

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6665ff",
        tabBarInactiveTintColor: "#333333",
        tabBarStyle: {
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Feather name="home" size={28} color={color} />;
            } else {
              return <Feather name="home" size={24} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Feather name="search" size={28} color={color} />;
            } else {
              return <Feather name="search" size={24} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="MySchedules"
        component={MySchedules}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <MyScheduleIcon size={30} />;
            } else {
              return <MyScheduleIcon size={24} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Feather name="heart" size={28} color={color} />;
            } else {
              return <Feather name="heart" size={24} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Feather name="user" size={28} color={color} />;
            } else {
              return <Feather name="user" size={24} color={color} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
