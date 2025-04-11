import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '../../assets/images';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackground source={images.highlight} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={images.home} style={{ width: 20, height: 20, tintColor: '#151312' }} />
              <Text style={{ fontSize: 12, color: '#151312' }}>Home</Text>
            </ImageBackground>
          )
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          title: 'Service',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
