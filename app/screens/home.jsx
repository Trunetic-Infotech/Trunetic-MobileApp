import { Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';

const services = [
  {
    id: "1",
    title: "Web Development",
    image: require("../../assets/layers.png"),
  },
  {
    id: '2',
    title: 'Mobile Development',
    image: require('../../assets/layers.png'),
  },
  {
    id: "3",
    title: "Cyber Defense",
    image: require("../../assets/cyber-defense.png"),
  },
  {
    id: '4',
    title: 'Cyber Defense',
    image: require('../../assets/cyber-defense.png'),
  },
];

const services2 = [
  {
    id: "1",
    title: "Web Development",
    image: require("../../assets/web_dev.jpg"),
    button: "Learn More",
  },
  {
    id: "2",
    title: "Mobile Development",
    image: require("../../assets/app_dev.jpg"),
    button: "Learn More",
  },
  {
    id: "3",
    title: "Cyber Defense",
    image: require("../../assets/erp_dev.jpg"),
    button: "Learn More",
  },
  {
    id: "4",
    title: "Cyber Defense",
    image: require("../../assets/internship.jpg"),
    button: "Learn More",
  },
];

const router = useRouter();

const home = () =>{
    const navigation = useNavigation();
  return(
  <View>
    <View className="w-full h-64 bg-[#1b3b8f] flex justify-around ">
      <View className="flex-row justify-around">
        <View className="p-2 my-2">
          <Text className="text-[#C47F39] font-bold text-2xl">Welcome To,</Text>
          <Text className="text-[#C47F39] font-bold text-2xl">Trunetic Infotech Pvt Ltd</Text>
        </View>
        <View className="">
          <Image source={require('../../assets/logo10.png')} className="w-20 h-20 bg-white p-2 mx-2  rounded-full" />
        </View>
      </View>
      <View className="flex-row justify-center items-center">
        <View className="flex-row items-center bg-white rounded-xl w-80">
          <EvilIcons size={40} name="search" className="p-2 my-1" />
          <TextInput placeholder='Search' className="m-1 font-bold text-2xl" />
        </View>
        <View className="bg-white w-16 h-16 rounded-xl justify-center items-center mx-4">
          <Ionicons name="filter" sie={40} />
        </View>
      </View>
    </View>
    <View className="flex flex-row justify-between">
      <Text className="font-bold mx-2 my-4 text-xl">Industries We Work For</Text>
       <TouchableOpacity onPress={() => navigation.navigate('navbar')}>
      <Text className="font-bold text-[#C47F39] mx-2 my-2">See all</Text>
    </TouchableOpacity>
    </View>
    <FlatList
      data={services}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      ItemSeparatorComponent={() => <View className="w-6" />}
      renderItem={({ item }) => (
        <View className="items-center gap-4">
          <View className="bg-[#EDE8E8] rounded-full w-24 h-24 justify-center items-center">
            <Image
              source={item.image}
              className="w-20 h-20"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center text-bold font-medium text-black">
            {item.title}
          </Text>
        </View>
      )}
    />
    <View className="bg-[#1b3b8f] w-[92%] h-48 flex-row justify-evenly items-center m-4 rounded-xl">
      <View className="my-4">
        <Text className="text-white font-bold text-2xl">TOP RATED</Text>
        <Text className="text-[#C47F39] font-bold text-2xl">WEB DEVELOPMENT</Text>
        <Text className="text-white font-bold text-2xl">COMPANY</Text>
      </View>
      <Image className="w-28 h-40" source={require('../../assets/coding.png')} />
    </View>
    <View className="flex flex-row justify-between">
      <Text className="font-bold mx-2 my-2 text-xl">Services</Text>
     <TouchableOpacity onPress={()=>router.push('/screens/industries')}>
       <Text  className="font-bold text-[#C47F39] mx-2 my-2">See all</Text>
     </TouchableOpacity>
    </View>
    <FlatList
      data={services2}
      horizontal
       pagingEnabled
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      ItemSeparatorComponent={() => <View className="w-6" />}
      renderItem={({ item }) => (
        <View className="items-center gap-2">

          <Image
            source={item.image}
            className=" w-40 h-28 justify-center items-center"
            resizeMode="contain"
          />

          <Text className="text-center text-bold font-medium text-black">
            {item.title}
          </Text>
        </View>
      )}
    />



  </View>
  )
}

export default home

