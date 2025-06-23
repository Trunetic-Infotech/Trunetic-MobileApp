import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const contactForm = () => {
  return (
    <View>
      <View className="h-full w-full bg-[#1B3B8F] px-[30px] py-[20px]">
        <View>
          <Text
            className="text-center text-[32px] font-bold mb-[50px] text-[white]"
            style={{
              textShadowColor: "#000",
              textShadowOffset: { width: 4, height: 8 },
              textShadowRadius: 15,
            }}
          >
            CONTACT US
          </Text>
          <Text className="text-[white] text-[18px] font-bold mb-[10px]">
            CONTACT
          </Text>
          <Text className="text-[white] text-[16px] mb-[40px]">
            Kindly Fill Out The Form Below And Your team will Get Back To Your
            Enquiries.
          </Text>
        </View>
        <View>
          <Text className="text-white text-[16px]">Name:</Text>
          <View className="flex-row w-full h-[50px] border border-black items-center justify-center px-[20px] rounded-[10px] border-none bg-[#fff] mb-[25px] gap-[5px]">
            <Feather name="user" size={20} color="#000" />
            <TextInput
              className="w-full text-[#000] text-[15px]"
              placeholder="Enter Your Name"
            />
          </View>
          <Text className="text-white text-[16px]">Phone No:</Text>
          <View className="flex-row w-full h-[50px] border border-black items-center justify-center px-[20px] rounded-[10px] border-none bg-[#fff] mb-[25px] gap-[5px]">
            <Feather name="phone" size={20} color="#000" />
            <TextInput
              className="w-full text-[#000] text-[15px]"
              placeholder="Enter Your Phone No."
            />
          </View>
          <Text className="text-white text-[16px]">Email:</Text>
          <View className="flex-row w-full h-[50px] border border-black items-center justify-center px-[20px] rounded-[10px] border-none bg-[#fff] mb-[25px] gap-[5px]">
            <Feather name="mail" size={20} color="#000" />
            <TextInput
              className="w-full text-[#000] text-[15px]"
              placeholder="Enter Your Email"
            />
          </View>
          <Text className="text-white text-[16px]">Message</Text>
          <View className="flex-row w-full h-[50px] border border-black  px-[20px] items-center rounded-[10px] border-none bg-[#fff] mb-[30px] gap-[5px]">
            <Feather name="message-square" size={20} color="#000 " />
            <TextInput
              className="w-full text-[#000] text-[15px]"
              placeholder="Enter Your Message:"
              multiline
              numberOfLines={30}
              textAlignVertical="top"
            />
          </View>
        </View>
        <Button title="Submit" />
      </View>
    </View>
  );
};

export default contactForm;
