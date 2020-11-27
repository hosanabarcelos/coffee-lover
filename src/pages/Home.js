import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Coffee from '../components/coffee';

export default function Home() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
           <Image 
           source={require('../images/banner.jpg')}
           style = {styles.image}
           />

           <View style={styles.textContainer}>
            <Text style={styles.text}>COFFEE</Text>
            <Text style={[styles.text, { color: '#87431d'}]}>•</Text>
            <Text style={[styles.text, { color: '#87431d'}]}>LOVERS</Text>
            <TouchableOpacity style = {{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <MaterialIcons 
                name = 'filter-list'
                size = {24}
                color = '#000'
                />
            </TouchableOpacity>
           </View>
       </View>

       <View style={styles.line} />

       <ScrollView>

        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Coffee color = {'#808080'}img={require('../images/ristretto.png')} cost={'INTENSO'} onClick={() => navigation.navigate('Detail')}>
            Ristretto
            </Coffee>
            <Coffee img={require('../images/expressocanela.png')} cost={'INTENSO'} onClick={() => navigation.navigate('Detail2')}> 
            Expresso Canela
            </Coffee>
        </View>


        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Coffee img={require('../images/cappuccino.png')} cost={'SUAVE'} onClick={() => navigation.navigate('Detail3')}>
            Cappuccino
            </Coffee>
            <Coffee img={require('../images/mocha.png')} cost={'SUAVE'} onClick={() => navigation.navigate('Detail4')}> 
            Mocha
            </Coffee>
        </View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Coffee img={require('../images/expresso.png')} cost={'INTENSO'} onClick={() => navigation.navigate('Detail5')}>
            Expresso
            </Coffee>
            <Coffee img={require('../images/cappuccinogelado.png')} cost={'INTENSO'} onClick={() => navigation.navigate('Detail6')}> 
            Cappuccino Gelado
            </Coffee>
        </View>

        <View style={styles.line} /> 

    </ScrollView>

   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%',
    }, 
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#dbcbbd',
        borderBottomWidth: 2
    }
})