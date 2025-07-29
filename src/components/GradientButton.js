import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BUTTON_COLOR, FONT_FAMILY_BOLD } from "../constant";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={props.action}
      disabled={props.disabled}
    >
      <LinearGradient
        colors={[BUTTON_COLOR, BUTTON_COLOR]}
        style={{
          borderRadius: 12,
          height: 40,
          opacity: props.disabled ? 0.6 : 1,
        }}
      >
        <Text style={styles.btnText}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  btnText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
