import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { Image } from "expo-image";
import { FC } from "react";
import { ScrollView, View } from "react-native";



export const BitcoinDetails: FC = function () {
    return (
        <View style={$.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[$.screen, { paddingHorizontal: 18 }]}>

                    <View
                        style={{
                            backgroundColor: '#1E2230',
                            padding: 15,
                            flexDirection: 'row',
                            gap: 9,
                            borderRadius: 15,
                        }}
                    >
                        <Image
                            source={require('../../assets/icons/bitcoin.svg')}
                            style={{
                                width: 60,
                                aspectRatio: 1
                            }}
                        />

                        <View style={{ gap: 3, flex: 1, justifyContent: 'center' }}>
                            <Text size="mlg">$40,900.64</Text>
                            <Text color='primary' size='sm'>+ $508.20 (+0.31)</Text>
                        </View>


                    </View>

                    <View style={[
                        $.row,
                        { justifyContent: 'space-between' }
                    ]}>
                        <Button gradient='teal' style={{ width: 'auto' }}>
                            <Text>Global Average</Text>
                        </Button>

                        <View style={[$.row, { gap: 0 }]}>
                            <Button gradient='blue' style={{ width: 'auto', paddingHorizontal: 12 }}>
                                <Image
                                    source={require('../../assets/icons/candle.svg')}
                                    style={{
                                        width: 9,
                                        height: 14,
                                        paddingHorizontal: 6
                                    }}
                                />
                            </Button>
                            <Button gradient='orange' style={{ width: 'auto', paddingHorizontal: 12 }}>
                                <Image
                                    source={require('../../assets/icons/maximize.svg')}
                                    style={{
                                        width: 14,
                                        aspectRatio: 1
                                    }}
                                />
                            </Button>
                        </View>
                    </View>

                    <Image
                        source={require('../../assets/candlesticks.svg')}
                        style={{
                            width: '100%',
                            aspectRatio: 1.2
                        }}
                    />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <Text>1H</Text>
                        <Button gradient='teal' style={{ width: 'auto' }}>
                            <Text>1D</Text>
                        </Button>
                        <Text>1W</Text>
                        <Text>1M</Text>
                        <Text>6M</Text>
                        <Text>1Y</Text>
                        <Text>ALL</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        gap: 18,
                        flexWrap: 'wrap'
                    }}>

                        <InfoCard
                            title="Market Cap"
                            body="20,351.00 BTC"
                        />

                        <InfoCard
                            title="Volume (24 hours)"
                            body="$98,669.59"
                        />

                        <InfoCard
                            title="Available Supply"
                            body="15.897.198"
                        />

                        <InfoCard
                            title="Total Supply"
                            body="27.6412.348"
                        />

                        <InfoCard
                            title="Low (24 hours)"
                            body="$54,987.12"
                        />

                        <InfoCard
                            title="High (24 hours)"
                            body="14,147.96"
                        />

                    </View>

                </View>
            </ScrollView>

            <View style={[$.row, { paddingHorizontal: 18 }]}>
                <Button gradient='violet' style={{ width: 'auto', flex: 1 }}>
                    <Text>Sell</Text>
                </Button>
                <Button gradient='teal' style={{ width: 'auto', flex: 1 }}>
                    <Text>Buy</Text>
                </Button>
            </View>

        </View>
    )
}


type InfoCardProps = {
    title: string
    body: string
}
const InfoCard: FC<InfoCardProps> = function ({
    title,
    body
}) {
    return (
        <View style={{
            padding: 21,
            borderRadius: 15,
            backgroundColor: '#1E2230',
            width: '46%'
        }}>
            <Text color='primary'>{title}</Text>
            <Text size='lg' bold>{body}</Text>
        </View>
    )
}