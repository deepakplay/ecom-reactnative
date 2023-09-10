import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import Restaurants from "./screens/Restaurants";


const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurants" component={Restaurants} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;