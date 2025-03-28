import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const image1 = require('@/assets/images/car1.jpeg')

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={image1}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.title} >Carvana</Text>
      <Link href="/explore" style={{ marginHorizontal: 'auto' }} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Explore
          </Text>
        </Pressable>
      </Link> 
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
    padding: 4, 
  },

  link: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4, 
  },

  button: {
    height: 60,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4, 
  }

})