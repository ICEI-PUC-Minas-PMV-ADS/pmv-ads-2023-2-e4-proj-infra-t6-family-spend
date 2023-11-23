import { StyleSheet, Text, View, FlatList, SafeAreaView, Button  } from "react-native";
import { IconButton } from 'react-native-paper';
import React, { useEffect } from 'react';
import axios from 'react-native-axios'
import { Money, Trash } from 'phosphor-react-native';
import { ScrollView } from 'react-native-virtualized-view'
import useAxiosFunction from '../components/UseAxiosFunction';


export default function SpendPage () {

  const [gasto, error, loading, axiosFetch] = useAxiosFunction()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/gasto',
    });
  }

  useEffect(() => {
    getData();
    console.log(gasto);
    //eslint-disable-next-line
  }, [])

  const deletarGasto = (id) => {
    debugger;
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'DELETE',
        url: `/gasto/${id}`,
        data: {
          id: id
        }
      }
    )
  }

  const z = 0;
  const total = Object.values(gasto).reduce((t, {valor}) => t + valor, 0);



  // const total = '30,00'

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      gasto: 'Supermercado',
      valor: '32,00',
      responsavel: 'Lucas',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      gasto: 'Supermercado',
      valor: '32,00',
      responsavel: 'Lucas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      gasto: 'Supermercado',
      valor: '32,00',
      responsavel: 'Lucas',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa93f63',
      title: 'Second Item',
      gasto: 'Supermercado',
      valor: 'R$32,00',
      responsavel: 'Lucas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145552329d72',
      title: 'Third Item',
      gasto: 'Supermercado',
      valor: '32,00',
      responsavel: 'Lucas',
    },
  ];


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
              data={DATA}
              renderItem={({item}) => <Item gasto={item.gasto} responsavel={item.responsavel} valor={item.valor} id={item.id}/>}
              keyExtractor={item => item.id}
            />


          {/* {gasto.map((item, index) => (
            <View key={index}>
              <Text>{item.nomeUsuario}</Text>
              <Text>{item.nomeGasto}</Text>
              <Text>{item.valor}</Text>
              <View>
                <Button id='btnDeletar' text='Deletar' click={() => deletarGasto(item.id)}></Button>
              </View>
            </View>
          ))} */}
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