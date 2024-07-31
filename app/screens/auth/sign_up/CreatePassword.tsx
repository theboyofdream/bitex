import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { OtpInput } from "@theboyofdream/rn-otp-input";
import { Image } from "expo-image";
import { FC, useEffect, useMemo, useState } from "react";
import { Pressable, TextInput, View } from "react-native";



export const CreatePassword: FC<ScreenProps<'create-password'>> = function ({navigation}) {

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { has8chars, hasUppercaseOrsymbol, hasNumber } = useMemo(() => {
        const has8chars = password.length >= 8
        const hasUppercaseOrsymbol = new RegExp(/[A-Z!@#$%^&*(),.?":{}|<>]/).test(password)
        const hasNumber = new RegExp(/\d/).test(password)
        return {
            has8chars,
            hasUppercaseOrsymbol,
            hasNumber
        }
    }, [password])


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
                    source={require('@/assets/create-password.svg')}
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
                    <Text center color='muted'>{'Choose a secure password that will be\neasy for you to remember.'}</Text>



                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 18
                    }]}>
                        <TextInput
                            placeholder="Enter your password"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                                flex: 1,
                            }}
                            keyboardType={showPassword ? 'visible-password' : 'default'}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor={"#ffffff80"}
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                            <Image
                                source={require('@/assets/icons/eye.svg')}
                                style={{
                                    width: 30,
                                    aspectRatio: 1,
                                    tintColor: showPassword ? '#fff' : undefined
                                }}
                            />
                        </Pressable>
                    </View>

                    <View>
                        <View style={$.row}>
                            <Image
                                source={require('@/assets/icons/check.svg')}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: has8chars ? '#4DE0D9' : undefined
                                }}
                            />
                            <Text color={has8chars ? "primary" : 'normal'}>Has at least 8 characters</Text>
                        </View>
                        <View style={$.row}>
                            <Image
                                source={require('@/assets/icons/check.svg')}
                                style={{
                                    width: 24,
                                    height: 24, 
                                    tintColor: hasUppercaseOrsymbol ? '#4DE0D9' : undefined
                                }}
                            />
                            <Text color={hasUppercaseOrsymbol ? "primary" : 'normal'}>Has an uppercase letter or symbol</Text>
                        </View>
                        <View style={$.row}>
                            <Image
                                source={require('@/assets/icons/check.svg')}
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: hasNumber ? '#4DE0D9' : undefined
                                }}
                            />
                            <Text color={hasNumber ? "primary" : 'normal'}>Has a number</Text>
                        </View>
                    </View>

                    <Button gradient='teal' onPress={()=>navigation.navigate('select-location')}>
                        <Text>Continue</Text>
                    </Button>

                </View>
            </View>
        </View>
    )
}
