import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator<AppRootStackParamList>();

import { About, Projects, Map, ProjectDetails } from "@/Screens";

import Tabs from "../tabs"

export type AppRootStackParamList = {
    Main: undefined;
    About: undefined;
    Projects: undefined;
    Map: undefined;
    ProjectDetails: undefined;
};

const AppNavigator = () => {
    return (
        <RootStack.Navigator
       screenOptions={{headerShown:false}}
         initialRouteName='Main'
       >
            <RootStack.Screen name="Main" component={Tabs} />
            {/* Tabs */}
            <RootStack.Screen name="About" component={About} />
            <RootStack.Screen name="Projects" component={Projects} />
            <RootStack.Screen name="Map" component={Map} />
            {/* common screen */}
            <RootStack.Screen name="ProjectDetails" component={ProjectDetails}/>
        </RootStack.Navigator>
    )
}

export default AppNavigator