import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { useNavigation } from "@react-navigation/native";
import { Image, ImageSource } from "expo-image";
import { FC } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";


export const MarketTrends: FC = function () {
    return (
        <View style={$.screen}>

            <View style={[$.row, {
                backgroundColor: '#000',
                padding: 3,
                paddingHorizontal: 18,
                marginHorizontal: 18,
                borderRadius: 100,
                gap: 18
            }]}>
                <Image
                    source={require('../../assets/icons/search.svg')}
                    style={{
                        width: 24,
                        aspectRatio: 1
                    }}
                />
                <TextInput
                    placeholder="Search Currency..."
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        minHeight: 42,
                    }}
                    keyboardType='email-address'
                    placeholderTextColor={"#ffffff80"}
                />
            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: 15, gap: 12, paddingBottom: 30 }}>

                    <BitcoinListItem
                        icon={require('../../assets/icons/tron.svg')}
                        title="Tron"
                        subTitle="TRX"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/etherium.svg')}
                        title="Etherium"
                        subTitle="BCH"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/binance.svg')}
                        title="Binance Coin"
                        subTitle="CAD"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/pound.svg')}
                        title="Pound"
                        subTitle="GBP"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/tether.svg')}
                        title="Tether"
                        subTitle="USDT"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/bitcoin.svg')}
                        title="Bitcoin Cash"
                        subTitle="BTC"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                </View>
            </ScrollView>

            <Footer />

        </View>
    )
}



type BitcoinListItemProps = {
    icon?: string | number | ImageSource | ImageSource[] | string[] | null | undefined
    title: string
    subTitle: string
    price: string
    percentage: number
}

export const BitcoinListItem: FC<BitcoinListItemProps> = function ({
    icon,
    title,
    subTitle,
    price,
    percentage
}) {
    const {navigate} = useNavigation()
    const percentageColor = percentage < 0 ? '#FF73AA' : '#4DE0D9'
    return (
        <Pressable
        onPress={()=>navigate('bitcoin-details')}
            style={{
                backgroundColor: '#1E2230',
                padding: 15,
                flexDirection: 'row',
                gap: 9,
                borderRadius: 15,
            }}
        >
            <Image
                source={icon}
                style={{
                    width: 60,
                    aspectRatio: 1
                }}
            />

            <View style={{ gap: 3, flex: 1 }}>
                <Text size="mlg">{title}</Text>
                <Text color='muted'>{subTitle}</Text>
            </View>

            <View style={{ gap: 3, alignItems: 'flex-end' }}>
                <Text size="mlg">{price}</Text>

                <View style={[$.row, $.center]}>
                    <Image
                        source={require('../../assets/icons/chevron-right.svg')}
                        style={{
                            width: 6,
                            height: 12,
                            transform: [
                                { rotate: '90deg' }
                            ],
                            tintColor: percentageColor
                        }}
                    />
                    <Text color={percentageColor}>{percentage > 0 ? '+' : ''}{percentage}%</Text>
                </View>
            </View>

        </Pressable>
    )
}



export const Footer: FC = function () {
    return (
        <View style={[
            $.row,
            {
                justifyContent: 'space-around',
                padding: 18,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#1E2230'
            }
        ]}>

            <Image
                source={require('../../assets/icons/home.svg')}
                style={{
                    width: 28,
                    aspectRatio: 1
                }}
            />

            <Image
                source={require('../../assets/icons/wallet.svg')}
                style={{
                    width: 28,
                    aspectRatio: 1
                }}
            />

            <Image
                source={require('../../assets/icons/plus.svg')}
                style={{
                    width: 60,
                    aspectRatio: 0.9
                }}
            />

            <Image
                source={require('../../assets/icons/chat.svg')}
                style={{
                    width: 28,
                    aspectRatio: 1
                }}
            />

            <Image
                source={require('../../assets/icons/settings.svg')}
                style={{
                    width: 28,
                    aspectRatio: 1
                }}
            />


        </View>
    )
}
