import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail3() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/cappuccino.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Cappuccino</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
    Um cappuccino clássico, muito famoso no Brasil e consiste em um terço de café expresso, um terço de leite vaporizado e um terço de espuma de leite vaporizado. Variações populares do cappuccino como o café latte e o macchiato consistem basicamente na alteração destas proporções. O uso de chocolate em pó no cappuccino é uma prática comum no Brasil, mas não faz parte da receita tradicional.
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