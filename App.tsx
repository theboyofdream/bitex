import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigation } from "./app/navigation/StackNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={"transparent"} />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
