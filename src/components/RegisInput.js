import { StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import {
  FONT_FAMILY_LIGHT,
  INPUT_BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../constant";

const RegisInput = props => {
  console.log("RegisInput props-------> ", props.ViewNumber);
  return (
    <>
      {props.ViewNumber != 0 ? (
        <TextInput
          mode="flat"
          autoCapitalize="none"
          autoCorrect={false}
          outlineColor={MAIN_COLOR_GRAY}
          activeOutlineColor={MAIN_COLOR}
          returnKeyType="done"
          style={styles.generalInput}
          underlineStyle={{ borderRadius: 12 }}
          outlineStyle={{ borderRadius: 12 }}
          theme={{
            roundness: INPUT_BORDER_RADIUS,
            fonts: { regular: { fontFamily: FONT_FAMILY_LIGHT } },
          }}
          onChange={(props.ViewNumber = props.ViewNumber - 1)}
        />
      ) : null}
    </>
  );
};

export default RegisInput;

const styles = StyleSheet.create({
  generalInput: {
    backgroundColor: "#fff",
    marginBottom: 5,
    height: 50,
    width: 40,
  },
});
