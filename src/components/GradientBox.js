import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientBox = (props) => {
  return (
    <LinearGradient
      start={[1, 0.5]}
      end={[0, 1]}
      colors={["#617DED", "#617DED"]}
      style={styles.container}
      {...props}
    ></LinearGradient>
  );
};

export default GradientBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
