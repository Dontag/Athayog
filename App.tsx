import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashScreen';
import HomeScreen from './src/screens/homeScreen';
import ScheduleSessions from './src/screens/scheduleSessions';

export default function App() {

  const MainStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
        <MainStack.Screen name='SplashScreen' component={SplashScreen} />
        <MainStack.Screen name='HomeScreen' component={HomeScreen} />
        <MainStack.Screen name='ScheduleSessions' component={ScheduleSessions} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
