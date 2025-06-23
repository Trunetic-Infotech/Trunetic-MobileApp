import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native'

const crm =()=> {
 
    return (
     <ScrollView>
                   <Text className="text-4xl font-bold m-2 p-1 text-center">CRM </Text>
                   <View className="w-full  my-4 rounded-t-3xl rounded-bl-3xl flex justify-center items-center">
                       <Image className="w-96 h-60 rounded-t-3xl rounded-bl-3xl self-center" source={require('../../../assets/app_dev.jpg')}/>
                   </View>
                   <View className="bg-blue-100 mx-4 my-2 rounded-2xl ">
                       <Text className="text-2xl font-bold mx-2 my-1">It’s about creating a personalized experience for customers by building long-term relationships.</Text>
                       <Text className="text-lg font-serif mx-2 my-1 p-2">At Trunetic Infotech Software Solutions CRM stands for Customer Relationship Management. It refers to both a strategy and a set of technologies that companies use to manage interactions with current and potential customers. The main goal of CRM is to improve business relationships, streamline processes, and increase profitability by better understanding customer needs, preferences, and behavior..</Text>
                   </View>
                 <View className="text-center font-bold my-2 bg-orange-100 rounded-2xl">
                   <Text className="text-2xl font-bold text-center m-2">Advantages Of CRM Software </Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">1. Improved Customer Relationships.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">2.  Increased Sales.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">3.  Better Customer Insights.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">4. Improved Efficiency & Productivity.</Text>
                 </View>
           
                 </ScrollView>
    )                                                
  }


export default crm
