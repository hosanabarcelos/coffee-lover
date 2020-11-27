import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail5() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/expresso.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Café Expresso</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
    O expresso não é um grão diferente: ele é feito com os mesmos grãos que o café tradicional é feito. Porém, o que difere em gosto e aroma é o método de prepará-lo: ele é feito através da passagem de água quente (não fervendo) sob alta pressão pelo grão moído. Para isso, ele precisa ser feito em máquinas específicas que aumentam a pressão dessa passagem para até dez atmosferas ou bars. Esse processo leva a uma bebida de mais qualidade e sabor acentuado, pois o grão moído é aproveitado em toda sua essência e o líquido fica com muito mais consistência do que o café coado.
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