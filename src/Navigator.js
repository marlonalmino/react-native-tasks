import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const NativeStack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            <NativeStack.Screen name='Auth' component={Auth} />
            <NativeStack.Screen name='Home' component={TaskList} />
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