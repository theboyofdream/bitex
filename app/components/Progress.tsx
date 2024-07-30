import { FC, useRef } from "react";
import { Animated, View } from "react-native";

type ProgressProps = {
    duration?: number
    onLoadingFinished?: ()=>void
}

export const Progress: FC<ProgressProps> = function ({
    duration=1500,
    onLoadingFinished=()=>{}
}) {
    const value = useRef(new Animated.Value(0)).current;

    return (
        <View
            style={{
                width: '100%',
                height: 9,
                backgroundColor: '#fff',
                borderRadius: 100,
                overflow: 'hidden'
            }}
            onLayout={(e) => {
                Animated.timing(value, {
                    toValue: e.nativeEvent.layout.width,
                    duration,
                    useNativeDriver: false,
                }).start(onLoadingFinished);
            }}
        >
            <Animated.View
                style={[
                    {
                        backgroundColor: '#4DE0D9',
                        width: value,
                        height: '100%',
                        borderRadius: 100
                    }
                ]}
            />
        </View>
    )
}