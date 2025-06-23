import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native'

const erp=()=> {
 
    return (
      <ScrollView>
                   <Text className="text-4xl font-bold m-2 p-1 text-center">Enterprise Resource Planning </Text>
                   <View className="w-full  my-4 rounded-t-3xl rounded-bl-3xl flex justify-center items-center">
                       <Image className="w-96 h-60 rounded-t-3xl rounded-bl-3xl self-center" source={require('../../../assets/app_dev.jpg')}/>
                   </View>
                   <View className="bg-blue-100 mx-4 my-2 rounded-2xl ">
                       <Text className="text-2xl font-bold mx-2 my-1">ERP systems consolidate various functions into a single system, ensuring that data is shared across departments.</Text>
                       <Text className="text-lg font-serif mx-2 my-1 p-2">At Trunetic Infotech Software Solutions ERP stands for Enterprise Resource Planning, which refers to a type of software used by organizations to manage and integrate the important parts of their businesses. An ERP system helps streamline and automate business processes, providing a unified view of data and operations across different departments.</Text>
                   </View>
                 <View className="text-center font-bold my-2 bg-orange-100 rounded-2xl">
                   <Text className="text-2xl font-bold text-center m-2">Advantages Of ERP Development </Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">1. Improved Efficiency and Productivity.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">2. Real-Time Data and Decision-Making.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">3. Cost Reduction and Control.</Text>
                   <Text className="text-lg font-serif text-blue-900 mx-2 p-1">5. Accurate and Consistent Reporting.</Text>
                 </View>
           
                 </ScrollView>
    )
  }

export default erp
