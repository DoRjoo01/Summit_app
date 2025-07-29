import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { BUTTON_COLOR, FONT_FAMILY_BOLD } from "../constant";
import CustomLoadingButton from "./CustomLoadingButton";

const RequireLogin = ({ props, textDesc }) => {
	return (
		<View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
			<Image
				source={{
					uri: `https://leasing.digitalcredit.mn/storage/uploads/autohuleg_help.png`
				}}
				style={styles.image}
			/>
			<Text
				style={{
					fontFamily: FONT_FAMILY_BOLD,
					fontSize: 14,
					textAlign: "center",
					paddingHorizontal: 20,
					marginVertical: 20
				}}
			>
				{textDesc}
			</Text>
			<CustomLoadingButton
				title="Нэвтрэх"
				color={BUTTON_COLOR}
				radius={10}
				onPress={() => props.navigation.navigate("LoginDrawer")}
				isWaiting={null}
			/>
		</View>
	);
};

export default RequireLogin;

const styles = StyleSheet.create({
	image: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "50%",
		resizeMode: "contain"
	}
});
