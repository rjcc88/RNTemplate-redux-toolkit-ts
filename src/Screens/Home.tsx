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
    Button,
} from "react-native"

import { useDispatch } from 'react-redux'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CircularProgress } from "@/Components";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppRootStackParamList } from "@/Route/app/app-navigator";
import { Colors } from "@/assets";
import { logOut } from "@/Services/api/Redux/authSlice";
 import { useFetchGetProjectQuery} from "@/Services/modules/query/reduxServices";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Props = NativeStackScreenProps<AppRootStackParamList, 'Main'>;

const Home = ({ navigation: { navigate } }: Props) => {
    const[params, setParams] = useState()
    const dispatch = useDispatch();

//      const { data, isSuccess, isLoading, isFetching, error } = useFetchGetProjectQuery('ecCode=00001');
 
// console.log(useFetchGetProjectQuery('ecCode=00001'))
//     const submitDataAsync = createAsyncThunk('data/submitData',async (data)=>{
//         const response = await submitData(data)
//         return response;
//     })

    const submitData =(data:any)=>{

    }

    function layoutHeader() {
        return (
            <View className=" items-center flex  flex-row item-center">
                <View className="flex-auto">
                    <TouchableOpacity
                    onPress={()=>{
                        dispatch(logOut())
                    }}>
                        <Icons
                            name='menu'
                            color='#000000'
                            size={25}
                        />
                    </TouchableOpacity>

                </View>
                <View className="flex-auto">
                    <Text className="text-black text-lg">Dashboard</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icons
                            name='bell-badge-outline'
                            color='#000000'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function layoutCardHeader() {
        return (
            <View className="border w-full h-auto mt-4 p-2 rounded-md">
                <View className="flex flex-row">
                    <View className="border rounded-md">
                        <Icons name="account" size={95} color="gray" />
                    </View>
                    <View className="flex-col w-auto ml-4">
                        <View className="flex-row ">
                            <Icons name="account-outline" size={20} color="black" />
                            <Text className=" ml-1 text-black ">John Doe</Text>
                        </View>
                        <View className="flex-row mt-1">
                            <Icons name="phone-outline" size={20} color="black" />
                            <Text className=" ml-2 text-black">(+63) 901-1234-123</Text>
                        </View>
                        <View className="flex-row mt-1">
                            <Icons name="email-outline" size={20} color="black" />
                            <Text className=" ml-2 text-black">johnDoe@gmail.com</Text>
                        </View>
                        <View className="flex-row mt-1">
                            <Icons name="office-building-marker-outline" size={20} color="black" />
                            <Text className=" ml-2 text-black">Fernandez St.</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    // function laoutbalance() {
    //     return (
    //         <View className="border w-auto h-20 mt-2 p-2 ml-4 mr-4 rounded-md">
    //             <View className="flex-row">
    //                 <Text className="text-black">Total Due Balance: </Text>
    //                 <Text></Text>
    //             </View>

    //             <View className="flex  mt-1 ">

    //                 <Text className="text-black justify-end text-right text-2xl">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
    //             </View>
    //         </View>
    //     )
    // }

    // function layoutPayNow() {
    //     return (
    //         <View className="mt-4">
    //             <TouchableOpacity className="text-white bg-[#0f4863] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 ml-4 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">
    //                 <Text className="text-center text-white">Pay Now</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    // function layoutPaymenHistory() {
    //     return (
    //         <View>
    //             <View className="items-center flex mt-6 ml-4 mr-4 mb-2 flex-row item-center">
    //                 <View className="flex-auto">
    //                     <Text className="text-black text-base">Payment History</Text>
    //                 </View>
    //                 <View className="">
    //                     <TouchableOpacity className="rounded-full">
    //                         <Icons name="filter-outline" size={24} color="black" />
    //                     </TouchableOpacity>

    //                 </View>
    //             </View>

    //             <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
    //                 <View className="flex-row items-center justify-between">
    //                     <Text className="text-black">Date: Janurary 10, 2023</Text>
    //                     <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
    //                 </View>

    //             </View>
    //             <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
    //                 <View className="flex-row items-center justify-between">
    //                     <Text className="text-black">Date: Janurary 10, 2023</Text>
    //                     <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
    //                 </View>
    //             </View>
    //             <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
    //                 <View className="flex-row items-center justify-between">
    //                     <Text className="text-black">Date: Janurary 10, 2023</Text>
    //                     <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
    //                 </View>
    //             </View>
    //         </View>

    //     )
    // }


    return (
        <SafeAreaView className="p-4">
            {layoutHeader()}
            {/* {layoutCardHeader()} */}
            {/* <View className="flex ">
                <View className="flex-row ">
                    <View className="flex-auto items-center justify-center">
                        <CircularProgress
                            size={50}
                            strokeWidth={3.5}
                            color={Colors.primary}
                            percentage={35 / 10}
                            textStyle={{ fontWeight: 'bold', color: "black", fontSize: 17 }}
                        />
                    </View>
                    <View className="flex-auto items-center justify-center">
                        <CircularProgress
                            size={50}
                            strokeWidth={3.5}
                            color={Colors.primary}
                            percentage={35 / 10}
                            textStyle={{ fontWeight: 'bold', color: "black", fontSize: 17 }}
                        />
                    </View>
                    <View className="flex-auto items-center justify-center">
                        <CircularProgress
                            size={50}
                            strokeWidth={3.5}
                            color={Colors.primary}
                            percentage={35 / 10}
                            textStyle={{ fontWeight: 'bold', color: "black", fontSize: 17 }}
                        />
                    </View>
                </View>
            </View> */}

        </SafeAreaView>
    )

}
export default Home;   