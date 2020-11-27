import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail6() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/cappuccinogelado.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Cappuccino Gelado</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
    O café gelado é uma bebida preparada à base de café, misturado com alimento congelado. Este tipo de bebida é mais adequado nos meses de verão, mas também pode ser apreciada nos dias mais frios do inverno. Os ingredientes congelados utilizados na sua preparação podem variar de produtos lácteos (creme, leite, iogurte etc) para qualquer forma de apresentação com gelo (sorvetes de vários sabores, cubos de gelo). Essa maneira de consumir café mesclado com um alimento congelado é comum em diversos países do mundo.
    </Text>
  </View>
   </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    paddingTop: 20
  },
  image: {
    width: '85%',
    marginLeft: 35
  },
  title: {
    fontFamily: 'Anton_400Regular',
    padding: 20
  },
  textContent: {
    fontSize: 18,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  line: {
    borderBottomColor: '#dbcbbd',
    borderBottomWidth: 2 
  }
})