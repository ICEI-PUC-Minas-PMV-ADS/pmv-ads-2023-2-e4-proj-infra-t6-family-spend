import { StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { Password } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import axios from '../api/api'
import useAxiosFunction from '../components/UseAxiosFunction';

export default function PasswordPage () {

  const [mail, setMail] = useState('');




  return (
    <View style={styles.section}>

      <Password color='#267024' size={50} weight='fill'/>
      <Text style={{
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
      }}>
        Esqueceu sua Senha?
      </Text>

      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'regular',
        marginBottom: 15,
      }}>
        Receba uma nova senha pelo e-mail
      </Text>

      <Input label='E-mail' placeholder='oi@pucminas.com' valor={mail} change={text => setMail(text)} />

      <Button 
        mode="contained"
        onPress={() => console.log('pressed') }
        buttonColor='#333'
      >
        Enviar 
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