import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';
import HomeNavigation from './App/Navigation/HomeNavigation';

export default function App() {
  
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <NavigationContainer>
      
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});
