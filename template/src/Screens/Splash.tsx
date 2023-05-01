import React from "react";
import {
    SafeAreaView,
    Image
} from "react-native"
import { images } from "@/assets"; 
import { AuthRootStackParamList } from "@/Route/sso/auth-navigator";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<AuthRootStackParamList,'Splash'>;

function Splash ({ navigation: { navigate } }:Props) {

    setTimeout(()=>{navigate('Login')},2000)
    
    return(
        <SafeAreaView className="flex items-center absolute inset-0 justify-center ">
            <Icons name={'image'} size={40} color={'black'}/>
          {/* <Image source={images.MainLogo} resizeMode="contain" className="h-56 w-56"/> */}
        </SafeAreaView>
    )

}
    export default Splash;   