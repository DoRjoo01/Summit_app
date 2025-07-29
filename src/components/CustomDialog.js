import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { BUTTON_BORDER_RADIUS, BUTTON_COLOR, FONT_FAMILY_BOLD, MAIN_COLOR } from "../constant";
import GradientButton from "./GradientButton";
import { Dialog, Portal } from "react-native-paper";

export default function ({ visible, confirmFunction, declineFunction, text, confirmBtnText, DeclineBtnText, type }) {
	var imageType = null;
	if (type == "warning") {
		imageType = require("../../assets/warning.png");
	} else if (type == "error") {
		imageType = require("../../assets/error.png");
	} else if (type == "log") {
		imageType = require("../../assets/loginMsg.png");
	} else if (type == "change") {
		imageType = require("../../assets/change.png");
	} else if (type == "logOut") {
		imageType = require("../../assets/logOut.png");
	} else {
		imageType = require("../../assets/success.png");
	}

	return (
		<Portal>
			<Dialog
				visible={visible}
				style={{
					padding: 10,
					backgroundColor: "#fff",
					borderRadius: BUTTON_BORDER_RADIUS,
					alignItems: "center"
				}}
			>
				<Dialog.Content style={{ alignItems: "center" }}>
					<Image source={imageType} style={{ width: 200, height: 200 }} />
					<Text
						style={{
							fontFamily: FONT_FAMILY_BOLD,
							textAlign: "center",
							marginVertical: 10
						}}
					>
						{text}
					</Text>
				</Dialog.Content>
				<Dialog.Actions>
					<View style={{ width: "100%", flexDirection: "column" }}>
						<View style={{ marginHorizontal: 50 }}>
							<GradientButton text={confirmBtnText} action={() => confirmFunction()} />
						</View>
						{DeclineBtnText !== "" ? (
							<Button
								onPress={() => declineFunction()}
								style={styles.dialogDeclineBtn}
								labelStyle={{
									fontFamily: FONT_FAMILY_BOLD,
									color: "#000"
								}}
							>
								{DeclineBtnText}
							</Button>
						) : null}
					</View>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%"
	},
	dialogBtn: {
		marginBottom: 10,
		marginHorizontal: 50,
		backgroundColor: BUTTON_COLOR
	},
	dialogDeclineBtn: {
		marginHorizontal: 50,
		marginVertical: 5
	}
});
