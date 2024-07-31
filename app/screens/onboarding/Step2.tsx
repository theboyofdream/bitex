import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { ScreenProps } from "../../navigation/StackNavigation";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";


export const OnboardingStep2: FC<ScreenProps<'onboarding-step-2'>> = function ({ navigation }) {
    const next = () => navigation.navigate('onboarding-step-3')
    const skip = () => navigation.navigate('onboarding-step-3')
    return (
        <View style={[$.screen, $.center]}>
            <View
                style={[
                    $.col,
                    {
                        // height: '70%',
                        maxWidth: 350,
                        backgroundColor: '#000',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 18,
                        padding: 30
                    }
                ]}
            >
                <Button gradient='pink' badge>
                    <Text>2 of 2</Text>
                </Button>
                <Image
                    source={require('../../assets/buy-sell-bitcoin.svg')}
                    style={{
                        width: 300,
                        aspectRatio: 1
                    }}
                />
                <Text size='xl' bold color='primary' center>
                    {'Buy & Sell\nBitcoin'}
                </Text>
                <Text color="muted" center>
                    {'Reference site about Lorem\nIpsum, giving information origins'}
                </Text>
                <Button gradient='teal' onPress={next}>
                    <Text>Get Started</Text>
                </Button>
            </View>
            <Button gradient='pink' badge onPress={skip}>
                <Text>Skip</Text>
            </Button>
        </View>
    )
}