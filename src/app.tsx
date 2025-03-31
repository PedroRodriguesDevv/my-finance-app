import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Ajuste o caminho
import LoginScreen from './screens/LoginScreen'; // Ajuste o caminho

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Oculta cabeçalho
          _animationEnabled: true,
          get animationEnabled() {
            return this._animationEnabled;
          },
          set animationEnabled(value) {
            this._animationEnabled = value;
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ gestureEnabled: false }} // Desativa gesto de voltar na tela de login
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}