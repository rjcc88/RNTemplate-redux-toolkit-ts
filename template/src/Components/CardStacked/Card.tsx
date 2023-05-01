import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, GestureResponderEvent, PanResponderGestureState, PanResponder } from 'react-native';

type CardProps = {
  index: number;
  color: string;
  text: string;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
};

const Card = ({ index, color, text, onSwipeRight, onSwipeLeft }: CardProps) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }]),
      onPanResponderRelease: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        if (gestureState.dx > 100) {
          onSwipeRight();
        } else if (gestureState.dx < -100) {
          onSwipeLeft();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: color,
          zIndex: -index,
          transform: [{ translateX: pan.x }, { rotate: pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: ['-30deg', '0deg', '30deg'] }) }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Card;