// import React from 'react';
// import { Svg, Rect } from 'react-native-svg';

// interface Props {
//   data: number[];
//   colors: string[];
// }

// const ProgressBar2: React.FC<Props> = ({ data, colors }) => {
//   const totalWidth = 300;
//   const numDataPoints = data.length;
//   const dataPointWidth = totalWidth / numDataPoints;
//   let currentPosition = 0;

//   return (
//     <Svg width={totalWidth} height={20}>
//       {data.map((value, index) => {
//         const rectWidth = value * dataPointWidth;
//         const rectX = currentPosition;
//         currentPosition += rectWidth;

//         return (
//           <Rect
//             key={index}
//             x={rectX}
//             y={0}
//             width={rectWidth}
//             height={20}
//             fill={colors[index]}
//           />
//         );
//       })}
//     </Svg>
//   );
// };

// export default ProgressBar2;

// import React from 'react';
// import { Svg, Circle } from 'react-native-svg';

// interface Props {
//   data: number[];
//   colors: string[];
//   strokeWidth: number;
//   size: number;
// }

// const CircularProgressBar2: React.FC<Props> = ({
//   data,
//   colors,
//   strokeWidth,
//   size
// }) => {
//   const viewBox = `0 0 ${size} ${size}`;
//   const radius = (size - strokeWidth) / 2;
//   const circumference = radius * Math.PI * 2;
//   const totalPercentage = data.reduce((acc, value) => acc + value, 0);

//   let offset = 0;
  

//   return (
//     <Svg width={size} height={size} viewBox={viewBox}>
//       {data.map((value, index) => {
//         const percentage = (value * totalPercentage) / 100;
//         const color = colors[index];
//         const strokeDasharray = `${percentage} ${100 - percentage}`;
//         const strokeDashoffset = offset * size;
//         const strokeWidthOffset = strokeWidth / 2;


//         offset -= (percentage / 100) * circumference;
 
//         return (
//           <Circle
//             key={index}
//             cx={size /2}
//             cy={size /2}
//             r={radius}
//             stroke={color}
//             strokeWidth={`${strokeWidth}px`}
//             strokeDasharray={strokeDasharray}
//             strokeDashoffset={strokeDashoffset}
//             fill="none"
//             strokeLinecap="round"
//             transform={`rotate(-90 ${size / 2} ${size / 2})`}
//           />
//         );
//       })}
//     </Svg>
//   );
// };

// export default CircularProgressBar2;


// import React from 'react';
// import { Svg, Circle } from 'react-native-svg';

// interface Props {
//   data: number[];
//   colors: string[];
//   radius: number;
// }

// const ProgressBar: React.FC<Props> = ({ data, colors, radius }) => {
//   const circumference = 2 * Math.PI * radius;
//   const totalValue = data.reduce((acc, val) => acc + val, 0);
//   let currentPosition = 0;

//   return (
//     <Svg width={2 * radius} height={2 * radius}>
//       {data.map((value, index) => {
//         const progress = value / totalValue;
//         const arcLength = progress * circumference;
//         const arcEndAngle = (currentPosition + arcLength) / circumference * 360;
//         const arcStartAngle = currentPosition / circumference * 360;
//         currentPosition += arcLength;

//         return (
//           <Circle
//             key={index}
//             cx={radius}
//             cy={radius}
//             r={radius}
//             fill="none"
//             stroke={colors[index]}
//             strokeWidth={radius}
//             strokeDasharray={`${arcLength},${circumference}`}
//             strokeLinecap="round"
//             transform={`rotate(-90 ${radius} ${radius})`}
//             strokeDashoffset={-circumference / 4}
//             strokeLinejoin="round"
//             d={`M ${radius} ${radius} 
//                 L ${radius} 0 
//                 A ${radius} ${radius} 0 ${arcEndAngle - arcStartAngle > 180 ? 1 : 0} 1 ${Math.cos(arcEndAngle * Math.PI / 180) * radius + radius} ${Math.sin(arcEndAngle * Math.PI / 180) * radius + radius} 
//                 Z`}
//           />
//         );
//       })}
//     </Svg>
//   );
// };

// export default ProgressBar;


// import React from 'react';
// import { Svg, Circle } from 'react-native-svg';

// interface Props {
//   data: number[];
//   colors: string[];
//   strokeWidth?: number;
//   radius?: number;
// }

