import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type PieChartProps = {
  size?: number;
  strokeWidth?: number;
  data: any[];
};

export type PieChartDataItem = {
  color: string;
  percent: number;
};


export type PieChartData = PieChartDataItem[];


export const PieChart = ({ size = 140, strokeWidth = 20, data = [] }: PieChartProps) => {

  const [progress, setProgress] = useState(0);
  const [datas, setData] = React.useState<PieChartData>();

  const viewBox = `0 0 ${size} ${size}`;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  let total: number=0
  let overall:number=0
  let remaining: any
  const angles: any[] = [];
  data.forEach((value:any)=>{return overall +=value.value})
  data.forEach((value:any)=>{

    
    // console.log(overall)
    // if(value.label ==='Red'){
     
    //   remaining = value.value / overall * 100;
    //   console.log(remaining,'rem')
    // }
    const percent = value.value / overall * 100;
  
    // console.log(percent,'pers')
    angles.push({percent:percent, color:value.color, label:value.label});
    // console.log(percent * 100)
    // total += percent * 100
    // console.log(total,'total')
  })

  console.log(angles)

  return (
    <View className="justify-center items-center flex-row">

      <View style={{ width: size, height: size }} >
        <Svg viewBox={viewBox}  width={size} height={size} fill='transparent' >
        {/* <Circle fill={"none"}
                stroke="#72C165"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${14}px`}
            /> */}
          {angles.map((item, index) => (
            <Circle
            
            key={`${item.color}-${index}`}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={item.color}
            strokeDashoffset={circumference * (1 - item.percent)}
            strokeDasharray={circumference}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          ))}
            <View className=" justify-center items-center mt-10">
            <Text className=" items-center text-center text-black text-2xl ">
                {`${total}%`}
            </Text>
            <Text className='text-xs dark:text-black text-gray'>Total Percentage</Text>
            </View>
        </Svg>
      </View>

      <View className="justify-center ml-4">
            <Text className="text-black font-semibold text-sm">Project Details</Text>
            <View className="flex-row items-center">
              <View className="bg-[#FB6363] h-3 w-3 rounded-full m-1" />
              <Text className="text-xs dark:text-white text-black">Remaining {`${Math.round(remaining)}%`}</Text>
            </View>
            <View className="flex-row items-center">
              <View className="bg-[#2D99FE] h-3 w-3 rounded-full m-1" />
              <Text className="text-xs dark:text-white text-black">On Going {`%`}</Text>
            </View>
            <View className="flex-row items-center">
              <View className="bg-[#72C165] h-3 w-3 rounded-full m-1" />
              <Text className="text-xs dark:text-white text-black">Overall {`${100 - total}%`}</Text>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: 'center',
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  rotate: {
    transform: [{ rotateZ: '-90deg' }],
  },
  buttonWrap: { marginTop: 20 },
});