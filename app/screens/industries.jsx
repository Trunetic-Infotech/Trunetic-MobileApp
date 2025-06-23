
import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'



const industries = () => {
  const Industry = [
    {
      id: '1',
      image: require('../../assets/indus_1.png'),
      name: 'Web Development'
    },
    {
      id: '2',
      image: require('../../assets/indus_2.png'),
      name: 'App Development'
    },
    {
      id: '3',
      image: require('../../assets/indus_3.png'),
      name: 'Cybersecurity'
    },
    {
      id: '4',
      image: require('../../assets/indus_4.png'),
      name: 'School'
    },
    {
      id: '5',
      image: require('../../assets/indus_5.png'),
      name: 'Organization'
    },
    {
      id: '6',
      image: require('../../assets/indus_6.png'),
      name: 'School'
    },
    {
      id: '7',
      image: require('../../assets/indus_7.png'),
      name: 'Real-Estate'
    },
    {
      id: '8',
      image: require('../../assets/indus_8.png'),
      name: 'Ecommerce'
    },
  ]

  return (
    <ScrollView>
      <View className="bg-[#1b3b8f] w-full h-40 flex-row items-center justify-center rounded-b-3xl">
        <Text className="text-white font-bold text-3xl">Industries We Work For</Text>
      </View>
      <View>
        <View className="flex-row items-center border border-gray-500 rounded-xl bg-[#1b3b8f] px-4 py-2 mx-4 my-10">
          <Feather name="search" size={20} color="white" className="text-white" />
          <TextInput placeholder='Search' placeholderTextColor="white" className="ml-4 text-white" />
        </View>

        <View className="items-center">
          <Text className="text-[#1b3b8f] text-2xl font-bold px-2">We Are Ready To Convert</Text>
          <Text className="text-[#1b3b8f] text-2xl font-bold px-2">Your Tech Imagination Into Reality</Text>
        </View>
        <View className="m-2">
          <FlatList
            data={Industry}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View className="w-1/2">
                <View className="p-3 m-4 bg-blue-300 items-center rounded-xl">
                  <Image className="w-16 h-16" source={item.image} />
                  <Text className="font-bold text-xl">{item.name}</Text>
                </View>
              </View>
            )} />
        </View>
      </View>
    </ScrollView>
  )
}


export default industries
