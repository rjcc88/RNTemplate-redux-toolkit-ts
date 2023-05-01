import React, { useState, useMemo } from "react";
import { View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tab from "./Tab";

interface TabViewProps {
    tabs: {
        title: string;
        content: React.ReactNode;
        loading: boolean
    }[];
}

const TabView: React.FC<TabViewProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isLoading, setIsloading] = useState<boolean>(false)
    const handleTabPress = (index: number) => {
        // setIsloading(true)
        setActiveTab(index)
    };

    const activeContent = useMemo(() => {
        return (tabs[activeTab].content);
    }, [activeTab, tabs])

    // const handleContentLoad = ()=>{
    //     setIsloading(false);
    // }

    return (
        <View className="p-2 ">
            <View className='bg-[#5484FF] rounded-full p-1.5 flex-row justify-between mb-4'>
                {tabs.map((tab, index) => (
                    <Tab
                        isActiveText={index === activeTab}
                        key={index}
                        title={tab.title}
                        isActive={index === activeTab}
                        onPress={() => handleTabPress(index)}
                    />
                ))}
            </View>
            <SafeAreaView>
                {
                    activeContent
                }
                {/* {tabs[activeTab].content} */}
                {/* 
                {
                    isLoading ?
                    (
                      <ActivityIndicator/>
                    ) :
                    (
                        <>{activeContent && React.cloneElement(activeContent as React.ReactElement, {onLoad: handleContentLoad})}</>
                    )
                } */}
            </SafeAreaView>
        </View>
    )
}

export default TabView;