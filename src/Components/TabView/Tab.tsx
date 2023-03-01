import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { View } from "react-native-animatable";

interface TabProps {
    title: string;
    isActive: boolean;
    isActiveText:boolean;
    onPress: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive,isActiveText, onPress }) => {
    const tabActive = isActive ? 'item-center bg-white justify-center rounded-full py-.5 px-4 text-black ' : 'tem-center justify-center rounded-full py-.5 px-4 text-white';
    const textColor = isActiveText ? 'text-black text-xs font-bold' : 'text-white text-xs'
    return (
        <View>
            <TouchableOpacity className={tabActive} onPress={onPress}>
                <Text className={textColor}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Tab;