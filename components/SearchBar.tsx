import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-primary px-4' style={{ borderRadius: 20 }}>
      <Image source={icons.search} className="size-5" resizeMode='contain' tintColor={"#d34343"}/>
      
      <TextInput 
        onPress={() => {

        }}
        placeholder='Search'
        value=''
        onChangeText={() => {

        }}
        placeholderTextColor={'#A8B5DB'}
        className='flex-1 ml-2 text-white'
      /> 
    
    </View>
  )
}

export default SearchBar