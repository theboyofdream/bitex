import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { FC } from "react";
import { Dimensions, Pressable, ScrollView, View } from "react-native";
import { BitcoinListItem, Footer } from "./MarketTrends";
import { Image, ImageSource } from "expo-image";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenProps } from "@/navigation/StackNavigation";




export const Home: FC<ScreenProps<'home'>> = function ({ navigation }) {
    const { width } = Dimensions.get('screen')
    let cardWidth = width * 0.8
    if (cardWidth < 350) {
        cardWidth = 350
    }

    return (
        <View style={$.screen}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[$.screen, { paddingHorizontal: 18 }]}>

                    <View style={$.col}>
                        <Text color='primary' size="mlg">Hi Alex Smith</Text>
                        <Text size='lg'>Good Morning</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={$.row}>

                            <LinearGradient
                                colors={["#8DF3ED", "#34D9D1"]}
                                style={{
                                    padding: 30,
                                    borderRadius: 18,
                                    gap: 18,
                                    width: cardWidth
                                }}
                            >
                                <View style={[$.row, { justifyContent: 'space-between' }]}>
                                    <Text color="#fff">Total Wallet Balance</Text>

                                    <View style={$.row}>
                                        <Text color="#fff">USD</Text>
                                        <Image
                                            source={require('@/assets/icons/chevron-right.svg')}
                                            style={{
                                                width: 7,
                                                height: 15,
                                                transform: [
                                                    { rotate: '90deg' }
                                                ],
                                                tintColor: '#fff'
                                            }}
                                        />
                                    </View>
                                </View>
                                <Text color="#fff" size='xl' bold>$705874.40</Text>

                                <View style={{ gap: 6 }}>
                                    <Text color="#fff">Weekly Profit</Text>

                                    <View style={[$.row, { justifyContent: 'space-between' }]}>
                                        <Text color="#fff" size="lg">$1580.78</Text>

                                        <View style={$.row}>
                                            <Image
                                                source={require('@/assets/icons/down-arrow.svg')}
                                                style={{
                                                    width: 20,
                                                    height: 10,
                                                    tintColor: '#fff'
                                                }}
                                            />
                                            <Text color="#fff">+15%</Text>
                                        </View>
                                    </View>

                                </View>

                            </LinearGradient>

                            <LinearGradient
                                colors={['#FAC47F', '#F8A946']}
                                style={{
                                    padding: 30,
                                    borderRadius: 18,
                                    gap: 18,
                                    width: cardWidth
                                }}
                            >
                                <View style={[$.row, { justifyContent: 'space-between' }]}>
                                    <Text color="#fff">Total Wallet Balance</Text>

                                    <View style={$.row}>
                                        <Text color="#fff">USD</Text>
                                        <Image
                                            source={require('@/assets/icons/chevron-right.svg')}
                                            style={{
                                                width: 7,
                                                height: 15,
                                                transform: [
                                                    { rotate: '90deg' }
                                                ],
                                                tintColor: '#fff'
                                            }}
                                        />
                                    </View>
                                </View>
                                <Text color="#fff" size='xl' bold>$705874.40</Text>

                                <View style={{ gap: 6 }}>
                                    <Text color="#fff">Weekly Profit</Text>

                                    <View style={[$.row, { justifyContent: 'space-between' }]}>
                                        <Text color="#fff" size="lg">$1580.78</Text>

                                        <View style={$.row}>
                                            <Image
                                                source={require('@/assets/icons/down-arrow.svg')}
                                                style={{
                                                    width: 20,
                                                    height: 10,
                                                    tintColor: '#fff'
                                                }}
                                            />
                                            <Text color="#fff">+15%</Text>
                                        </View>
                                    </View>

                                </View>

                            </LinearGradient>

                        </View>
                    </ScrollView>

                    <View style={$.col}>

                        <View style={[$.row, { justifyContent: 'space-between' }]}>
                            <Text size='mlg'>Portfolio</Text>
                            <Pressable onPress={() => navigation.navigate('portfolio')}>
                                <Text color='muted'>View All+</Text>
                            </Pressable>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={$.row}>

                                <Pressable
                                    onPress={() => navigation.navigate('bitcoin-details')}
                                    style={{
                                        padding: 30,
                                        borderRadius: 15,
                                        backgroundColor: '#1E2230'
                                    }}
                                >
                                    <View style={$.row}>
                                        <Image
                                            source={require('@/assets/icons/etherium.svg')}
                                            style={{
                                                width: 40,
                                                aspectRatio: 1
                                            }}
                                        />
                                        <Text>Etherium</Text>
                                        <Button gradient='teal' badge>
                                            <Text>+2.40%</Text>
                                        </Button>
                                    </View>

                                    <Text size='xl' bold>$61,671.50</Text>
                                    <Text color='muted'>ETH</Text>

                                </Pressable>

                                <Pressable
                                    onPress={() => navigation.navigate('bitcoin-details')}
                                    style={{
                                        padding: 30,
                                        borderRadius: 15,
                                        backgroundColor: '#1E2230'
                                    }}
                                >
                                    <View style={$.row}>
                                        <Image
                                            source={require('@/assets/icons/bitcoin.svg')}
                                            style={{
                                                width: 40,
                                                aspectRatio: 1
                                            }}
                                        />
                                        <Text>Bitcoin</Text>
                                        <Button gradient='teal' badge>
                                            <Text>+2.40%</Text>
                                        </Button>
                                    </View>

                                    <Text size='xl' bold>$61,671.50</Text>
                                    <Text color='muted'>BTC</Text>

                                </Pressable>

                            </View>
                        </ScrollView>

                        <View style={[$.row, { justifyContent: 'space-around', marginVertical: 15 }]}>
                            <IconButton
                                icon={require('@/assets/icons/send.svg')}
                                title="Send"
                            />
                            <IconButton
                                icon={require('@/assets/icons/receive.svg')}
                                title="Receive"
                            />
                            <IconButton
                                icon={require('@/assets/icons/buy.svg')}
                                title="Buy"
                            />
                            <IconButton
                                icon={require('@/assets/icons/swap.svg')}
                                title="Swap"
                            />
                        </View>

                    </View>

                    <View style={$.col}>
                        <View style={[$.row, { justifyContent: 'space-between' }]}>
                            <Text size='mlg'>Market</Text>
                            <Pressable onPress={() => navigation.navigate('market-trends')}>
                                <Text color='muted'>View All+</Text>
                            </Pressable>
                        </View>

                        <BitcoinListItem
                            icon={require('@/assets/icons/achain.svg')}
                            title="Achain"
                            subTitle="ACH"
                            price="$15,813.20"
                            percentage={-3.84}
                        />

                    </View>


                </View>
            </ScrollView>

            <Footer />
        </View>
    )
}


type IconButtonProps = {
    icon?: string | number | string[] | ImageSource | ImageSource[] | null | undefined
    title: string
}
const IconButton: FC<IconButtonProps> = function ({
    icon,
    title
}) {
    return (
        <View style={[$.col, $.center]}>
            <Image
                source={icon}
                style={{
                    width: 60,
                    aspectRatio: 1
                }}
            />
            <Text>{title}</Text>
        </View>
    )
}



