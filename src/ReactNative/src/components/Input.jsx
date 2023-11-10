import { Text, TextInput } from 'react-native'

export default function Input(label, placeholder) {
  return(
    <>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder}></TextInput>
    </>
  )
}