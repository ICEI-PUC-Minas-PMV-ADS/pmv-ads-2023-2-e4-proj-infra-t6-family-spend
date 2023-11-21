import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from '../components/Input'
import { Button } from "react-native-paper";
import { Money } from 'phosphor-react-native';

export default function SpendPage () {
  return (
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