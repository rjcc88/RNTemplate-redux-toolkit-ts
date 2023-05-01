import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator<AuthRootStackParamList>();

import { Login, Splash } from '@/Screens';


export type AuthRootStackParamList = {
    Splash: undefined;
    Login: undefined;
};

const AuthNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName='Splash'
        screenOptions={{
            headerShown: false
        }}>
            <RootStack.Screen name='Splash' component={Splash} />
            <RootStack.Screen name='Login'  component={Login} />
        </RootStack.Navigator>
    )
}

export default AuthNavigator