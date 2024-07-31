import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { ScreenProps } from "../../navigation/StackNavigation";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";


export const OnboardingStep1: FC<ScreenProps<'onboarding-step-1'>> = function ({ navigation }) {
    return (
        <View style={$.screen}>
            <View style={[$.screen, $.center]}>
                <View
                    style={[
                        $.col,
                        {
                            // height: '70%',
                            maxWidth:350,
                            backgroundColor: '#000',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 18,
                            padding: 30
                        }
                    ]}
                >
                    <Button gradient='pink' badge>
                        <Text>1 of 2</Text>
                    </Button>
                    <Image
                        source={require('../../assets/welcome-to-cryptocurrency.svg')}
                        style={{
                            width: 300,
                            aspectRatio: 1.25
                        }}
                    />
                    <Text size='xl' bold color='primary' center>
                        {'Welcome to\nCryptocurrency'}
                    </Text>
                    <Text color="muted" center>
                        {'Reference site about Lorem\nIpsum, giving information origins'}
                    </Text>
                    <Button gradient='teal' onPress={()=>navigation.navigate('onboarding-step-2')}>
                        <Text>Get Started</Text>
                    </Button>
                </View>
                <Button gradient='pink' badge onPress={()=>navigation.navigate('onboarding-step-3')}>
                    <Text>Skip</Text>
                </Button>
            </View>
        </View>
    )
}