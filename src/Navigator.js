import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import Menu from './screens/Menu'
import TaskList from './screens/TaskList'

import commonStyles from './commonStyles'

const Drawer = createDrawerNavigator()
const NativeStack = createNativeStackNavigator()

const menuConfig = {
    drawerLabelStyle: {
        fontFamily: commonStyles.fontFamily,
        fontWeight: 'normal',
        fontSize: 20,
    },
    drawerActiveTintColor: '#080',
    headerShown: false,
}
 
const DrawerNavigator = props => {
    const { email, name } = props.route.params
    return (
        <Drawer.Navigator screenOptions={menuConfig} 
        drawerContent={(props) => <Menu {...props} email={email} name={name} />} >
            {/* HOJE */}
            <Drawer.Screen name='Today' options={{ title: 'Hoje' }} >
                {props => <TaskList {...props} title='Hoje' daysAhead={0} />}
            </Drawer.Screen>

            {/* AMANHÃ */}
            <Drawer.Screen name='Tomorrow' options={{ title: 'Amanhã' }} >
                {props => <TaskList {...props} title='Amanhã' daysAhead={1} />}
            </Drawer.Screen>

            {/* SEMANA */}
            <Drawer.Screen name='Week' options={{ title: 'Semana' }} >
                {props => <TaskList {...props} title='Semana' daysAhead={7} />}
            </Drawer.Screen>

            {/* MÊS */}
            <Drawer.Screen name='Month' options={{ title: 'Mês' }} >
                {props => <TaskList {...props} title='Mês' daysAhead={30} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const AuthNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            <NativeStack.Screen name='Auth' component={Auth} />
            <NativeStack.Screen name='Home' component={DrawerNavigator} />
        </NativeStack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigator