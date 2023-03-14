// import React, { useState } from 'react'
// import { PanResponder, Animated, GestureResponderEvent, PanResponderGestureState, View } from 'react-native';

// interface dataProp{
//   data:any[]
// }
// interface State {
//   cardsPan: Animated.ValueXY;
//   currentIndex: number;
//   cardsStackedAnim: Animated.Value
// }


// const CardStack = ({data}: dataProp) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const state: State = {
//     cardsPan: new Animated.ValueXY(),
//     cardsStackedAnim: new Animated.Value(0), // add this statement
//     currentIndex: 0,
//   };

//   const cardsPanResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onStartShouldSetPanResponderCapture: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponderCapture: () => true,
//     onPanResponderMove: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//       state.cardsPan.setValue({
//         x: gestureState.dx,
//         y: gestureState.dy,
//       });
//     },
//     onPanResponderTerminationRequest: () => false,
//     onPanResponderRelease: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//       // bring the translationX back to 0
//       Animated.timing(state.cardsPan, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true
//       }).start();
//       // will be used to interpolate values in each view
//       Animated.timing(state.cardsStackedAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true
//       }).start(() => {
//         // reset cardsStackedAnim's value to 0 when animation ends
//         state.cardsStackedAnim.setValue(0);
//         // increment card position when animation ends
//         setCurrentIndex(currentIndex + 1);
//       });
//     },
//   });

//   const colors = ['#5C6BC0', '#009688', '#F44336'];

//   return (
//     <View>
//      <View>
//   <Animated.View
//     style={{
//       width: 300, 
//       height: 150,
//       position: 'absolute',
//       backgroundColor: colors[(state.currentIndex + 2) % 3],
//       zIndex: 1,
//       transform: [{
//         translateY: state.cardsStackedAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [40, 20]
//         })
//       }, {
//         scale: state.cardsStackedAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0.8, 0.9]
//         })
//       }],
//       opacity: state.cardsStackedAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0.3, 0.6]
//       })
//     }}
//   />
//   <Animated.View
//     style={{
//       width: 300, 
//       height: 150,
//       position: 'absolute',
//       backgroundColor: colors[(state.currentIndex + 1) % 3],
//       zIndex: 2,
//       transform: [{
//         translateY: state.cardsStackedAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [20, 0]
//         })
//       }, {
//         scale: state.cardsStackedAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0.9, 1]
//         })
//       }],
//       opacity: state.cardsStackedAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0.6, 1]
//       })
//     }}
//   />
//   <Animated.View
//     {...cardsPanResponder.panHandlers}
//     style={{
//       width: 300, 
//       height: 150,
//       position: 'absolute',
//       backgroundColor: colors[state.currentIndex % 3],
//       zIndex: state.cardsStackedAnim.interpolate({
//         inputRange: [0, 0.5, 1],
//         outputRange: [3, 2, 0]
//       }),
//       transform: [
//         {translateX: state.cardsPan.x},
//         {
//           translateY: state.cardsStackedAnim.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 40]
//           })
//         }, 
//         {
//           scale: state.cardsStackedAnim.interpolate({
//             inputRange: [0, 1],
//             outputRange: [1, 0.8]
//           })
//         }
//       ],
//       opacity: state.cardsStackedAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: [1, 0.3]
//       })
//     }}
//   />
// </View>


//     </View>
//   )
// }

// export default CardStack


// import React, { Component } from 'react';
// import { View, Animated, PanResponder, GestureResponderEvent, PanResponderGestureState, PanResponderInstance } from 'react-native';

// type Card = {
//   id: number;
//   backgroundColor: string;
// };

// type Props = {
//   cards: Card[];
// };

// type State = {
//   currentIndex: number;
//   cardsPan: Animated.ValueXY;
//   cardsStackedAnim: Animated.Value;
// };

// const colors = [ 'red', 'green', 'blue' ];

// class SwipeCards extends Component<Props, State> {
//   private cardsPanResponder: PanResponderInstance;

//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       currentIndex: 0,
//       cardsPan: new Animated.ValueXY(),
//       cardsStackedAnim: new Animated.Value(0),
//     };

//     this.cardsPanResponder = PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onStartShouldSetPanResponderCapture: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,
//       onPanResponderMove: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//         this.state.cardsPan.setValue({
//           x: gestureState.dx,
//           y: gestureState.dy,
//         });
//       },
//       onPanResponderTerminationRequest: () => false,
//       onPanResponderRelease: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//         Animated.timing(this.state.cardsPan, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver:true
//         }).start();

//         Animated.timing(this.state.cardsStackedAnim, {
//           toValue: 1,
//           duration: 300,
//           useNativeDriver:true
//         }).start(() => {
//           this.state.cardsStackedAnim.setValue(0);

//           this.setState({
//             currentIndex: this.state.currentIndex + 1,
//           });
//         });
//       },
//     });
//   }

//   render() {
//     const { cards } = this.props;
//     const { currentIndex, cardsPan, cardsStackedAnim } = this.state;

//     const cardViews = cards.slice(currentIndex, currentIndex + 3).map((card, index) => {
//       const zIndex = cardsStackedAnim.interpolate({
//         inputRange: [ 0, 0.5, 1 ],
//         outputRange: [ 3 - index, 2 - index, 0 ],
//       });

//       const scale = cardsStackedAnim.interpolate({
//         inputRange: [ 0, 1 ],
//         outputRange: [ 1 - index * 0.1, 0.8 ],
//       });

//       const opacity = cardsStackedAnim.interpolate({
//         inputRange: [ 0, 1 ],
//         outputRange: [ 1 - index * 0.3, 0.3 ],
//       });

//       const bottom = cardsStackedAnim.interpolate({
//         inputRange: [ 0, 1 ],
//         outputRange: [ 40 - index * 20, 20 ],
//       });

//       return (
//         <Animated.View
//           key={card.id}
//           {...this.cardsPanResponder.panHandlers}
//           style={{
//             width: 300,
//             height: 150,
//             position: 'absolute',
//             backgroundColor: card.backgroundColor,
//             zIndex,
//             bottom,
//             opacity,
//             transform: [
//               { translateX: cardsPan.x },
//               { scale },
//             ],
//           }}
//         />
//       );
//     });

//     return (
//       <View>
//         {cardViews}
//       </View>
//     );
//   }
// }

// export default SwipeCards;



