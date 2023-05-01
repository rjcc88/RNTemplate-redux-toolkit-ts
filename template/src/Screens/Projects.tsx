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
    ToastAndroid
} from "react-native"
import { AppRootStackParamList } from "@/Route/app/app-navigator";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<AppRootStackParamList,'Projects'>;

const Projects = ({ navigation: { navigate } }:Props) => {

    const sampleData = [
        {
            leaveType: "Project 1",
            leaveDesc: "Dec 20 - 30 2022",
            dateApplied: "Dec 19, 2022",
            status: "Approved"
        },
        {
            leaveType: "Project 2",
            leaveDesc: "Dec 20 - 30 2022",
            dateApplied: "Dec 19, 2022",
            status: "Approved"
        },
        {
            leaveType: "Project 3",
            leaveDesc: "Dec 20 - 30 2022",
            dateApplied: "Dec 19, 2022",
            status: "Approved"
        },
        {
            leaveType: "Project 4",
            leaveDesc: "Dec 20 - 30 2022",
            dateApplied: "Dec 19, 2022",
            status: "Approved"
        },
    ]

    function renderHeader(){
        return(
            <View className=" items-center flex  flex-row item-center">
            <View className="flex-auto">
                <Text className="text-black text-lg">Project List</Text>
            </View>
            <View>
                <TouchableOpacity>
                <Icons
                    name='filter-outline'
                    color='black'
                    size={24}
                />
                </TouchableOpacity>
            </View>

        </View>
        )
    }

    function renderItemsApproved(item:any, index:any) {
        //color 2ea7a2
                return (
                    // <View className="flex-row flex">
                       
                        <View className="mb-3.5 w-full h-24 mr-20 rounded-lg bg-white shadow-lg drop-shadow-lg ">
         
                                <TouchableOpacity
                                    className="m-1"
                                    onPress={() => {
        
                                    }}>
                                    <View className="p-2">
                                        <View className="flex-row">
                                            <Text className=" text-black font-semibold truncate">{item.leaveType}</Text>
        
                                            {/* <View className=" flex-auto bg-[#1a7faf] rounded-full p-0.5 mt-1">
                                                <Text className=" text-white text-center text-xs">{item.status}</Text>
                                            </View> */}
                                        </View>
                                        {/* <View className="flex-row items-center">
                                            <Text className="text-black mr-2 text-sm">Applied From: {item.leaveDesc}</Text>
                                        </View>
                                        <Text className="mr-2 mt-1.5 text-xs">{item.dateApplied}</Text> */}
                                    </View>
                                </TouchableOpacity>
                          
                      
                        </View>
                    // </View>
                )
            }

    function renderListApproved() {

        return (
                <View className="mt-4">
                    <FlatList
                        data={sampleData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => renderItemsApproved(item, index)}
                    // ListFooterComponent={footerListMore}
                    />
                </View>
        )
    }

    return(
        <SafeAreaView className="flex p-4">
            {renderHeader()}
            {renderListApproved()}
            {/* <Text className="text-center">Projects</Text> */}
        </SafeAreaView>
    )

}
    export default Projects;   