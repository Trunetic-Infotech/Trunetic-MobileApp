import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useRef, useEffect, useState } from "react";
import { useRouter } from 'expo-router';
import React from "react";
import { Image } from "react-native";
import Icon1 from "../../assets/images/react1.png";
import Icon2 from "../../assets/images/html.png";
import Icon3 from "../../assets/images/css.png";
import Icon4 from "../../assets/images/javascript.png";
import expertteam from "../../assets/images/expertteam.png";
import ontime from "../../assets/images/ontime.png";
import pricing from "../../assets/images/pricing.png";
import { SafeAreaView } from "react-native-web";

const about = () => {
  const experiences = [
    { id: 1, icon: ontime, label: "On Time" },
    { id: 2, icon: expertteam, label: "Expert Team" },
    { id: 3, icon: pricing, label: "Best Pricing" },
  ];

  const techStack = [
    { id: 1, icon: Icon1, label: "React" },
    { id: 2, icon: Icon2, label: "Html" },
    { id: 3, icon: Icon3, label: "Css" },
    { id: 4, icon: Icon4, label: "Javascript" },
    { id: 5, icon: Icon1, label: "React" },
    { id: 6, icon: Icon2, label: "Html" },
    { id: 7, icon: Icon3, label: "Css" },
    { id: 8, icon: Icon4, label: "Javascript" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % techStack.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);


   const router = useRouter();

  return (
    <View className="flex-1 bg-white px-4 py-2 gap-4">
      {/* Search Box */}
      <View className="items-center mb-6">
        <TextInput
          placeholder="search...."
          className="border-2 border-black placeholder:text-white text-white w-full rounded-2xl mt-[5%] bg-[#1B3B8F] px-4 py-2"
        />
      </View>

      {/* Intro Row */}
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-1 pr-4 gap-1">
          <Text className="font-bold text-2xl">We're Awesome.</Text>
          <Text className="font-bold text-xl">Digital Agency That Helps,</Text>
          <Text className="font-bold text-lg">You to Go Ahead</Text>
          <TouchableOpacity className="mt-4 bg-[#1B3B8F] px-4 py-3 rounded-xl w-[60%]">
            <Text className="text-white text-center font-bold">Contact Us</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../assets/images/career2.jpg")}
          className="w-40 h-40 rounded-xl"
          resizeMode="cover"
        />
      </View>

      <View className="bg-[#1B3B8F] rounded-xl p-4 mb-4">
        <Text className="text-white font-bold text-xl mb-4">
          Our Technologies
        </Text>

        <FlatList
          ref={flatListRef}
          data={techStack}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 1 }}
          renderItem={({ item }) => (
            <View className="items-center bg-white w-24 h-24 rounded-xl justify-center mx-1">
              <Image
                source={item.icon}
                className="w-10 h-10"
                resizeMode="contain"
              />
              <Text className="text-md font-bold mt-1 text-black text-center">
                {item.label}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Experiance Section 2 */}

      <Text className="text-2xl mb-1 font-bold">We Have The Experience</Text>

      <View className="bg-[#1B3B8F] rounded-xl p-4  items-end h-[25%] justify-center">
         <TouchableOpacity onPress={() => router.push('/components/experiance')}>
          <Text className="text-orange-500 text-center text-lg font-bold mb-2 mr-2">
            See All
          </Text>
        </TouchableOpacity>
        <View className="flex-row flex-wrap justify-between gap-5">
          {experiences.map((item) => (
            <View
              key={item.id}
              className="items-center bg-white w-[30%] h-32 rounded-xl justify-center"
            >
              <Image
                source={item.icon}
                className="w-10 h-10"
                resizeMode="contain"
              />
              <Text className="text-lg font-bold mt-1 text-black ">
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default about;
