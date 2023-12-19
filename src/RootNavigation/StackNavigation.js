import React, {useEffect} from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import LoginAs from '../pages/LoginAs';
import LoginPage from '../pages/LoginPage';
import Signup from '../pages/Signup';
import OTPScreen from '../pages/OTPScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* Screen  */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginAs"
          component={LoginAs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
