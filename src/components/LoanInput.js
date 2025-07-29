import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  INPUT_BORDER_RADIUS,
  MAIN_COLOR_GRAY,
} from "../constant";

const LoanInput = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={props.keyboardType == null ? "address" : "phone-pad"}
        style={[
          styles.generalInput,
          { backgroundColor: !props.disabled ? "#fff" : MAIN_COLOR_GRAY },
        ]}
        editable={!props.disabled}
        selectTextOnFocus={false}
      />
    </View>
  );
};

export default LoanInput;

const styles = StyleSheet.create({
  container: {},
  generalInput: {
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: "#fff",
    marginBottom: 5,
    height: 50,
    borderRadius: INPUT_BORDER_RADIUS,
    fontFamily: FONT_FAMILY_LIGHT,
    borderWidth: 1,
    borderColor: MAIN_COLOR_GRAY,
    color: "#000",
  },
  label: {
    fontFamily: FONT_FAMILY_BOLD,
    padding: 5,
  },
});
