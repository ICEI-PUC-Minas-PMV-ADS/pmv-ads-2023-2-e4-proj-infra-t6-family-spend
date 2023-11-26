import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { SignIn } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import axios from '../api/api'
import useAxiosFunction from '../components/UseAxiosFunction';

export default function SignInPage () {

  const [user, error, loading, axiosFetch] = useAxiosFunction();

  const [mail, setMail] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fazerLogin = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/Auth/Register/register',
        data: {
          email: {mail},
          username: {userName},
          fullName: {fullName},
          password: {password},
          confirmPassword: {confirmPassword},
        }
      }
    )
  }

  return (
    <ScrollView>
      <View style={styles.section}>

        <SignIn color='#267024' size={50} weight='fill'/>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
          Sign In
        </Text>

        <Input label='Nome' placeholder='Joao' valor={fullName} change={text => setFullName(text)}/>
        <Input label='Nome de usuário' placeholder='Joao10' valor={userName} change={text => setUserName(text)}/>
        <Input label='E-mail' placeholder='oi@pucminas.com' valor={mail} change={text => setMail(text)}/>
        <Input label='Senha' placeholder='*******' valor={password} change={text => setPassword(text)}/>
        <Input label='Confirmar Senha' placeholder='*******' valor={confirmPassword} change={text => setConfirmPassword(text)}/>

        <Button 
          mode="contained"
          onPress={fazerLogin}
          buttonColor='#333'
        >
          Cadastrar
        </Button>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  section: {
    marginTop: 40,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});