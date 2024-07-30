import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const fontSize = (size:number) => size / fontScale;