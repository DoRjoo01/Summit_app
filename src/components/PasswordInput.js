import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState } from "react";
import { FONT_FAMILY_LIGHT, INPUT_BORDER_RADIUS, MAIN_COLOR_GRAY } from "../constant";
import IconRenderer from "./IconRenderer";

const ProfileInput = (props) => {
	const [hidePassword, setHidePassword] = useState(true);

	const hideShowPassword = () => {
		setHidePassword(!hidePassword);
	};

	return (
		<View style={styles.stackSection}>
			<TextInput
				{...props}
				style={[styles.generalInput, { width: "100%" }]}
				returnKeyType="done"
				secureTextEntry={hidePassword}
			/>
			<TouchableOpacity activeOpacity={1} style={styles.imageStyle} onPress={() => hideShowPassword()}>
				<IconRenderer iconName={hidePassword ? "eye" : "eye-off"} iconType="feather" color={MAIN_COLOR_GRAY} />
			</TouchableOpacity>
		</View>
	);
};

export default ProfileInput;

const styles = StyleSheet.create({
	stackSection: {
		marginTop: 10,
		alignItems: "center",
		width: "100%"
	},
	generalInput: {
		height: 50,
		fontFamily: FONT_FAMILY_LIGHT,
		borderWidth: 1,
		borderRadius: INPUT_BORDER_RADIUS,
		borderColor: MAIN_COLOR_GRAY,
		paddingLeft: 20,
		marginTop: 10
	},
	imageStyle: {
		position: "absolute",
		zIndex: 999,
		right: "5%",
		top: "40%"
	}
});
