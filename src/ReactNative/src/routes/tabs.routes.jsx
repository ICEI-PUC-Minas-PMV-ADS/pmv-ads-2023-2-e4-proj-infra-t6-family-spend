import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import PasswordPage from '../pages/Password'
import SignInPage from '../pages/SignIn'
import { House, SignIn, Password, User } from 'phosphor-react-native';
import { useState } from 'react';

const { Navigator, Screen } = createBottomTabNavigator()

export default function TabRoutes() {

  
  const [IsLogged, setIsLogged] = useState(false)

  return(
    <Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor: '#242a32',
          height: 75,
          alignItems: 'center',
          borderTopWidth: 3,
          borderTopColor: '#267024'
        },

        headerShown: false,
        tabBarActiveTintColor: '#267024',
        tabBarInactiveTintColor: '#67686d',
        tabBarShowLabel: false,

      }}
    >
      
      <Screen name = "Home" component= {HomePage} options={{
        tabBarIcon: ({color}) => (
          <House color={color} size={25} weight='fill'/>
        )
      }} />

      <Screen name = "SignIn" component= {SignInPage} options={{
        tabBarIcon: ({color}) => (
          <SignIn color={color} size={25} weight='fill'/>
        )
      }} />

      <Screen name = "Login" component= {LoginPage} options={{
        tabBarIcon: ({color}) => (
          <User color={color} size={25} weight='fill'/>
        )
      }} />

      <Screen name = "Password" component= {PasswordPage} options={{
        tabBarIcon: ({color}) => (
          <Password  color={color} size={25} weight='fill'/>
        )
      }} />

    </Navigator>
  )
}