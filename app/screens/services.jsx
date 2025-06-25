import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

// Data array for services
const serviceData = [
  {
    title: "Software Development",
    image: require("../../assets/software development.png"),
  },
  {
    title: "App Development",
    image: require("../../assets/App Development.png"),
  },
  {
    title: "Web Development",
    image: require("../../assets/webdevelopment.png"),
  },
  {
    title: "CRM",
    image: require("../../assets/CRM.png"),
  },
  {
    title: "ERP",
    image: require("../../assets/ERP.png"),
  },
  {
    title: "Internship",
    image: require("../../assets/INTERNSHIP.png"),
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the services based on search query
  const filteredServices = serviceData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
      <View className="w-full min-h-screen bg-custom-gradient py-[20px] px-[20px]">
        <Text
          className="text-center text-[32px] text-[white] font-bold mb-[30px]"
          style={{
            textShadowColor: "#000",
            textShadowOffset: { width: 4, height: 8 },
            textShadowRadius: 15,
          }}
        >
          SERVICES!
        </Text>

        <View className="w-full min-h-screen bg-[white] rounded-t-[50px] py-[30px] px-[20px]">
          {/* Search Input */}
          <View className="flex-row w-full h-[50px] items-center px-[20px] rounded-[80px] bg-[#1b3b8f] mb-[20px]">
            <Feather name="search" size={20} color="#fff" />
            <TextInput
              className="w-full ml-[10px] text-white"
              placeholderTextColor="#fff"
              placeholder="Search here..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Filtered Services */}
          <View className="flex-wrap flex-row justify-between">
            {filteredServices.length > 0 ? (
              filteredServices.map((item, index) => (
                <View key={index} className="mb-[20px] w-[48%]">
                  <Image
                    className="w-full h-[150px] rounded-[10px]"
                    source={item.image}
                  />
                  <Text className="text-center mt-[5px]">{item.title}</Text>
                </View>
              ))
            ) : (
              <Text className="text-center w-full text-gray-500 mt-10">
                No services found.
              </Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;
