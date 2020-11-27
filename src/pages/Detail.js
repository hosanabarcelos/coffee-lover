import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/ristretto.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Expresso Ristretto</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
   Possui menos volume de água, consequentemente com um sabor mais puro e forte. O ristretto é preparado com a mesma quantidade de café que um espresso, mas a quantidade de água é reduzida pela metade. A bebida final apresenta cores que variam entre o chocolate amargo e tons terrosos, com a parte final da extração mais clara e com tons dourados. O sabor final também deve ter menos amargor que um café espresso.
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