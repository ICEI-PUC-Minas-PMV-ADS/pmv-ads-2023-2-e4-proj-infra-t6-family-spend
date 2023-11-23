import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { UsersThree } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import axios from '../api/api'
import useAxiosFunction from '../components/UseAxiosFunction';


export default function FamilyPage () {

  const [usuarios, error, loading, axiosFetch] = useAxiosFunction();

  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/usuario',
    });
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const postUsuario = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/usuario',
        data: {
          id: null,
          familiaId: '653ed7469c412eb335296e15',
          nomeUsuario: {user},
          email: {mail},
          senha: {password},
          nomeFamilia: 'string',
        }
      }
    )
  }

  return (
    <ScrollView>
      <View style={styles.section}>

        <UsersThree color='#267024' size={50} weight='fill'/>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        }}>
          Registrar novo membro
        </Text>

        <Input label='Nome' placeholder='Joao' valor={user} change={text => setUser(text)} />
        <Input label='Relação Familiar' placeholder='Pai' />
        <Input label='E-mail' placeholder='oi@pucminas.com' valor={mail} change={text => setMail(text)} />
        <Input label='Senha' placeholder='*******' valor={password} change={text => setPassword(text)}/>

        <Button 
          mode="contained"
          onPress={postUsuario}
          buttonColor='#333'
        >
          Cadastrar Familiar
        </Button>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});