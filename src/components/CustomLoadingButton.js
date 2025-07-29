import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

const CustomLoadingButton = ({
	title,
	color,
	radius,
	onPress,
	isWaiting,
	containerStyle = {},
	buttonStyle = {},
	titleStyle = {}
}) => {
	return (
		<Button
			mode="contained"
			disabled={isWaiting}
			onPress={onPress}
			style={[styles.btnContainer, { borderRadius: radius, backgroundColor: color }, containerStyle, buttonStyle]}
			contentStyle={styles.contentStyle}
			labelStyle={[styles.labelStyle, titleStyle]}
		>
			<View style={styles.innerContent}>
				<Text style={[styles.labelStyle, titleStyle]}>{title}</Text>
				{isWaiting && <ActivityIndicator color="#fff" size={16} style={{ marginLeft: 10 }} />}
			</View>
		</Button>
	);
};

const styles = StyleSheet.create({
	btnContainer: {
		marginRight: "auto",
		marginLeft: "auto",
		marginTop: 10,
		width: "100%"
	},
	contentStyle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 45
	},
	labelStyle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff"
	},
	innerContent: {
		flexDirection: "row",
		alignItems: "center"
	}
});

export default CustomLoadingButton;
