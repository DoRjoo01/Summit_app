import { StyleSheet, Text } from "react-native";
import React from "react";
import { Snackbar } from "react-native-paper";
import { FONT_FAMILY_BOLD, MAIN_COLOR } from "../constant";

export default function ({ visible, dismiss, msg, topPosition }) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={dismiss}
      wrapperStyle={{ top: topPosition ?? 0, zIndex: 999 }}
      duration={1000}
      style={{ backgroundColor: MAIN_COLOR, padding: 2 }}
    >
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          fontFamily: FONT_FAMILY_BOLD,
        }}
      >
        {msg}
      </Text>
    </Snackbar>
  );
}

const styles = StyleSheet.create({});
