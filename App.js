import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
// import { UserStore } from "./src/contexts/UserContext";
import MainDrawerNavigation from "./src/navigations/MainDrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

export default function App() {
	return (
		<SafeAreaProvider>
			<PaperProvider>
				<NavigationContainer>
					{/* <UserStore> */}
						<MainDrawerNavigation />
					{/* </UserStore> */}
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	);
}
