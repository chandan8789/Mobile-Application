// src/components/BottomTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'; // Ensure this file exists and is properly set up
import AntDesign from 'react-native-vector-icons/AntDesign'; // You can use any icon library you prefer

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // AntDesign home icon
          } else if (route.name === 'Profile') {
            iconName = 'user'; // AntDesign user icon
          }

          return <AntDesign name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
