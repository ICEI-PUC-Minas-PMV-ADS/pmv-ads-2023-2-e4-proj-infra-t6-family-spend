import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { UsersThree } from 'phosphor-react-native';

export default function SignInPage () {
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

        <Input label='Nome' placeholder='Joao' />
        <Input label='Relação Familiar' placeholder='Pai' />
        <Input label='E-mail' placeholder='oi@pucminas.com' />
        <Input label='Senha' placeholder='*******' />

        <Button 
          mode="contained"
          onPress={() => console.log('pressed') }
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