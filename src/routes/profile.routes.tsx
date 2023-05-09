import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Profile from "../screen/Profile";
import Information from "../screen/Information";
import EditProfile from "../screen/EditProfile";

export default function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
