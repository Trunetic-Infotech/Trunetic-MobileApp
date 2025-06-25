import React from 'react';
import { Text, View, Image } from 'react-native';

const Navbar = () => {
  return (
    <View className="bg-[#1b3b8f] h-24 flex flex-row items-center px-4">
      
      {/* Logo with space around it */}
      <View className="bg-white p-1 rounded-full mr-4">
        <Image
          source={require('../../assets/logo10.png')}
          className="w-16 h-16 rounded-full"
        />
      </View>

      {/* Title */}
      <Text className="text-white font-bold text-xl">
        Trunetic Infotech Pvt Ltd
      </Text>

    </View>
  );
};

export default Navbar;
