import { StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import {
  FONT_FAMILY_LIGHT,
  INPUT_BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../constant";

const ProfileInput = (props) => {
  return (
    <TextInput
      mode="outlined"
      {...props}
      autoCapitalize="none"
      autoCorrect={false}
      outlineColor={MAIN_COLOR_GRAY}
      activeOutlineColor={MAIN_COLOR}
      returnKeyType="done"
      style={styles.generalInput}
      theme={{
        roundness: INPUT_BORDER_RADIUS,
        fonts: { regular: { fontFamily: FONT_FAMILY_LIGHT } },
      }}
    />
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  generalInput: {
    backgroundColor: "#fff",
    marginBottom: 5,
    height: 50,
  },
});
