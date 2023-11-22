import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { SignIn } from 'phosphor-react-native';

export default function SignInPage () {
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

        <Input label='Nome' placeholder='Joao' />
        <Input label='Relação Familiar' placeholder='Pai' />
        <Input label='E-mail' placeholder='oi@pucminas.com' />
        <Input label='Senha' placeholder='*******' />

        <Button 
          mode="contained"
          onPress={() => console.log('pressed') }
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