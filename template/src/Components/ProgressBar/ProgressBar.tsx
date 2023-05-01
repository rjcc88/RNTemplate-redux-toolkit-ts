import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Rect } from 'react-native-svg';

interface ProgressBarProps {
  progressValue: number;
  width: number;
  height: number;
  color: string;
  percentageFontSize: number;
  percentageColor: string;
}

const ProgressBar = ({ progressValue, width, height, color, percentageFontSize, percentageColor }: ProgressBarProps) => {
  const progressBackgroundColor = 'lightgrey';
  const borderRadius = 5;
  const filledWidth = (width) * (progressValue / 100);
  return (
    <View className="flex-row items-center">
      <Svg width={width} height={height}>
      <Rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill={progressBackgroundColor}
          rx={borderRadius}
          ry={borderRadius}
        />
           <Rect
          x="0"
          y="0"
          width={width}
          height={height}
          fillOpacity="0"
          stroke={progressBackgroundColor}
          strokeWidth="1"
          rx={borderRadius}
          ry={borderRadius}
        />
        <Rect
          x="0"
          y="0"
          width={filledWidth}
          height={height}
          fill={color}
          rx={borderRadius}
          ry={borderRadius}
        />
     
       
      </Svg>
      <Text style={{ marginLeft: 5, fontSize: percentageFontSize, color: percentageColor }}>
        {progressValue}%
      </Text>
    </View>
  );
};

export default ProgressBar;

// sample

{/* <ProgressBar progressValue={50} width={300} height={10} color={'#FB6363'} percentageFontSize={12} percentageColor={'gray'} /> */}
