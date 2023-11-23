import { StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { User } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import axios from '../api/api'
import useAxiosFunction from '../components/UseAxiosFunction';

export default function LoginPage (props) {

  const [user, error, loading, axiosFetch] = useAxiosFunction();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const fazerLogin = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/v1/authenticate/login',
        data: {
          email: {mail},
          password: {password},
        }
      }
    )
    
    //não apagar
    props.setLogin(true)
  }

  return (
    <View style={styles.section}>

      <User color='#267024' size={50} weight='fill'/>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Login
      </Text>

      <Input label='E-mail' placeholder='oi@pucminas.com' valor={mail} change={text => setMail(text)}/>
      <Input label='Senha' placeholder='*******' valor={password} change={text => setPassword(text)} />

      <Button 
        mode="contained"
        onPress={fazerLogin}
        buttonColor='#333'
      >
        Fazer Login
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});