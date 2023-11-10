import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Navbar() {
  return(
    <>
      <LinearGradient style={{
          width: '100%',
          height: 80,
          alignItems: 'center',
          justifyContent: 'flex-end'
        }} 
        start={{x:0,y:1}}
	      end={{x:1,y:0}}
        colors={['#333333','#267024']}>
        <Appbar style={styles.appBar}>
          {/* <Image source={require('../../assets/favicon.png')} style={styles.tinyLogo}/> */}
          <Text style={styles.headerTitle}>Family Spend</Text>
        </Appbar>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f3f3f3',
  },
  appBar: {
    backgroundColor: "transparent",
  }
  
});