import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const GRADIENTS = {
    pink: ["#FF9BD0", "#FF73AA"],
    teal: ["#8DF3ED", "#34D9D1"],
    blue: ['#A7D7F2', '#4BC0FF'],
    violet: ["#C1B2FF", "#9B87FF"],
    orange: ['#FFD5CF', '#FE8270']
};


type ButtonProps = TouchableOpacityProps & {
    gradient: keyof typeof GRADIENTS
    badge?: boolean
}


export const Button: FC<ButtonProps> = function ({
    children,
    gradient,
    badge = false,
    onPress,
    style,
    ...props
}) {
    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            activeOpacity={onPress ? 0.6 : 1}
            style={[
                {
                    flexDirection: 'row',
                    borderRadius: 100,
                    overflow: 'hidden',
                    width: badge ? 'auto' : '100%'
                },
                style
            ]}
        >
            <LinearGradient
                locations={[0, 1]}
                colors={GRADIENTS[gradient]}
                style={[
                    {
                        flexDirection: 'row',
                        gap: badge ? 6 : 9,
                        paddingHorizontal: badge ? 12 : 18,
                        paddingVertical: badge ? 6 : 12,
                        width: badge ? 'auto' : '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: 100
                    },
                    style
                ]}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}