import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input(props) {
  return(
    <View style={styles.box}>
      <Text style={styles.label} >{props.label}</Text>
      <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
      >
        </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginTop: 7,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#267024',
    padding: 5,
    fontSize: 17.5
  },
  
});