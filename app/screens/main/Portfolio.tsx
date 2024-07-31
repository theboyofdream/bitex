import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { useNavigation } from "@react-navigation/native";
import { Image, ImageSource } from "expo-image";
import { FC } from "react";
import { Pressable, ScrollView, View } from "react-native";



export const Portfolio: FC = function () {
    return (
        <View style={$.screen}>

            <View
                style={{
                    backgroundColor: '#000',
                    padding: 30,
                    margin: 18,
                    borderRadius: 15
                }}
            >
                <Button gradient='violet' badge>
                    <Text>BTC/USD</Text>
                    <Image
                        source={require('../../assets/icons/chevron-right.svg')}
                        style={{
                            width: 7,
                            height: 15,
                            transform: [
                                { rotate: '90deg' }
                            ]
                        }}
                    />
                </Button>

                <Text size='xl' bold>$ 5,781.00</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text size='sm'>+ $248.23 (+0.35)</Text>
                    <Button gradient='pink' badge>
                        <Text>Add Balance</Text>
                    </Button>
                </View>
            </View>

            <View style={[$.row, { paddingHorizontal: 15 }]}>
                <Button gradient='teal' style={{ width: 'auto', flex: 1 }}>
                    <Text>Highest holdings</Text>
                </Button>
                <Button gradient='violet' style={{ width: 'auto', flex: 1 }}>
                    <Text>24 Hours</Text>
                </Button>
            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: 15, gap: 12, paddingBottom: 30 }}>

                    <BitcoinListItem
                        icon={require('../../assets/icons/ripple.svg')}
                        title="Ripple"
                        subTitle="2500 XRP ($230.44)"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/etherium.svg')}
                        title="Etherium"
                        subTitle="24 ETH ($190.19)"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/binance.svg')}
                        title="Binance Coin"
                        subTitle="2 BCN ($901.56)"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/pound.svg')}
                        title="Pound"
                        subTitle="44.000 GBP ($230.44)"
                        price="$12,64.80"
                        percentage={-3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/tether.svg')}
                        title="Tether"
                        subTitle="2 USDT ($901.56)"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                    <BitcoinListItem
                        icon={require('../../assets/icons/bitcoin.svg')}
                        title="Bitcoin Cash"
                        subTitle="0.100000 BTC ($840.64)"
                        price="$12,64.80"
                        percentage={3.84}
                    />

                </View>
            </ScrollView>

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

const BitcoinListItem: FC<BitcoinListItemProps> = function ({
    icon,
    title,
    subTitle,
    price,
    percentage
}) {
    const { navigate } = useNavigation()
    const percentageColor = percentage < 0 ? '#FF73AA' : 'primary'
    return (
        <Pressable
            onPress={() => navigate('bitcoin-details')}
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
                    width: 50,
                    height: 50
                }}
            />

            <View style={{ gap: 3, flex: 1 }}>
                <Text size="mlg">{title}</Text>
                <Text color='muted'>{subTitle}</Text>
            </View>

            <View style={{ gap: 3, alignItems: 'flex-end' }}>
                <Text size="mlg">{price}</Text>
                <Text color={percentageColor}>{percentage > 0 ? '+' : ''}{percentage}%</Text>
            </View>

        </Pressable>
    )
}