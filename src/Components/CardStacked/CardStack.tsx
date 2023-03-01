import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated, ViewStyle, Image, Text, TouchableOpacity, PanResponderInstance } from 'react-native';

type CardData = {
  image: string;
  title: string;
  description: string;
};

type CardStackProps = {
  data: CardData[];
  style?: ViewStyle;
};

const CardStack = ({ data, style }: CardStackProps) => {
  const [panResponder, setPanResponder] = useState<PanResponderInstance | null>(null);
  const [position, setPosition] = useState<Animated.ValueXY>(new Animated.ValueXY());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setPanResponder(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }]),
        onPanResponderRelease: (e, gesture) => {
          if (gesture.dx < 100) {
            Animated.spring(position, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: true,
            }).start();
          } else {
            Animated.timing(position, {
              toValue: { x: 500, y: gesture.dy },
              duration: 500,
              useNativeDriver: true,
            }).start(() => {
              setCurrentIndex(currentIndex + 1);
              setPosition(new Animated.ValueXY());
            });
          }
        },
      })
    );
  }, [currentIndex]);

  const cardData = data[currentIndex % data.length];

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[styles.card, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
        {...panResponder?.panHandlers}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: cardData.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{cardData.title}</Text>
          <Text style={styles.description}>{cardData.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: '60%',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
  backgroundColor: '#009688',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 4,
  },
  buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  },
  });
  
  export default CardStack;
