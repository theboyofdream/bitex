import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { Image } from "expo-image";
import { FC, useState } from "react";
import { KeyboardTypeOptions, Pressable, ScrollView, TextInput, View } from "react-native";

export const ProfileDetails: FC = function () {
    return (
        <View style={$.screen}>
            <Image
                source={require('../../assets/placeholder.svg')}
                style={{
                    width: 150,
                    aspectRatio: 1,
                    alignSelf: 'center',
                    marginTop: 30
                }}
            />

            <View style={{ marginBottom: 30 }}>
                <Text center size="lg">Jhon Smitha</Text>
                <View style={[$.row, $.center]}>
                    <Text center size="lg" color="primary">Account Credit:</Text>
                    <Text center size="lg" color="tomato">$200.00</Text>
                </View>
            </View>

            <ScrollView>
                <View style={[
                    $.col,
                    {
                        width: '80%',
                        alignSelf: 'center',
                        maxWidth: 400
                    }
                ]}>


                    <Input
                        placeholder="Full name"
                        defaultValue="Wiliam Jonson"
                    />

                    <Input
                        placeholder="Contact"
                        defaultValue="+880 000 111 333"
                        keyboardType='phone-pad'
                    />

                    <Input
                        placeholder="Email"
                        defaultValue="youremail@website.com"
                        keyboardType='email-address'
                    />

                    <Input
                        placeholder="Address"
                        defaultValue="Iris Watson P.O. Box 283 8562 sFusce Rd.Frederick Nebraska"
                        multiline
                    />

                    <View style={{ flex: 1, minHeight: 50 }} />

                    <Button gradient='teal'>
                        <Text>Save Now</Text>
                    </Button>

                </View>
            </ScrollView>

        </View>
    )
}


type InputProps = {
    defaultValue: string
    placeholder: string
    keyboardType?: KeyboardTypeOptions
    multiline?: boolean
}

const Input: FC<InputProps> = function ({
    defaultValue,
    placeholder,
    keyboardType,
    multiline = false
}) {
    // const ref = useRef<TextInput>(null)
    const [edit, setEdit] = useState(false)
    // useEffect(() => {
    //     if (!edit) {
    //         ref.current?.focus()
    //     }
    // }, [edit])
    return (
        <View style={[$.row, {
            backgroundColor: '#000',
            padding: 3,
            paddingHorizontal: 18,
            borderRadius: 30,
            gap: 18
        }]}>
            <TextInput
                // ref={ref}
                defaultValue={defaultValue}
                placeholder={placeholder}
                style={{
                    color: '#fff',
                    minHeight: 42,
                    flex: 1,
                    paddingTop: multiline ? 9 : 0,
                    textAlignVertical: multiline ? 'top' : 'auto'
                }}
                autoFocus
                editable={edit}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={multiline ? 5 : 1}
                placeholderTextColor={"#ffffff80"}
            />
            <Pressable
                style={{
                    height: '100%',
                    padding: 9,
                }}
                onPress={() => {
                    // if (!edit) {
                    //     setTimeout(() => {
                    //         ref.current?.focus()
                    //     }, 500);
                    // }
                    setEdit(!edit)
                }}>
                {
                    !edit
                        ? <Image
                            source={require('../../assets/icons/pencil.svg')}
                            style={{
                                width: 18,
                                aspectRatio: 1,
                            }}
                        /> :
                        <Image
                            source={require('../../assets/icons/check.svg')}
                            style={{
                                width: 28,
                                aspectRatio: 1,
                            }}
                        />}
            </Pressable>
        </View>
    )
}