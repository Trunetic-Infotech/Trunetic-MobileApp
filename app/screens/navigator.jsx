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
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens (make sure all files exist and are correctly named)
import Home from "./home";
import Services from "./services";
import About from "./about";
import Projects from "./projects"; // ✅ Capitalized correctly
import ContactForm from "./ContactForm"; // ✅ Updated to match actual file name

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");
0;
const icons = {
  Home: "home-outline",
  Service: "construct-outline",
  ContactForm: "call-outline",
  About: "information-circle-outline",
  Portfolio: "briefcase-outline",
};

const displayNames = {
  Home: "Home",
  Service: "Service",
  ContactForm: "Contact",
  About: "About",
  Portfolio: "Portfolio",
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
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Portfolio" component={Projects} />
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
    fontSize: 12,
    marginTop: 8,
    fontWeight: "600",
  },
});

export default Tabs;
