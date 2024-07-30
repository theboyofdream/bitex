import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const fontSize = (size:number) => size / fontScale;

export const $ = StyleSheet.create({
    screen: {
        flex: 1,
        gap: 18,
        backgroundColor: '#191C26'
    },
    col:{
        gap:9,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        gap:9
    },

    // 
    // justifyCenter: {
    //     justifyContent: 'center'
    // },
    // itemsCenter: {
    //     alignItems: 'center'
    // },
    // flex1: {
    //     flex: 1
    // },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1:{
        fontSize: fontSize(50),
        fontWeight: 'bold',
        color:'#4DE0D9'
    },

    muted:{
        color: '#A6A3B8'
    }

})

export default $