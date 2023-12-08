import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { CreditCard } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import axios from '../api/api'
import useAxiosFunction from '../components/UseAxiosFunction';

export default function NewSpendPage () {

  const [gastos, error, loading, axiosFetch] = useAxiosFunction();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [user, setUser] = useState('');

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/gasto/get',
    });
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const handleSubmit = () => {

    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/gasto/post',
        data: {
          id: null,
          familiaId: 'string',
          usuarioId: 'string',
          nomeGasto: "teste",
          valor: 90,
          data: "2023-10-30",
          nomeUsuario: 'sdadsa',
        }
      }
    )
  }

  return (
    <ScrollView>
      <View style={styles.section}>

        <CreditCard color='#267024' size={50} weight='fill'/>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        }}>
          Cadastrar Novo Gasto
        </Text>

        <Input label='Nome do Gasto' placeholder='Padaria' valor={title} change={text => setTitle(text)}/>
        <Input label='Valor' placeholder='R$ 30,99' valor={value} change={text => setValue(text)}/>
        <Input label='Data' placeholder='10/11/23' valor={date} change={text => setDate(text)}/>
        <Input label='Nome do responsável' placeholder='João' valor={user} change={text => setUser(text)}/>

        <Button 
          mode="contained"
          onPress={handleSubmit}
          buttonColor='#333'
        >
          Salvar gasto
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