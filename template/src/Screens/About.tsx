import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Alert,
    BackHandler,
    ToastAndroid,
} from "react-native"

import { AppRootStackParamList } from "@/Route/app/app-navigator";
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<AppRootStackParamList,'About'>;

const About = ({ navigation }:Props) => {

    return(
        <SafeAreaView className="flex text-xl absolute inset-0 justify-center">
            <Text className="text-center">About</Text>
        </SafeAreaView>
    )

}
    export default About;   