import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const navbar = () => {
  return (

    <SafeAreaView>
    <View className="bg-[#1b3b8f] h-24 flex-row items-center px-2 ">
      {/* Circular logo with white background and inner spacing */}
      <View className="w-20 h-20 bg-white rounded-full p-2  justify-center items-center mr-3">
        <Image
          source={require("../../assets/logo10.png")}
          className="w-full h-full rounded-full"
          resizeMode="cover"
        />
      </View>

      {/* Company Name */}
      <Text className="text-white font-bold text-2xl">
        Trunetic Infotech Pvt Ltd
      </Text>
    </View>
    </SafeAreaView>
  );
};

export default navbar;
