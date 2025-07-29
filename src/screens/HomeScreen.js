import {View,TouchableOpacity,Button} from "react-native"


export default function HomeScreen() {
    return(
                <TouchableOpacity onPress={() => props.navigation.navigate('LoginDrawer')}>
                  <Button
                    title="Face ID"
                    color="#841584"
                  />
                </TouchableOpacity>
    );
}