import React, { useEffect, useState } from "react";
import {
    View,
    Text
} from "react-native"
import Svg, { Circle } from "react-native-svg";

const CircularProgress = ({ size, strokeWidth, percentage, color, textStyle }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage])

    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (progress * circumference) / 100;

    return (
        <Svg width={size} height={size} viewBox={viewBox}>
            <Circle fill={"none"}
                stroke="#ccc"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <Circle fill={"none"}
            
                stroke={color}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                strokeDasharray={[dash, circumference - dash]}
                strokeLinecap="round"
                
                style={{ transition: "all 0.5s" }}
            />
            <View className=" justify-center items-center mt-3.5">
            <Text className=" items-center text-center"
             fill="black"
                fontSize="50px"
                x="50%"
                y="50%"
                style={textStyle}
                textAnchor="middle">
                {`${percentage}`}
            </Text>
            </View>
           
        </Svg>
    )
}



export default CircularProgress;