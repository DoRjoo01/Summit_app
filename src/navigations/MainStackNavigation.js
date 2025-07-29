import { StyleSheet, TouchableOpacity,Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen.js";
import HomeScreen from "../screens/HomeScreen.js"
import ResetPasswordScreen from "../screens/ResetPasswordScreen.js"
import { FONT_FAMILY_BOLD, MAIN_COLOR} from "../constant";
import IconRenderer from "../components/IconRenderer.js";

const Stack = createStackNavigator();
const LoginStackNavigator = (props) => {
	return (
		<Stack.Navigator initialRouteName="LoginTab">
			<Stack.Screen
				name="LoginTab"
				component={LoginScreen}
				options={{
					title: "",
					headerStyle: {
						borderBottomWidth: 0,
						shadowColor: "transparent" // Header болон Body хооронд байх зураасыг арилгах
					},
					headerTitleStyle: {
						fontFamily: FONT_FAMILY_BOLD
					},
					headerLeft: () => (
						<TouchableOpacity
							activeOpacity={0.8}
							style={styles.headerLeftContainer}
							onPress={() => {
								props.navigation.openDrawer();
							}}
						>
							<IconRenderer iconName="menu" iconType="feather" />
						</TouchableOpacity>
					)
				}}
			/>
			<Stack.Screen
				name="resetPassword"
				component={ResetPasswordScreen}
				options={{
					title: "",
					headerStyle: {
						borderBottomWidth: 0,
						shadowColor: "transparent" // Header болон Body хооронд байх зураасыг арилгах
					},
					headerTitleStyle: {
						fontFamily: FONT_FAMILY_BOLD
					},
					headerLeft: () => (
						<TouchableOpacity
							activeOpacity={0.8}
							style={styles.headerLeftContainer}
							onPress={() => {
								props.navigation.openDrawer();
							}}
						>
							<IconRenderer iconName="menu" iconType="feather" />
						</TouchableOpacity>
					)
				}}
			/>
		</Stack.Navigator>
	);
};

const HomeStackNavigator = (props) => {
	return (
		<Stack.Navigator initialRouteName="HomeTab">
			<Stack.Screen
				name="HomeTab"
				component={HomeScreen}
				options={{
					title: "",
					headerStyle: {
						borderBottomWidth: 0,
						shadowColor: "transparent" // Header болон Body хооронд байх зураасыг арилгах
					},
					headerTitleStyle: {
						fontFamily: FONT_FAMILY_BOLD
					},
					headerLeft: () => (
						<TouchableOpacity
							activeOpacity={0.8}
							style={styles.headerLeftContainer}
							onPress={() => {
								props.navigation.openDrawer();
							}}
						>
							<IconRenderer iconName="menu" iconType="feather" />
						</TouchableOpacity>
					)
				}}
			/>
		</Stack.Navigator>
	);
};

export {
	LoginStackNavigator,
	HomeStackNavigator
};

const styles = StyleSheet.create({
	headerLeftContainer: {
		marginLeft: 5,
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		justifyContent: "space-between"
	}
});
