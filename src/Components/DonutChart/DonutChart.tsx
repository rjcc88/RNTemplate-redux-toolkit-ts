import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { Svg, G, Path, Circle, Text as TextSvg } from 'react-native-svg';

interface Data {
    value: number;
    color: string;
}

interface DonutChartProps {
    data: Data[];
    radius: number;
    strokeWidth: number;
    renderChildren?: (total: number) => React.ReactNode;
    legendTitle?: string
    centerTotal?: boolean
    centerTextPercentage?: string
    centerFont?: number
    centerFontWeight?: boolean;
    centerText?:string;
    centerTextMargin?:string
}

const DonutChart = ({ data, radius, strokeWidth, renderChildren, legendTitle = 'Legend', centerTotal = true, centerText, centerTextMargin='16',
 centerTextPercentage = '%', centerFont = 20, centerFontWeight=true }: DonutChartProps) => {
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
        <View className='justify-center items-center flex-row'>
            <View style={{ alignItems: 'center' }}>
                <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
                    {data.map(({ value, color }, index) => {
                        const startAngle =
                            index === 0 ? 0 : calculateAngle(data.slice(0, index).reduce((sum, { value }: Data) => sum + value, 0));

                        return (
                            <G key={index}>
                                <Path d={createArc(value, startAngle)} fill={color} strokeLinecap="round" />
                            </G>
                        );
                    })}
                    <Circle cx={center.x} cy={center.y} r={radius - strokeWidth / 2} fill="#fff" />
                     <TextSvg x={center.x} y={center.y} textAnchor="middle" fontSize={centerFont} fontWeight={centerFontWeight ? "bold": "normal"}>
                            {centerTotal ? total.toString() + centerTextPercentage : null}
                        </TextSvg>
                        <View className={`justify-center items-center mt-${centerTextMargin}`}>
                            <Text className='text-center text-xs text-black p-2'>{centerText}</Text>
                        </View>
                   
                </Svg>
            </View>

            <View className="justify-center ml-4">
                <Text className="text-black font-semibold text-sm">{legendTitle}</Text>
                <>{renderChildren && renderChildren(total)}</>
            </View>
        </View>

    );
};

export default DonutChart;


//sample
// const data = [
//     { value: 20, color: '#F44336' },
//     { value: 30, color: '#9C27B0' },
//     { value: 20, color: '#2196F3' },
//     { value: 10, color: '#4CAF50' },
//   ];

//   const radius = 50;
//   const strokeWidth = 20;

// legend customizable
// const renderChildren = (total: number) => {
//     return data.map(({ value, color, label }, index) => {
//       const percentage = ((value / total) * 100).toFixed(2);
//       return (
//         <View key={index} className="flex-row items-center">
//           <View className={`bg-[${color}] h-3 w-3 rounded-full m-1`} />
//           <Text key={index} className="text-xs dark:text-white text-black">
//             {label} {percentage}%
//           </Text>
//         </View>
//       );
//     });
//   }

{/* <DonutChart 
                centerFontWeight={false} true/false
                data={data} radius={radius} 
                strokeWidth={strokeWidth} 
                legendTitle={'Project Details'} 
                centerFont={30} centerTotal={true} 
                centerTextPercentage={'%'} % or '' string
                renderChildren={renderChildren} /> */}