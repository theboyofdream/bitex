import { Button } from "../../components/Button";
import { Progress } from "../../components/Progress";
import { Text } from "../../components/Text";
import $ from "../../globalStyle";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";


export const ScanQR: FC = function () {
    return (
        <View style={[$.screen, {
            justifyContent: 'space-around',
            alignItems: 'center'
        }]}>
            <Text center color='muted'>
                {'Place QR code inside the frame\nto scan please avoid shake to get results\nquickly'}
            </Text>
            <Image
                source={require('../../assets/qr.svg')}
                style={{
                    width: 250,
                    aspectRatio: 1
                }}
            />

            <View style={{
                gap: 18,
                alignItems: 'center',
                maxWidth: 300
            }}>
                <Progress
                    duration={5000}
                />
                <Text center>Scanning...</Text>

            </View>
            
            <Button gradient='teal' style={{maxWidth:350}}>
                <Text>Place code</Text>
            </Button>
            <View />
        </View>
    )
}