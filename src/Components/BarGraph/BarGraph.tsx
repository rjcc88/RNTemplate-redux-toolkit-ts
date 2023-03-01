import React from 'react';
import { View } from 'react-native-animatable';
import { Svg, Rect, Line, Text } from 'react-native-svg';

interface BarGraphProps {
  data: number[];
  width: number;
  height: number;
  barWidth: number;
  barMargin: number;
  colors?: string[];
  lineValues?: number[];
  lineColor?: string;
}
const BarGraph: React.FC<BarGraphProps> = ({
  data,
  width,
  height,
  barWidth,
  barMargin,
  colors = [],
  lineValues = [],
  lineColor = 'grey',
}) => {
  // Calculate the maximum value of the data
  const maxDataValue = Math.max(...data);

  // Calculate the height of each bar based on the maximum value and the height of the graph
  const barHeight = height / maxDataValue;

  // Calculate the x position of each bar based on the width of the graph and the number of bars
  const barX = (index: number) => (width / data.length) * index;

  // Calculate the default colors for the bars if colors are not provided
  const defaultColors = data.map(() => 'steelblue');
  const barColors = colors.length > 0 ? colors : defaultColors;

  // Render the bars
  const renderBars = () =>
    data.map((value, index) => (
      <Rect
        key={index}
        x={barX(index) + barMargin}
        y={height - value * barHeight}
        width={barWidth}
        height={value * barHeight}
        fill={barColors[index]}
      />
    ));

  // Render the line indicators
  const renderLineIndicators = () =>
    lineValues.map((value, index) => (
      <React.Fragment key={index}>
        <Line
          x1={0}
          y1={height - value * barHeight}
          x2={width}
          y2={height - value * barHeight}
          stroke={lineColor}
          strokeWidth={1}
          strokeDasharray={[4, 4]}
        />
        <Text
          x={0}
          y={height - value * barHeight - 10}
          fontSize={10}
          fill={lineColor}
        >
          {value}%
        </Text>
      </React.Fragment>
    ));

  return (
    <View className='border-r border-b'>
      <Svg width={width} height={height} >
        {renderLineIndicators()}
        {renderBars()}

      </Svg>
    </View>

  );
};

export default BarGraph;


//sample
// const data = [20, 30, 40];
// const width = 150;
// const height = 150;
// const barWidth = 25;
// const barMargin = 20;
// const colors = ['steelblue', 'green', 'orange', 'red', 'purple'];
// const lineValues = [30, 20, 40, 10];
// const lineColor = 'grey';

{/* <BarGraph
data={data}
width={width}
height={height}
barWidth={barWidth}
barMargin={barMargin}
colors={colors}
lineValues={lineValues}
lineColor={lineColor}
/> */}