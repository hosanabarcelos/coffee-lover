import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Coffee (props) {
 return (
    <TouchableOpacity style = {styles.container} onPress={props.onClick}>
        <Image 
        source={props.img}
        style = { styles.coffeeImg}
        />
        <Text style = {styles.coffeeText}>
            {props.children}
        </Text>
        <Text style = {styles.coffeeText2}>
            {props.cost}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    coffeeImg: {
        width: 175,
        height: 175
    },
    coffeeText: {
        fontSize: 18,
        color: '#87431d',
    },
    coffeeText2: {
        fontSize: 12,
        color: '#808080',
    }
})