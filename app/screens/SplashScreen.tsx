import { Progress } from "@/components/Progress";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";


export const SplashScreen: FC<ScreenProps<'splash-screen'>> = function ({ navigation }) {
    return (
        <View style={[$.screen, $.center]}>
            <Image
                source={require('@/assets/logo.svg')}
                style={{
                    width: '50%',
                    maxWidth: 300,
                    aspectRatio: 1
                }}
            />
            <Text size='xxl' color="primary" bold>BITEX</Text>
            <View style={[$.center, $.col, { width: '80%', maxWidth: 300 }]}>
                <Progress
                    onLoadingFinished={() => navigation.navigate('onboarding-step-1')}
                />
                <Text color="muted">Loading...</Text>
            </View>
        </View>
    )
}

