import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from'../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tab.Screen name='Home'component={HomeScreen}
      options={{
        tabBarLabel:({color})=>(
        <Text style={{color:color,fontSize:12, marginTop:-7}}>Home</Text>
        ),
        }}/>
      <Tab.Screen name='Profile'component={ProfileScreen}
      options={{
        tabBarLabel:({color})=>(
        <Text style={{color:color,fontSize:12, marginTop:-7}}>Curso</Text>
        ),
        
      }}/>
    </Tab.Navigator>
  )
}