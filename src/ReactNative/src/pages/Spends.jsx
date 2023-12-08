import { StyleSheet, Text, View, FlatList, SafeAreaView, Button  } from "react-native";
import { IconButton } from 'react-native-paper';
import React, { useEffect } from 'react';
import axios from '../api/api'
import { Money, Trash } from 'phosphor-react-native';
import { ScrollView } from 'react-native-virtualized-view'
import useAxiosFunction from '../components/UseAxiosFunction';


export default function SpendPage () {

  const [gasto, error, loading, axiosFetch] = useAxiosFunction()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/gasto/get',
    });
  }

  useEffect(() => {
    getData();
    console.log(gasto);
    //eslint-disable-next-line
  }, [])

  const deletarGasto = (id) => {
    // debugger;
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'DELETE',
        url: `/gasto/delete/${id}`,
        data: {
          id: id
        }
      }
    )
    getData();
  }

  const z = 0;
  const total = Object.values(gasto).reduce((t, {valor}) => t + valor, 0);

  const Item = ({gasto, valor, responsavel, id}) => (
    <View style={styles.item}>

      <View>
        <Text style={styles.title}> {gasto}</Text>
        <Text style={styles.text}> {responsavel}</Text>
      </View>

      <View style={styles.value}>
        <Text style={styles.title}>Valor:</Text>
        <Text>R$ {valor}</Text>
      </View>

      <IconButton
        icon="trash-can"
        iconColor='#c02948'
        size={25}
        onPress={() => deletarGasto(id)}
      />

    </View>
  );

  return (
    <>
      <ScrollView>
        <View style={styles.section}>

          <Money color='#267024' size={50} weight='fill'/>
          <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
            Gastos
          </Text>

          <View style={styles.conteudo}>
            <FlatList
              data={gasto}
              renderItem={({item}) => <Item gasto={item.nomeGasto} responsavel={item.nomeUsuario} valor={item.valor} id={item.id}/>}
              keyExtractor={item => item.id}
            />

          </View>

        </View>
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: {total}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    flex: 1,
    marginTop: 1,
  },
  item: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    marginVertical: 3,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#82bfa0',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  value: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    height: 40,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    backgroundColor: '#242a32',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 22,
    color: '#f3f3f3',
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  
});