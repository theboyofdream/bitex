import { FC } from "react";
import { ColorValue, Text as RNText, TextProps as RNTextProps } from "react-native";


const TEXT_SIZES = {
    xxl: 50,
    xl: 30,
    lg: 22,
    mlg: 18,
    md: 16,
    sm: 14,
    xs: 12
}

const TEXT_COLORS = {
    primary: '#4DE0D9',
    normal: '#FFFFFF',
    // yellow: '#FDAE67',
    muted: '#8A8D9F',
    danger: '#FF73AA'
}

type TextProps = RNTextProps & {
    size?: keyof typeof TEXT_SIZES
    color?: ColorValue | keyof typeof TEXT_COLORS
    bold?: boolean
    center?: boolean
}

export const Text: FC<TextProps> = function ({
    size = 'md',
    color = 'normal',
    bold = false,
    center = false,
    style,
    ...props
}) {
    let clr = TEXT_COLORS['normal']
    if(TEXT_COLORS[color]){
        clr = TEXT_COLORS[color]
    }else{
        clr = color
    }
    return (
        <RNText
            {...props}
            style={[
                {
                    color: clr,
                    fontSize: TEXT_SIZES[size],
                    fontWeight: bold ? 'bold' : 'normal',
                    textAlign: center ? 'center' : 'auto',
                    verticalAlign: center ? 'middle' : 'top'
                },
                style
            ]}
        />
    )
}

