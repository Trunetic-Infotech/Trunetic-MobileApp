import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const services = () => {
  return (
    <ScrollView>
      <View className="w-full h-full bg-[#1B3B8F] py-[20px] px-[20px]">
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
        <View className="w-full h-full bg-[white] rounded-t-[50px] py-[30px] px-[20px]">
          <View className="flex-row w-full h-[50px] border border-black items-center justify-center px-[20px] rounded-[80px] border-none bg-[#1b3b8f] mb-[20px]">
            <Feather name="search" size={20} color="#fff" />
            <TextInput
              className="w-full text-white"
              placeholder="Search here..."
               placeholderTextColor="#fff"
            />
          </View>
          <View className="flex-row justify-between mb-[20px]">
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/software development.png")}
              />
              <Text className="text-center">Software Development</Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/App Development.png")}
              />
              <Text className="text-center">App Development</Text>
            </View>
          </View>
          <View className="flex-row justify-between mb-[20px]">
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/webdevelopment.png")}
              />
              <Text className="text-center">Web Development</Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/CRM.png")}
              />
              <Text className="text-center">CRM</Text>
            </View>
          </View>
          <View className="flex-row justify-between mb-[20px]">
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/ERP.png")}
              />
              <Text className="text-center">ERP</Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px] rounded-[10px]"
                source={require("../../assets/INTERNSHIP.png")}
              />
              <Text className="text-center">Internship</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default services;
