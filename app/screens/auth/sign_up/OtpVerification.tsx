import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { OtpInput } from "@theboyofdream/rn-otp-input";
import { Image } from "expo-image";
import { FC, useEffect, useState } from "react";
import { Pressable, View } from "react-native";



export const OtpVerification: FC<ScreenProps<'verify-otp'>> = function ({ navigation, route: { params } }) {

    const countryCode = '91'
    let phone = '7738553071'
    if (params.mobile && params.mobile.length > 1) {
        phone = params.mobile
    }


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
                    source={require('@/assets/otp-verification.svg')}
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
                    <Text center color='muted'>{`An authentication code has been sent to\n(+${countryCode}) ${phone}`}</Text>


                    <OtpInput
                        height={60}
                        otpCount={4}
                        otpPlaceholder=""
                        style={{
                            container: {
                                justifyContent: 'center',
                            },
                            box: {
                                backgroundColor: '#000'
                            },
                            text: {
                                color: '#fff',
                            }
                        }}
                    />

                    <OTPCountDown />

                    <Button gradient='teal' onPress={()=>navigation.navigate('create-password')}>
                        <Text>Continue</Text>
                    </Button>

                </View>
            </View>
        </View>
    )
}


let intervalTimer: NodeJS.Timeout
const OTPCountDown: FC = function () {

    const [sec, setSec] = useState(60 * 5)
    const reset = () => setSec(60 * 5)

    useEffect(() => {
        if (!intervalTimer) {
            intervalTimer = setInterval(() => {
                if (sec <= 0) {
                    clearInterval(intervalTimer)
                    return
                } else {
                    setSec(s => s - 1)
                }
            }, 1000)
        }
        return () => {
            if (intervalTimer) {
                clearInterval(intervalTimer)
            }
        }
    }, [])


    return (
        <View style={{ gap: 6, margin: 18 }}>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                gap: 6
            }}>
                <Text>I didn't receive code.</Text>
                <Pressable onPress={reset}>
                    <Text color='#FE8270'>Resend code</Text>
                </Pressable>
            </View>

            <Pressable style={{
                alignSelf: 'center'
            }}>
                <Text color='primary'>{(sec / 60).toFixed(2)} sec left</Text>
            </Pressable>
        </View>
    )
}