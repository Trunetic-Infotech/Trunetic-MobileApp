import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'

const projects = () => {

    const proj=[
        {
            id:'1',
            image: require('../../assets/software.jpg'),
            name:'Software Development'
        },
        {
            id:'2',
            image: require('../../assets/software.jpg'),
            name:'App Development'
        },
        {
            id:'3',
            image: require('../../assets/web.jpg'),
            name:'Web Development'
        },
        {
            id:'4',
            image: require('../../assets/school.jpg'),
            name:'School Management'
        },
        {
            id:'5',
            image: require('../../assets/hospital.jpg'),
            name:'Hospital Management'
        },
        {
            id:'6',
            image: require('../../assets/hotel.jpg'),
            name:'Hotel Management'
        },
        {
            id:'7',
            image: require('../../assets/healthy.png'),
            name:'Healthy Food'
        },
        {
            id:'8',
            image: require('../../assets/ecommerce.jpg'),
            name:'Ecommerce'
        },
        {
            id:'9',
            image: require('../../assets/shopify.jpeg'),
            name:'Shopify'
        }
    ]
    return (
        <ScrollView className="mx-2 bg-[#1b3b8f] ">
            <Text className="text-white text-4xl font-bold m-2 p-2">Our Completed Projects</Text>
            <Text className="font-serif text-lg text-gray-200 m-2 p-2">At Trunetic Infotech Pvt Ltd, we take pride in delivering high-quality solutions that meet client needs and exceed expectations. Here's a look at some of our recently completed projects:</Text>
            
            <FlatList
            data={proj}
            keyExtractor={(item)=>item.id}
            numColumns={2}
            renderItem={({item})=>(
               <View className="w-1/2">
                 <View className=" bg-gray-200 rounded-ss-3xl m-4 p-3 items-center">
                    <Image className="w-40 h-20"source={item.image}/>
                    <Text className="text-xl font-bold m-2">{item.name}</Text>
                    </View>
                </View>

            )}
            />
        </ScrollView>
    )
}


export default projects
