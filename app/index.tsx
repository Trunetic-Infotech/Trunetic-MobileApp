import { Text, View } from "react-native";
import "../global.css";

import { useEffect, useState } from "react";
import { useRouter } from "expo-router";


export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();



  // About Page

  useEffect(() => {
    const timer = setTimeout(() => {

      router.push('../screens/about');
    }, 2000);
    return () => clearTimeout(timer); // ✅ Cleanup on unmount
  }, []); // ✅ Only run once
  

  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className=" items-center"
    >
      <Text className="text-lg bg-pink-400">
        Edit app/index.tsx to edit this screen.
      </Text>

     
    </View>
  );
}
