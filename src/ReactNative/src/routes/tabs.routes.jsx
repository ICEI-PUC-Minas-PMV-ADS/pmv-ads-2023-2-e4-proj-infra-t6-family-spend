import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import PasswordPage from '../pages/Password'
import NewSpendPage from '../pages/NewSpend'
import FamilyPage from '../pages/FamilyMember'
import SpendPage from '../pages/Spends'
import SignInPage from '../pages/SignIn'
import { House, SignIn, Password, User, CreditCard, Money, UsersThree } from 'phosphor-react-native';
import { useState } from 'react';
import { Text } from 'react-native-paper';

const { Navigator, Screen } = createBottomTabNavigator()

export default function TabRoutes() {

  
  const [IsLogged, setIsLogged] = useState(false)

  if (!IsLogged) {
    return(
      <>
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

          }}>
          
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

          <Screen 
            name = "Login" 
            options={{
            tabBarIcon: ({color}) => (
              <User color={color} size={25} weight='fill'/>
            )
          }} >
            {(props) => <LoginPage setLogin={setIsLogged} Loged={IsLogged} />}
          </Screen>
          
          <Screen name = "Password" component= {PasswordPage} options={{
            tabBarIcon: ({color}) => (
              <Password  color={color} size={25} weight='fill'/>
            )
          }} />
        </Navigator>
      </>
    )


  } else {

    return(
      <>
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

          }}>
          
          <Screen name = "Spends" component= {SpendPage} options={{
            tabBarIcon: ({color}) => (
              <Money   color={color} size={25} weight='fill'/>
            )
          }} />

          <Screen name = "NewSpend" component= {NewSpendPage} options={{
            tabBarIcon: ({color}) => (
              <CreditCard  color={color} size={25} weight='fill'/>
            )
          }} />
          
          <Screen name = "NewFamilyMember" component= {FamilyPage} options={{
            tabBarIcon: ({color}) => (
              <UsersThree   color={color} size={25} weight='fill'/>
            )
          }} />
        </Navigator>
      </>
    )
  }

  
}