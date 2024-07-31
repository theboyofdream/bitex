import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { OtpInput } from "@theboyofdream/rn-otp-input";
import { Image } from "expo-image";
import { FC, useEffect, useMemo, useState } from "react";
import { Pressable, TextInput, View } from "react-native";



export const ForgotPassword: FC<ScreenProps<'forgot-password'>> = function ({navigation}) {

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
                    source={require('@/assets/forgot-password.svg')}
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
                    <Text center color='muted'>{'We will send a mail to the email address\nyou registered to regain our password'}</Text>



                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 18
                    }]}>
                         <Image
                                source={require('@/assets/icons/mail.svg')}
                                style={{
                                    width: 21,
                                    aspectRatio: 1.2,
                                    tintColor: '#fff'
                                }}
                            />
                        <TextInput
                            placeholder="Enter your email"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                                flex: 1,
                            }}
                            keyboardType='email-address'
                            placeholderTextColor={"#ffffff80"}
                        />
                           
                    </View>

                   <Text center color="#FE8270">Email sent to ex*****@gmail.com</Text>

                    <Button gradient='teal' onPress={()=>navigation.navigate('sign-in')}>
                        <Text>Send</Text>
                    </Button>

                </View>
            </View>
        </View>
    )
}
