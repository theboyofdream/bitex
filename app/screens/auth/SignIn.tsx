import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { ScreenProps } from "../../navigation/StackNavigation";
import { Image } from "expo-image";
import { FC, useState } from "react";
import { Pressable, TextInput, View } from "react-native";



export const SignIn: FC<ScreenProps<'sign-in'>> = function ({ navigation }) {
    const [checked, setChecked] = useState(false)
    return (
        <View style={[$.screen, { justifyContent: 'space-between' }]}>
            <View
                style={{
                    width: '80%',
                    maxWidth: 400,
                    alignSelf: 'center',
                    // height: '100%',
                    // justifyContent: 'space-between'
                }}
            >
                <Image
                    source={require('../../assets/sign-in.svg')}
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: 'center',
                        margin: 40,
                    }}
                />

                <View
                    style={{
                        gap: 9,
                        width: '100%',
                    }}>

                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 18
                    }]}>
                        <Image
                            source={require('../../assets/icons/mail.svg')}
                            style={{
                                width: 18,
                                aspectRatio: 1
                            }}
                        />
                        <TextInput
                            placeholder="Enter your email here"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                            }}
                            keyboardType='email-address'
                            placeholderTextColor={"#ffffff80"}
                        />
                    </View>

                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 18
                    }]}>
                        <Image
                            source={require('../../assets/icons/lock.svg')}
                            style={{
                                width: 16,
                                aspectRatio: 0.80
                            }}
                        />
                        <TextInput
                            placeholder="Enter your password"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                            }}
                            secureTextEntry
                            placeholderTextColor={"#ffffff80"}
                        />
                    </View>

                    <View style={[$.row, { justifyContent: 'space-between', marginBottom: 9 }]}>
                        <Pressable
                            style={[$.row, {
                                padding: 3,
                                paddingHorizontal: 6,
                                gap: 9
                            }]}
                            onPress={() => setChecked(!checked)}
                        >
                            {
                                checked ?
                                    <Image
                                        source={require('../../assets/icons/checkbox.svg')}
                                        style={{
                                            width: 16,
                                            aspectRatio: 1
                                        }}
                                    />
                                    :
                                    <Image
                                        source={require('../../assets/icons/checkbox-unchecked.svg')}
                                        style={{
                                            width: 16,
                                            aspectRatio: 1
                                        }}
                                    />

                            }
                            <Text>Remember me</Text>
                        </Pressable>

                        <Pressable
                            style={{
                                padding: 3,
                            }}
                            onPress={() => navigation.navigate('forgot-password')}
                        >
                            <Text style={{ color: '#FDAE67' }}>Forgot Password?</Text>
                        </Pressable>
                    </View>

                    {/* <Button gradient='teal' onPress={() => navigation.navigate('home')}> */}
                    <Button gradient='teal' onPress={() => navigation.navigate('sign-up-with-mobile')}>
                        <Text>Sign in</Text>
                    </Button>

                </View>
            </View>
            <View
                style={[$.row, {
                    padding: 18,
                    justifyContent: 'center',
                }]}>
                <Text>
                    Already have not an account?
                </Text>
                <Pressable onPress={() => navigation.navigate('sign-up-with-mobile')}>
                    <Text style={{ color: '#FDAE67' }}>Sign Up?</Text>
                </Pressable>
            </View>
        </View>
    )
}