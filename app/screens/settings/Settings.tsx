import { GradientView } from "@/components/GradientView";
import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { ScreenProps } from "@/navigation/StackNavigation";
import { Image, ImageSource } from "expo-image";
import { FC, useState } from "react";
import { Pressable, ScrollView, Switch, View } from "react-native";



export const Settings: FC<ScreenProps<'settings'>> = function ({ navigation }) {
    return (
        <View style={$.screen}>

            <Pressable
                onPress={() => navigation.navigate('profile-details')}
                style={[
                    $.row,
                    {
                        backgroundColor: '#1E2230',
                        padding: 18,
                        margin: 18,
                        borderRadius: 12
                    }
                ]}>
                <Image
                    source={require('@/assets/placeholder.svg')}
                    style={{
                        width: 60,
                        height: 60
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text size='lg'>Jhon Smith</Text>
                    <Text color='primary'>Basic Member</Text>
                </View>
                <ChevronRightIcon />
            </Pressable>

            <ScrollView>
                <View
                    style={{
                        margin: 18,
                        // gap:18,
                        backgroundColor: '#1E2230',
                        paddingBottom: 18,
                        borderRadius: 12,
                        overflow: 'hidden'
                    }}
                >
                    <GradientView
                        variant='teal'
                        style={{
                            padding: 9
                        }}
                    >
                        <Text>Accounts</Text>
                    </GradientView>

                    <List
                        icon={require('@/assets/icons/lock.svg')}
                        iconAspectRatio={0.9}
                        text="Change Password"
                    />

                    <List
                        icon={require('@/assets/icons/bell-vibrate.svg')}
                        iconAspectRatio={0.9}
                        text="Order Management"
                    />

                    <List
                        icon={require('@/assets/icons/gear.svg')}
                        iconAspectRatio={1}
                        text="Document Management"
                    />

                    <List
                        icon={require('@/assets/icons/card.svg')}
                        iconAspectRatio={1.3}
                        text="Payments"
                    />

                    <List
                        icon={require('@/assets/icons/exit.svg')}
                        iconAspectRatio={1.3}
                        text="Sign Out"
                        onpress={()=>navigation.navigate('sign-in')}
                    />

                    <View
                        style={{
                            padding: 12,
                            backgroundColor: '#208DFE15'
                        }}
                    >
                        <Text color="primary">More Options</Text>
                    </View>

                    <List
                        icon={require('@/assets/icons/newsletter.svg')}
                        iconAspectRatio={1.3}
                        text="Newsletter"
                        hasSwitch
                    />

                    <List
                        icon={require('@/assets/icons/mail.svg')}
                        iconAspectRatio={1.3}
                        text="Text Message"
                        hasSwitch
                    />

                    <List
                        icon={require('@/assets/icons/telephone.svg')}
                        iconAspectRatio={1}
                        text="Phone Call"
                        hasSwitch
                    />

                    <List
                        icon={require('@/assets/icons/currency.svg')}
                        iconAspectRatio={1.1}
                        text="Currency"
                        endText="$USD"
                    />

                    <List
                        icon={require('@/assets/icons/language.svg')}
                        iconAspectRatio={1.1}
                        text="Language"
                        endText="English"
                    />

                    <List
                        icon={require('@/assets/icons/link.svg')}
                        iconAspectRatio={1.1}
                        text="Linked Accounts"
                        endText="Facebook, Go..."
                    />

                </View>
            </ScrollView>
        </View>
    )

}

function ChevronRightIcon() {
    return (
        <Image
            source={require('@/assets/icons/chevron-right.svg')}
            style={{
                width: 10,
                height: 20
            }}
        />
    )
}

type ListProps = {
    icon?: string | number | string[] | ImageSource | ImageSource[] | null | undefined
    iconAspectRatio: number
    text: string
    endText?: string
    hasSwitch?: boolean
    onpress?: ()=>void
}
const List: FC<ListProps> = function ({
    icon,
    iconAspectRatio,
    text,
    endText,
    hasSwitch = false,
    onpress
}) {
    const [on, setOn] = useState(false)
    return (
        <Pressable
        onPress={onpress}
        style={[
            $.row,
            { padding: 12 }
        ]}>
            <Image
                source={icon}
                style={{
                    width: 21,
                    aspectRatio: iconAspectRatio
                }}
            />
            <Text style={{ flex: 1 }}>{text}</Text>
            {
                hasSwitch ?
                    <Switch
                        style={{ maxHeight: 24 }}
                        value={on}
                        onValueChange={setOn}
                        thumbColor={'#4DE0D9'}
                        trackColor={{
                            false: '#000',
                            true: '#fff'
                        }}

                    />
                    :
                    <>
                        {
                            endText &&
                            <Text>{endText}</Text>
                        }
                        <ChevronRightIcon />
                    </>
            }
        </Pressable>
    )
}




