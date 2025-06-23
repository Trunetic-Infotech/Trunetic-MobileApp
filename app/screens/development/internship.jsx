import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { ScrollView } from 'react-native'

const internship =()=> {
 
    return (
      <ScrollView>
                    <Text className="text-4xl font-bold m-2 p-1 text-center">Internship</Text>
                    <View className="w-full  my-4 rounded-t-3xl rounded-bl-3xl flex justify-center items-center">
                        <Image className="w-96 h-60 rounded-t-3xl rounded-bl-3xl self-center" source={require('../../../assets/internship.jpg')}/>
                    </View>
                    <View className="bg-blue-100 mx-4 my-2 rounded-2xl ">
                        <Text className="text-2xl font-bold mx-2 my-1">Internship Services</Text>
                        <Text className="text-lg font-serif mx-2 my-1 p-2">At Trunetic Infotech Software Solutions, we believe in the power of technology to drive growth and success. We stay updated with trends in app development and digital marketing, investing in tools to deliver great results. We understand that each business is unique—so we tailor each project to your specific goals and vision.</Text>
                    </View>
                  <View className="text-center font-bold my-2 bg-orange-100 rounded-2xl">
                    <Text className="text-2xl font-bold text-center m-2">All Types Of Internship Available </Text>
                    <Text className="text-lg font-serif text-blue-900 mx-2 p-1">Java Full Stack Developer.</Text>
                    <Text className="text-lg font-serif text-blue-900 mx-2 p-1">Web Development.</Text>
                    <Text className="text-lg font-serif text-blue-900 mx-2 p-1">Software Development.</Text>
                    <Text className="text-lg font-serif text-blue-900 mx-2 p-1">App Development.</Text>
                      <Text className="text-lg font-serif text-blue-900 mx-2 p-1">Cyber Security.</Text>
                  </View>
            
                  </ScrollView>
    )
  }


export default internship
