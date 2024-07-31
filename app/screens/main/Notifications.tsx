import { Text } from "@/components/Text";
import $ from "@/globalStyle";
import { Image, ImageSource } from "expo-image";
import { FC } from "react";
import { View } from "react-native";

export const Notification: FC = function () {
    return (
        <View style={$.screen}>

            <List
                icon={require('@/assets/icons/eth-received.svg')}
                title="ETH received"
                text="0.08 ETH Received"
                dayago={2}
            />

            <List
                icon={require('@/assets/icons/payment-pink.svg')}
                title="Payment"
                text="Thank you! Your transaction is completed."
            />

            <List
                icon={require('@/assets/icons/promotion.svg')}
                title="Promotion"
                text="Invite friends - Get 1 coupons each!"
            />

            <List
                icon={require('@/assets/icons/new-coin.svg')}
                title="New Coin"
                text="New bid 0.2 ETH"
                dayago={5}
            />

            <List
                icon={require('@/assets/icons/payment.svg')}
                title="Payment"
                text="Thank you! Your transaction is completed."
            />

        </View>
    )
}



type ListProps = {
    icon: string | number | string[] | ImageSource | ImageSource[] | null | undefined
    title: string
    text: string
    dayago?: number
}
const List: FC<ListProps> = function ({
    icon,
    title,
    text,
    dayago
}) {
    return (
        <View style={[
            $.row,
            {
                padding: 12,
                paddingVertical: 18,
                marginHorizontal: 18,
                backgroundColor: '#1E2230',
                borderRadius: 12
            }
        ]}>
            <Image
                source={icon}
                style={{
                    width: 50,
                    aspectRatio: 1
                }}
            />
            <View style={{ flex: 1 }}>
                <Text size="lg" style={{ flex: 1 }}>{title}</Text>
                <View style={[$.row, { justifyContent: 'space-between' }]}>
                    <Text ellipsizeMode='tail' numberOfLines={1} size="sm">{text}</Text>
                    {
                        dayago &&
                        <Text size="sm">{dayago} days ago</Text>
                    }
                </View>
            </View>
        </View>
    )
}


