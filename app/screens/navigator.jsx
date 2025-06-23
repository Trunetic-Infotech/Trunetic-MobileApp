// import React from "react";
// import { View, Text } from "react-native";
// import Services from "../screens/services";
// import Home from "../screens/home";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarIcon: () => null,
//       }}
//     >
//       <Tab.Screen name="Service" component={Services} />
//       <Tab.Screen name="Home" component={Home} />
//     </Tab.Navigator>
//   );
// };

// export default Tabs;

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "../screens/home";
import Services from "../screens/services";
import ContactForm from "./contactForm";
import about from "./about";

import projects from "./projects";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const icons = {
  Home: "home-outline",
  Service: "construct-outline",
  ContactForm: "call-outline",
  About: "information-circle-outline",
   Portfolio: "briefcase-outline", // 👈 Add this line
};

const displayNames = {
  Home: "Home",
  Service: "Service",
  ContactForm: "Contact",
  About: "About", 
    Portfolio: "Portfolio",// 👈 Add this line
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const scaleAnim = new Animated.Value(isFocused ? 1.2 : 1);
        const translateY = new Animated.Value(isFocused ? -10 : 0);

        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: isFocused ? 1.2 : 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: isFocused ? -10 : 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.8}
          >
            <Animated.View
              style={[
                isFocused ? styles.focusedIconWrapper : styles.iconWrapper,
                {
                  transform: [{ scale: scaleAnim }, { translateY }],
                },
              ]}
            >
              <Ionicons
                name={icons[route.name]}
                size={24}
                color={isFocused ? "#fff" : "#777"}
              />
            </Animated.View>
            <Text
              style={[
                styles.focusedText,
                { color: isFocused ? "#fff" : "#777" },
              ]}
            >
              {displayNames[route.name]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      
      <Tab.Screen name="Service" component={Services} />
      <Tab.Screen name="ContactForm" component={ContactForm} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={about} />
       <Tab.Screen name="Portfolio" component={projects} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#121212",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  focusedIconWrapper: {
    backgroundColor: "#7B61FF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  focusedText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "600",
  },
});

export default Tabs;
