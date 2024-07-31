import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { Image } from "expo-image";
import { FC } from "react";
import { TextInput, View } from "react-native";



export const SelectLocation: FC<ScreenProps<'select-location'>> = function ({navigation}) {

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
                    source={require('@/assets/select-location.svg')}
                    style={{
                        width: 200,
                        height: 210,
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
                        <TextInput
                            placeholder="Select your country"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                                flex: 1,
                            }}
                            placeholderTextColor={"#ffffff80"}
                        />
                        <Image
                            source={require('@/assets/icons/down-arrow.svg')}
                            style={{
                                width: 21,
                                aspectRatio: 1.9,
                            }}
                        />

                    </View>

                    <View style={[$.row, {
                        backgroundColor: '#000',
                        padding: 3,
                        paddingHorizontal: 18,
                        borderRadius: 100,
                        gap: 18
                    }]}>
                        <TextInput
                            placeholder="Select your city"
                            style={{
                                color: '#fff',
                                minHeight: 42,
                                flex: 1,
                            }}
                            placeholderTextColor={"#ffffff80"}
                        />
                        <Image
                            source={require('@/assets/icons/down-arrow.svg')}
                            style={{
                                width: 21,
                                aspectRatio: 1.9,
                            }}
                        />

                    </View>

                    <Button gradient='teal' style={{ marginTop: 18 }} onPress={()=>navigation.navigate('home')}>
                        <Text>Continue</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}
