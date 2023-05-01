// import React, { useEffect, useState } from "react";
// import {
//     View,
//     Text
// } from "react-native"
// import Svg, { Circle } from "react-native-svg";

// const CircularProgress = ({ size, strokeWidth, percentage, color, textStyle, total, percent }) => {
//     const [progress, setProgress] = useState(0);
//     useEffect(() => {
//         setProgress(percentage);
//     }, [percentage])

//     const viewBox = `0 0 ${size} ${size}`;
//     const radius = (size - strokeWidth) / 2;
//     const circumference = radius * Math.PI * 2;
//     const dash = (progress * circumference) / total;

//     return (
//         <Svg width={size} height={size} viewBox={viewBox}>
//             <Circle fill={"none"}
//                 stroke="#ccc"
//                 cx={size / 2}
//                 cy={size / 2}
//                 r={radius}
//                 strokeWidth={`${strokeWidth}px`}
//             />
//             <Circle fill={"none"}
//                 stroke={color}
//                 cx={size / 2}
//                 cy={size / 2}
//                 r={radius}
//                 strokeWidth={`${strokeWidth}px`}
//                 transform={`rotate(-90 ${size / 2} ${size / 2})`}
//                 strokeDasharray={[dash, circumference - dash]}
//                 strokeLinecap="round"
//                 style={{ transition: "all 0.5s" }}
//             />
//             <View className=" justify-center items-center mt-3.5">
//             <Text className=" items-center text-center justify-center"
//              fill="black"
//                 fontSize="50px"
//                 x="50%"
//                 y="50%"
//                 style={textStyle}
//                 textAnchor="middle">
//                 {`${percentage}${percent}`}
//             </Text>
//             </View>

//         </Svg>
//     )
// }



// export default CircularProgress;

import React, { useEffect, useState } from "react";
import {
    View, ViewStyle
} from "react-native"
import Svg, { Circle, Text } from "react-native-svg";

interface CircularProgressProps {
    size: number;
    strokeWidth: number;
    percentage: number;
    color: string;
    textStyle?: ViewStyle;
    total?: number;
    percent?: string;
    centerFontColor?:string;
    centerFontSize?:number;
}

const CircularProgress = ({
    size,
    strokeWidth,
    percentage,
    color,
    textStyle,
    total = 100,
    percent = "%",
    centerFontColor='black',
    centerFontSize=14
}: CircularProgressProps) => {
    const [progress, setProgress] = useState<number>(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage])

    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (progress * circumference) / total;

    const center = {
        x: radius + strokeWidth / 2,
        y: radius + strokeWidth / 2,
    };


    return (
        <View className="items-center">
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
            // style={{ transition: "all 0.5s" }}
            />
            <Text
                fill="none"
                stroke={centerFontColor}
                fontSize={centerFontSize}
                x={center.x}
                y={center.y}
                textAnchor="middle">
                {`${percentage}${percent}`}
            </Text>
        </Svg>
        </View>
       
    )
}

export default CircularProgress;


// sample

{/* <CircularProgress
size={50}
strokeWidth={3.5}
color={'#1677FF'}
percentage={8}
total={12}
percent={''}
centerFontSize={14} number
centerFontColor={'white'} string
/> */}