import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoHome from "./src/screens/TodoHome";
import Addtodo from "./src/screens/Addtodo";

const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoHome">
        <Stack.Screen name="Home" component={TodoHome} />
        <Stack.Screen name="Addtodo" component={Addtodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

