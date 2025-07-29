import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONT_FAMILY_BOLD, FONT_FAMILY_LIGHT, INPUT_BORDER_RADIUS, MAIN_COLOR_GRAY } from "../constant";
import IconRenderer from "./IconRenderer";

const styles = StyleSheet.create({
	container: {
		width: "100%"
	},
	containerTouchable: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 50,
		borderWidth: 1,
		borderColor: MAIN_COLOR_GRAY,
		borderRadius: INPUT_BORDER_RADIUS,
		paddingLeft: 15,
		paddingRight: 10
	},
	textInput: {
		fontFamily: FONT_FAMILY_LIGHT,
		fontSize: 16,
		textAlignVertical: "center",
		width: "90%"
	},
	label: {
		fontFamily: FONT_FAMILY_BOLD,
		padding: 5
	}
});

const CustomLookup = ({ label, value, press, disabled }) => (
	<View style={styles.container}>
		<Text style={styles.label}>{label}</Text>
		<TouchableOpacity
			activeOpacity={0.8}
			style={[styles.containerTouchable, { backgroundColor: disabled ? MAIN_COLOR_GRAY : "#fff" }]}
			onPress={!disabled ? press : null}
		>
			<Text style={styles.textInput} numberOfLines={1}>
				{value}
			</Text>
			<IconRenderer iconName="keyboard-arrow-right" iconType="material" size={25} />
		</TouchableOpacity>
	</View>
);

export default CustomLookup;
