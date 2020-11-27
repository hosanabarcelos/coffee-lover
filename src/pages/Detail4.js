import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail4() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/mocha.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Mocha</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
    Mocha é o nome dado a um tipo de grão de café com um sabor achocolatado, menor e mais redondo que a maioria dos outros tipos de grãos da espécie [Coffea arabica], nativa da Etiópia, mas originalmente cultivada no Iêmen e de lá exportado para o o porto de Mocha, de onde deve ter vindo a associação do café expresso ao nome Mocha. Na Europa, café mocha pode ser referir tanto ao café com chocolate ou simplesmente ao café feito com grãos de mocha.
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
    width: '75%',
    marginLeft: 40
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