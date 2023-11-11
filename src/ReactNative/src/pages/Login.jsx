import { StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { User } from 'phosphor-react-native';

export default function LoginPage (props) {
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

      <Input label='E-mail' placeholder='oi@pucminas.com' />
      <Input label='Senha' placeholder='*******' />

      <Button 
        mode="contained"
        onPress={() => {props.setLogin(true)} }
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