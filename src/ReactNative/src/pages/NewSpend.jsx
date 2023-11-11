import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { CreditCard } from 'phosphor-react-native';

export default function SignInPage () {
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

        <Input label='Nome do Gasto' placeholder='Padaria' />
        <Input label='Valor' placeholder='R$ 30,99' />
        <Input label='Data' placeholder='10/11/23' />
        <Input label='Nome do responsável' placeholder='João' />

        <Button 
          mode="contained"
          onPress={() => console.log('pressed') }
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
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});