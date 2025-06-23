import { View, Text, Image } from "react-native";
import React from "react";

const webDev = () => {
  return (
    <View className="bg-[#fff] px-[20px] py-[20px] h-full w-full">
      <Text
        className="text-[#000] text-[30px] text-center font-bold mb-[20px]"
        style={{
          textShadowColor: "#999",
          textShadowOffset: { width: 4, height: 8 },
          textShadowRadius: 15,
        }}
      >
        Web Development
      </Text>
      <Text className=" text-[20px] text-[#000] mb-[20px]">
        Top Web Development And Designing Company.
      </Text>
      <View className="w-full px-[15px] py-[15px] bg-[#1B3B8F] rounded-t-3xl rounded-bl-3xl mb-[20px] shadow-lg shadow-black">
        <Text className="text-[#fff] text-justify text-[16px]">
          At Trunetic Infotech Software Solutions, we believe in the power of
          technology to drive growth and success. We stay updated with trends in
          web development and digital marketing, investing in tools to deliver
          great results. We understand that each business is unique so we tailor
          each project to your specific goals and vision.
        </Text>
      </View>

      <View className="h-[200px] w-full rounded-[10px] mb-[20px]">
        <Image
          className="h-full w-full rounded-[10px] object-cover"
          source={require("../../../assets/webDevelopmentCourse.png")}
        />
      </View>
      <Text className="font-bold text-[#000] text-[18px] uppercase mb-[10px]">
        Benefits Of Web Developent
      </Text>
      <Text className="text-[blue] text-[16px] mb-[5px]">
        1: Improver Customer Support.
      </Text>
      <Text className="text-[blue] text-[16px] mb-[5px]">
        2: Showcase Product And Servicess.
      </Text>
      <Text className="text-[blue] text-[16px] mb-[5px]">3: Scalability.</Text>
      <Text className="text-[blue] text-[16px] mb-[5px]">4: Global Reach.</Text>
    </View>
  );
};

export default webDev;