// const ProgressBar2: React.FC<Props> = ({ data, colors, strokeWidth = 10, radius = 50 }) => {
//   const circumference = 2 * Math.PI * radius;
//   const totalValue = data.reduce((acc, value) => acc + value, 0);
//   const adjustedData = data.map((value) => value / totalValue * circumference);
//   const numDataPoints = adjustedData.length;
//   const dataPointWidth = circumference / numDataPoints;
//   let currentPosition = 0;

//   return (
//     <Svg width={2 * radius} height={2 * radius}>
//       {adjustedData.map((value, index) => {
//         const dashArray = [value, circumference - value];
//         const dashOffset = currentPosition;
//         currentPosition += value;

//         return (
//           <Circle
//             key={index}
//             cx={radius}
//             cy={radius}
//             r={radius - strokeWidth / 2}
//             fill="transparent"
//             strokeWidth={strokeWidth}
//             strokeDasharray={dashArray.join(',')}
//             strokeDashoffset={dashOffset}
//             stroke={colors[index % colors.length]}
//             // transform={`rotate(90`}
//           />
//         );
//       })}
//     </Svg>
//   );
// };

// export default ProgressBar2;


// import React from 'react';
// import { Svg, Circle } from 'react-native-svg';

// interface Props {
//   data: number[];
//   colors: string[];
//   strokeWidth?: number;
//   radius?: number;
// }

// const ProgressBar2: React.FC<Props> = ({ data, colors, strokeWidth = 10, radius = 50 }) => {
//   const circumference = 2 * Math.PI * radius;
//   const totalValue = data.reduce((acc, value) => acc + value, 0);
//   const adjustedData = data.map((value) => value / totalValue).slice(0, 2); // Adjusted to only use the first 2 data points
//   const numDataPoints = adjustedData.length;
//   const dataPointWidth = circumference / numDataPoints;
//   let currentPosition = 0;

//   return (
//     <Svg width={2 * radius} height={2 * radius}>
//       {adjustedData.map((value, index) => {
//         const dashArray = [value * circumference, (1 - value) * circumference];
//         const dashOffset = currentPosition + (-0.25 * circumference);

//         currentPosition += value * circumference;

//         return (
//           <Circle
//             key={index}
//             cx={radius}
//             cy={radius}
//             r={radius - strokeWidth / 2}
//             fill="transparent"
//             strokeWidth={strokeWidth}
//             strokeDasharray={dashArray.join(',')}
//             strokeDashoffset={dashOffset}
//             stroke={colors[index % colors.length]}
//           />
//         );
//       })}
//     </Svg>
//   );
// };

// export default ProgressBar2;


// DonutChart.tsx
import React from 'react';
import { View } from 'react-native';
import { Svg, G, Path, Circle, Text } from 'react-native-svg';

interface Data {
  value: number;
  color: string;
}

interface DonutChartProps {
  data: Data[];
  radius: number;
  strokeWidth: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, radius, strokeWidth }) => {
  const total: number = data.reduce((sum: number, { value }: Data) => sum + value, 0);

  const center = {
    x: radius + strokeWidth / 2,
    y: radius + strokeWidth / 2,
  };

  const calculateAngle = (value: number): number => (value / total) * Math.PI * 2;

  const createArc = (value: number, startAngle: number): string => {
    const angle = calculateAngle(value);
    const endAngle = startAngle + angle;
    const x1 = center.x + radius * Math.sin(startAngle);
    const y1 = center.y - radius * Math.cos(startAngle);
    const x2 = center.x + radius * Math.sin(endAngle);
    const y2 = center.y - radius * Math.cos(endAngle);
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${center.x} ${center.y} Z`;
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        {data.map(({ value, color }, index) => {
          const startAngle =
            index === 0 ? 0 : calculateAngle(data.slice(0, index).reduce((sum, { value }: Data) => sum + value, 0));
          return (
            <G key={index}>
              <Path d={createArc(value, startAngle)} fill={color} />
            </G>
          );
        })}
        <Circle cx={center.x} cy={center.y} r={radius - strokeWidth / 2} fill="#fff"  />
        <Text x={center.x} y={center.y} textAnchor="middle" fontSize={20} fontWeight="bold">
          {total.toString()}
        </Text>
      </Svg>
    </View>
  );
};

export default DonutChart;

























