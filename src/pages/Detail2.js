import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Detail2() {


 return (
   <ScrollView style = {styles.container}>
     <Image source={require('../images/expressocanela.png')}
     style={styles.image}
     resizeMode = "cover"
     />

     <View>
         <Text style={[styles.title, {fontSize: 30, color: '#87431d'}]}>Expresso com Canela</Text>
     </View>
     <View style={styles.line} /> 
  <View style = {styles.textContent}>
    <Text style = {styles.textContent}>
    O consumo de café com canela tem ganhado cada vez mais adeptos e não é à toa. Além de deliciosa, essa união tem algumas vantagens para a saúde.  A canela tem como principais nutrientes fibra, o cálcio, o ferro, o manganês e a vitamina K. Ela ainda tem propriedades anti-inflamatórias, reduz o risco de doenças cardíacas e de diabetes. O café, por sua vez, tem fósforo, manganês, magnésio e vitaminas do complexo B.
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