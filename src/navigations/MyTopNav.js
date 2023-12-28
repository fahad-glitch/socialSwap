import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FILL_2 } from '../constants/Color';
import Profile from '../screens/private/Profile';
import Post from '../screens/private/Post';

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: FILL_2},
      }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Posts" component={Post} />
    </Tab.Navigator>
  );
}