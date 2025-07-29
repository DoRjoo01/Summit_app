import { createDrawerNavigator } from "@react-navigation/drawer";
import { FONT_FAMILY_BOLD} from "../constant";
import { LoginStackNavigator, HomeStackNavigator} from "./MainStackNavigation";

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {

		return (
			<Drawer.Navigator
				initialRouteName="HomeNav"
				drawerHideStatusBarOnOpen={true}
				screenOptions={{
					drawerStyle: {
						width: "100%",

					},
					drawerItemStyle: {
						marginBottom: 0
					},
					drawerLabelStyle: {
						fontFamily: FONT_FAMILY_BOLD
					}
				}}
			>
				<>
					<Drawer.Screen
						name="LoginDrawer"
						component={LoginStackNavigator}
						options={{
							drawerItemStyle: { height: 0 },
							headerShown: false
						}}
					/>
				</>
								<>
					<Drawer.Screen
						name="HomeDrawer"
						component={HomeStackNavigator}
						options={{
							drawerItemStyle: { height: 0 },
							headerShown: false
						}}
					/>
				</>
			</Drawer.Navigator>
		);
};

export default MainDrawerNavigation;
