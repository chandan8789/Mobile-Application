// App.js
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Form from './src/components/Form';
import Header from './src/components/Header';
import BottomTabNavigator from './src/components/Bottom';

const Stack = createNativeStackNavigator();

const FormWithHeader = () => (
  <View style={{flex: 1}}>
    {/* <Header /> */}
    <BottomTabNavigator />
  </View>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}} // Hide header for bottom tab screens
        /> */}
        <Stack.Screen
          name="Form"
          component={FormWithHeader}
          options={{headerShown: false}} // Hide header for form screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
