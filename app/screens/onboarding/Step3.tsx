import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";


export const OnboardingStep3: FC<ScreenProps<'onboarding-step-3'>> = function ({navigation}) {
    return (
        <View style={[$.screen, $.center]}>
            <View
                style={[
                    $.col,
                    {
                        // height: '70%',
                        backgroundColor: '#000',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 18,
                        padding: 40
                    }
                ]}
            >
                <Image
                    source={require('@/assets/welcome-to-cryptocurrency-02.svg')}
                    style={{
                        width: 250,
                        aspectRatio: 1
                    }}
                />
            </View>

            <Text size='xl' bold color='primary' center>
                {'Welcome to\nCryptocurrency'}
            </Text>
            <Text color="muted" center>
                {'Deliver your Order around the world\nwithout hesitation'}
            </Text>
            <Button gradient='violet' style={{ maxWidth: 350 }} onPress={()=>navigation.navigate('sign-in')}>
                <Text>Login</Text>
            </Button>
            <Button gradient='teal' style={{ maxWidth: 350 }} onPress={()=>navigation.navigate('sign-up-with-mobile')}>
                <Text>Register</Text>
            </Button>
        </View>
    )
}