import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  MAIN_COLOR_GRAY,
  YELLOW,
} from "../constant";

const AdInput = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        // keyboardShouldPersistTaps="handled"
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.generalInput,
          {
            backgroundColor: !props.disabled ? "#fff" : MAIN_COLOR_GRAY,
            height: props.height != null ? props.height : 50,
            fontSize: 16,
            fontFamily: FONT_FAMILY_LIGHT,
          },
        ]}
        editable={!props.disabled}
        selectTextOnFocus={true}
      />
    </View>
  );
};

export default AdInput;

const styles = StyleSheet.create({
  container: {},
  generalInput: {
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: "#fff",
    height: 55,
    borderRadius: 8,
    fontFamily: FONT_FAMILY_LIGHT,
    borderWidth: 1,
    borderColor: MAIN_COLOR_GRAY,
    color: "#000",
  },
  label: {
    fontFamily: FONT_FAMILY_BOLD,
    padding: 5,
    fontSize: 16,
  },
});
