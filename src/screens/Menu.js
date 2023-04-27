import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import { Gravatar } from 'react-native-gravatar'
import Icon from 'react-native-vector-icons/FontAwesome'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'

import commonStyles from '../commonStyles'

export default props => {
    
    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        
        // Navigate AuthOrApp
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{
                    name: 'Auth'
                }]
            })
        ) // EndNavigate
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.email,
                        secure: true
                    }} />

                <View style={styles.userInfo}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.email}>{props.email}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.mainText,
        marginBottom: 5
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 10
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10,
    }
})