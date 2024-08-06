import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FlashScreen from './src/screen/FlashScreen';
import LoginScreen from './src/screen/LoginScreen';
import MainDashboardScreen from './src/screen/MainDashboardScreen';
import MainDashboardComponent from './src/screen/MainDashboardComponent';
import HalfDoughnutChart from './src/screen/HalfDoughnutChart';
import DoughnutChart from './src/screen/DoughnutChart';


const Stack = createNativeStackNavigator();

const App = () => {
  const [isShowFlash, setIsShowFlash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsShowFlash(false);
    }, 5000);
  });

  return (
    <>
      {isShowFlash ? <FlashScreen />
        :
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MainDashboardComponent'>
            <Stack.Screen name='FlashScreen' component={FlashScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='MainDashboardScreen' component={MainDashboardScreen} />
            <Stack.Screen name='MainDashboardComponent' component={MainDashboardComponent} />
          </Stack.Navigator>
        </NavigationContainer>}
        
     
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});