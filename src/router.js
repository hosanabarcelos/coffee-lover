import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';
import Detail5 from './pages/Detail5';
import Detail6 from './pages/Detail6';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = 'Home'
                component = {Home}
                options = {{headerShown: false}}
                />

                <Stack.Screen 
                name = 'Detail'
                component = {Detail}
                options = {{headerTitle: 'Ristretto'}}
                />

                <Stack.Screen 
                name = 'Detail2'
                component = {Detail2}
                options = {{headerTitle: 'Canela'}}
                />

                <Stack.Screen 
                name = 'Detail3'
                component = {Detail3}
                options = {{headerTitle: 'Cappuccino'}}
                />

                <Stack.Screen 
                name = 'Detail4'
                component = {Detail4}
                options = {{headerTitle: 'Mocha'}}
                />

                <Stack.Screen 
                name = 'Detail5'
                component = {Detail5}
                options = {{headerTitle: 'Expresso'}}
                />

                <Stack.Screen 
                name = 'Detail6'
                component = {Detail6}
                options = {{headerTitle: 'Gelado'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;