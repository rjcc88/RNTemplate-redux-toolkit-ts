import React, { useEffect, useState } from "react";
import {
  View,
  Text
} from "react-native"
import Svg, { Circle } from "react-native-svg";

interface PieProgressProps {
  size: number;
  strokeWidth: number;
  percentage: number
  textStyle: any;
  total: number;
  data: any[]
}

const PieProgress = ({ size, strokeWidth, percentage, textStyle, total, data }: PieProgressProps) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage])

  console.log(data)

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / total;

  return (
    <Svg width={size} height={size} viewBox={viewBox}>
      <Circle fill={"none"}
                stroke="#72C165"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
      {
        data.map((item, index) => (
          <Circle fill={"none"}
            key={index}
            stroke={item.color}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDashoffset={circumference * (1 - item.percent)}
            strokeDasharray={[dash, circumference - dash]}
            // strokeDasharray={[circumference]}
            strokeLinecap="round"
          />
        ))
      }

      {/* <View className=" justify-center items-center mt-3.5">
            <Text className=" items-center text-center justify-center"
             fill="black"
                fontSize="50px"
                x="50%"
                y="50%"
                style={textStyle}
                textAnchor="middle">
                {`${percentage}${percent}`}
            </Text>
            </View> */}

    </Svg>
  )
}



export default PieProgress;