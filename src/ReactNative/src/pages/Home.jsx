import {StyleSheet, Text, Image, View} from 'react-native';

export default function HomePage() {
  return(
    <View style={styles.section}>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
      }}>
        Family Spend
      </Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
      }}>
        A ferramenta de organização perfeita para você e sua familia
      </Text>
      <Image
        style={{
          width: 250,
          height: 250,
        }}
        source={require('../../assets/favicon.png')}/>
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