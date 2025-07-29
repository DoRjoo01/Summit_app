import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import help from "../../assets/help.png";
import { FONT_FAMILY_BOLD } from "../constant";

const Empty = ({ text, mainStyle }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={help}
        style={mainStyle == "1" ? styles.imageStyle1 : styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  imageStyle: {
    width: "60%",
    height: "60%",
  },
  imageStyle1: {
    width: "100%",
    height: "100%",
  },
  emptyText: {
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: "center",
    marginTop: 10,
  },
});
