import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

const navbar=()=>   {
 
    return (
      
        <View className="bg-[#1b3b8f] h-24 flex flex-row items-center ">
           
             <View className="">
                <Image source={require('../../assets/logo10.png')} className="w-20 h-20 bg-white p-2 m-2 rounded-full"/>
            </View>
            <Text className="text-white  font-bold text-2xl text-center p-2">Trunetic Infotech Pvt Ltd</Text>
          
        </View>
      
    )
  }


export default navbar
