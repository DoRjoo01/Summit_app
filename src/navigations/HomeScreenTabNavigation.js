import { StyleSheet, View, Image, Platform } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BUTTON_COLOR,
  BLACK,
  MAIN_COLOR_GRAY,
  FONT_FAMILY_LIGHT,
} from "../constant";
import {
  HomeStackNavigator,
  ProfileStackNavigator,
  StoresScreenNavigator,
  FavoriteListScreenNavigator,
  CarAddNavigator,
} from "./MainStackNavigation";
import addIconColor from "../../assets/tabBarIcons/add.png";
import addIcon from "../../assets/tabBarIcons/add.png";
import profile_icon from "../../assets/tabBarIcons/profile_icon.png";
import profile_icon_filled from "../../assets/tabBarIcons/profile_icon_filled.png";
import home_icon from "../../assets/tabBarIcons/home.png";
import home_icon_filled from "../../assets/tabBarIcons/homeColor.png";
import store_icon from "../../assets/tabBarIcons/shop.png";
import store_icon_filled from "../../assets/tabBarIcons/shopColor.png";
import star_icon from "../../assets/tabBarIcons/star.png";
import star_icon_filled from "../../assets/tabBarIcons/starColor.png";
import UserContext from "../contexts/UserContext";

const Tab = createBottomTabNavigator();
const HomeScreenTabNavigation = () => {
  const state = useContext(UserContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,
          position: "absolute",
          borderColor: MAIN_COLOR_GRAY,
          borderWidth: 1,
          height: Platform.OS == "ios" ? 70 : 60,
          paddingBottom: Platform.OS == "ios" ? 20 : 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONT_FAMILY_LIGHT,
        },
      }}
      initialRouteName="tab1"
    >
      <Tab.Screen
        name="tab1"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: "Нүүр",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? home_icon_filled : home_icon;
            return (
              <Image
                style={{ width: 20, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          headerTitleStyle: { fontFamily: FONT_FAMILY_LIGHT },
          tabBarInactiveTintColor: BLACK,
          tabBarActiveTintColor: BUTTON_COLOR,
        }}
      />
      <Tab.Screen
        name="tab2"
        component={FavoriteListScreenNavigator}
        options={{
          headerShown: false,
          title: "Таалагдсан",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? star_icon_filled : star_icon;
            return (
              <Image
                style={{ width: 20, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          tabBarInactiveTintColor: BLACK,
          tabBarActiveTintColor: BUTTON_COLOR,
        }}
      />
      <Tab.Screen
        name="tab5"
        component={CarAddNavigator}
        listeners={{
          tabPress: (e) => {
            state.resetPostParams();
          },
        }}
        options={{
          headerShown: false,
          title: "Зар нэмэх",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? addIcon : addIconColor;
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginBottom: 30,
                  backgroundColor: "#0047AB",
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                  }}
                  source={image}
                />
              </View>
            );
          },
          tabBarInactiveTintColor: BLACK,
          tabBarActiveTintColor: BUTTON_COLOR,
        }}
      />
      <Tab.Screen
        name="tab3"
        component={StoresScreenNavigator}
        options={{
          headerShown: false,
          title: "Маркет",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? store_icon_filled : store_icon;
            return (
              <Image
                style={{ width: 20, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          tabBarInactiveTintColor: BLACK,
          tabBarActiveTintColor: BUTTON_COLOR,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          title: "Профайл",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? profile_icon_filled : profile_icon;
            return (
              <Image
                style={{ width: 20, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          tabBarInactiveTintColor: BLACK,
          tabBarActiveTintColor: BUTTON_COLOR,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIcon: {
    marginHorizontal: 10,
  },
});
