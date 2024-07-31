import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { Image } from "expo-image";
import { FC, useRef } from "react";
import { TextInput, View } from "react-native";



export const SignUpWithPhone: FC<ScreenProps<'sign-up-with-mobile'>> = function ({ navigation }) {
    const ref = useRef<string>('')
    return (
        <View style={$.screen}>
            <View
                style={{
                    width: '80%',
                    maxWidth: 400,
                    alignSelf: 'center',
                }}
            >
                <Image
                    source={require('@/assets/sign-in-02.svg')}
                    style={{
                        width: 200,
                        height: 210,
                        alignSelf: 'center',
                        margin: 40,
                    }}
                />

                <View
                    style={{
                        gap: 18,
                        width: '100%',
                    }}>
                    <Text center color='muted'>{'Simply enter your phone number to login\nor create an account.'}</Text>
                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 12
                    }]}>
                        <Text>+91</Text>
                        <Image
                            source={require('@/assets/icons/chevron-right.svg')}
                            style={{
                                width: 10,
                                height: 20,
                                tintColor: '#ffffff80',
                                transform: [
                                    { rotate: '90deg' }
                                ]
                            }}
                        />
                        <View
                            style={{
                                height: '60%',
                                width: 1,
                                backgroundColor: '#ffffff80',
                            }}
                        />
                        <TextInput
                            placeholder="Enter your phone here"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                            }}
                            onChangeText={(v) => ref.current = v}
                            keyboardType='number-pad'
                            placeholderTextColor={"#ffffff80"}
                        />
                    </View>

                    <Text center color='muted'>{'By using our mobile app, you agree to our\nPrivacy Policy and Terms of Use.'}</Text>

                    <Button gradient='teal' onPress={() => navigation.navigate('verify-otp', { mobile: ref.current })}>
                        <Text>Continue</Text>
                    </Button>

                </View>
            </View>
        </View>
    )
}