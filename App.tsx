import { StackNavigation } from "@/navigation/StackNavigation";
import { OnboardingStep1 } from "@/screens/onboarding/Step1";
import { OnboardingStep2 } from "@/screens/onboarding/Step2";
import { OnboardingStep3 } from "@/screens/onboarding/Step3";
import { SplashScreen } from "@/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
