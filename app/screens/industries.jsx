import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Industries = () => {
  const Industry = [
    {
      id: "1",
      image: require("../../assets/indus_1.png"),
      name: "Web Development",
    },
    {
      id: "2",
      image: require("../../assets/indus_2.png"),
      name: "App Development",
    },
    {
      id: "3",
      image: require("../../assets/indus_3.png"),
      name: "Cybersecurity",
    },
    { id: "4", image: require("../../assets/indus_4.png"), name: "School" },
    {
      id: "5",
      image: require("../../assets/indus_5.png"),
      name: "Organization",
    },
    { id: "6", image: require("../../assets/indus_6.png"), name: "School" },
    {
      id: "7",
      image: require("../../assets/indus_7.png"),
      name: "Real-Estate",
    },
    { id: "8", image: require("../../assets/indus_8.png"), name: "Ecommerce" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = Industry.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
      <View className="bg-[#1b3b8f] w-full h-40 flex-row items-center justify-center rounded-b-3xl">
        <Text className="text-white font-bold text-3xl text-center px-4">
          Industries We Work For
        </Text>
      </View>

      <View>
        {/* Search Bar */}
        <View className="flex-row items-center border border-gray-500 rounded-xl bg-[#1b3b8f] px-4 py-2 mx-4 my-10">
          <Feather name="search" size={20} color="white" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="white"
            className="ml-4 text-white flex-1"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Intro Text */}
        <View className="items-center">
          <Text className="text-[#1b3b8f] text-2xl font-bold px-2 text-center">
            We Are Ready To Convert
          </Text>
          <Text className="text-[#1b3b8f] text-2xl font-bold px-2 text-center">
            Your Tech Imagination Into Reality
          </Text>
        </View>

        {/* Grid of Industries */}
        <View className="m-2">
          <FlatList
            data={filteredIndustries}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListEmptyComponent={
              <Text className="text-center text-gray-500 mt-6">
                No industries found
              </Text>
            }
            renderItem={({ item }) => (
              <View className="w-1/2">
                <View className="p-3 m-4 bg-blue-300 items-center rounded-xl">
                  <Image className="w-16 h-16" source={item.image} />
                  <Text className="font-bold text-xl text-center">
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Industries;
