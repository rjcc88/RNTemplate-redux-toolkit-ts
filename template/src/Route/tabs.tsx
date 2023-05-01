import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home,Projects, Map } from '@/Screens'

import { Colors } from '@/assets';

type RootStackParamList ={
  Home: undefined,
  Projects: undefined,
  Map: undefined
}

type TabsScreen = {
  route: keyof RootStackParamList,
  component: any
  label:any,
  icon:any,
  iconFocus:any
}

const TabArr:TabsScreen[] = [
  { label: 'Home', icon:'home-outline', iconFocus:'home-circle-outline', route:'Home' , component: Home},
  {label: 'Projects', icon:'folder-outline',iconFocus:'folder-open-outline', route: 'Projects', component: Projects},
  {label: 'Map', icon:'map-outline',iconFocus:'map-search', route: 'Map', component: Map},
];

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current?.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      // textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      // textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 1}]}>
      <View>
        <Animatable.View
          ref={viewRef}
         
          style={[StyleSheet.absoluteFillObject, { backgroundColor: Colors.primary,opacity:0.3, borderRadius: 16 }]} />
        <View  style={styles.btn}>
          <Icon name={focused ? item.iconFocus : item.icon} color={focused ? 'black':'gray'} size={24} />
          <Animatable.View
            ref={textViewRef}>
            <Text style={{
              color: focused ? 'black' : 'gray', paddingHorizontal: 8, fontSize: 12
            }}>{item.label}</Text>
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >

      {TabArr.map((item, index) => 
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarLabel:item.label,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
          
        
      )}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.64)',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 100,
  }
})