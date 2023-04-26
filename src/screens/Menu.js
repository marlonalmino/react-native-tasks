import React from 'react'
import { ScrollView } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'

export default props => {
    return (
        <ScrollView>
            <DrawerItemList {...props} />
        </ScrollView>
    )
}