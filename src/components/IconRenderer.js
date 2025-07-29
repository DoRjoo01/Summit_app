import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// Бүх icon map
const iconSets = {
	ionicon: Ionicons,
	feather: Feather,
	"font-awesome-5": FontAwesome5,
	material: MaterialIcons,
	entypo: Entypo,
	ant: AntDesign
};

export default function IconRenderer({ iconName, iconType, size = 24, color = "black", style }) {
	if (!iconName || !iconType) {
		return <Text style={{ color: "gray" }}>No icon</Text>;
	}

	const IconComponent = iconSets[iconType.toLowerCase()];

	if (!IconComponent) {
		return <Text style={{ color: "red" }}>Invalid icon type: {iconType}</Text>;
	}

	return (
		<View style={[styles.iconWrapper, { ...style }]}>
			<IconComponent name={iconName} size={size} color={color} />
		</View>
	);
}

const styles = StyleSheet.create({
	iconWrapper: {
		alignItems: "center"
	}
});
