import { Text } from "@/components/Text";
import { ForgotPassword } from "@/screens/auth/ForgotPassword";
import { SelectLocation } from "@/screens/auth/SelectLocation";
import { CreatePassword } from "@/screens/auth/sign_up/CreatePassword";
import { OtpVerification } from "@/screens/auth/sign_up/OtpVerification";
import { SignUpWithPhone } from "@/screens/auth/sign_up/SignUpWithPhone";
import { SignIn } from "@/screens/auth/SignIn";
import { BitcoinDetails } from "@/screens/main/BitcoinDetails";
import { Home } from "@/screens/main/Home";
import { MarketTrends } from "@/screens/main/MarketTrends";
import { Notification } from "@/screens/main/Notifications";
import { Portfolio } from "@/screens/main/Portfolio";
import { OnboardingStep1 } from "@/screens/onboarding/Step1";
import { OnboardingStep2 } from "@/screens/onboarding/Step2";
import { OnboardingStep3 } from "@/screens/onboarding/Step3";
import { ProfileDetails } from "@/screens/settings/ProfileDetails";
import { ScanQR } from "@/screens/settings/ScanQR";
import { Settings } from "@/screens/settings/Settings";
import { SplashScreen } from "@/screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";


type ROUTES = {
    'splash-screen': undefined,
    'onboarding-step-1': undefined,
    'onboarding-step-2': undefined,
    'onboarding-step-3': undefined,
    'sign-in': undefined,
    'sign-up-with-mobile': undefined,
    'verify-otp': { mobile: string },
    'create-password': undefined,
    'forgot-password': undefined,
    'select-location': undefined,
    'home': undefined,
    'market-trends': undefined,
    'portfolio': undefined,
    'bitcoin-details': undefined,
    'settings': undefined,
    'scan-qr': undefined,
    'profile-details': undefined,
    'notifications': undefined,
}

type HEADER_OPTIONS = 'back' | 'title' | 'notification' | 'menu' | 'search' | 'dot-menu' | 'favourite'
const ROUTE_HEADER_OPTIONS: { [key in keyof ROUTES]: Array<HEADER_OPTIONS> } = {
    'splash-screen': [],
    'onboarding-step-1': [],
    'onboarding-step-2': [],
    'onboarding-step-3': [],
    'sign-in': ['back', 'title'],
    'sign-up-with-mobile': ['back', 'title'],
    'verify-otp': ['back', 'title'],
    'create-password': ['back', 'title'],
    'forgot-password': ['back', 'title'],
    'select-location': ['back', 'title'],
    'home': ['menu', 'title', 'notification'],
    'market-trends': ['back', 'title', 'search'],
    'portfolio': ['back', 'title', 'dot-menu'],
    'bitcoin-details': ['back', 'title', 'favourite'],
    'settings': ['back', 'title'],
    'scan-qr': ['back', 'title'],
    'profile-details': ['back', 'title'],
    'notifications': ['back', 'title'],
}

const Stack = createNativeStackNavigator<ROUTES>()

export const StackNavigation: FC = function () {
    return (
        <Stack.Navigator
            // initialRouteName={'bitcoin-details'}
            screenOptions={{
                orientation: 'portrait_up',
                header({ navigation, options, route }) {
                    const headerOptions = ROUTE_HEADER_OPTIONS[route.name as keyof typeof ROUTE_HEADER_OPTIONS]
                    return (
                        <View style={{
                            backgroundColor: '#191C26',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 9,
                            paddingVertical: 18,
                        }}>
                            {
                                headerOptions.includes('menu') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        padding: 9,
                                        paddingVertical: 10,
                                        borderRadius: 1000
                                    }}
                                    onPress={() => {
                                        navigation.navigate('settings')
                                    }}
                                >
                                    <Image
                                        source={require('@/assets/icons/menu.svg')}
                                        style={{
                                            width: 21,
                                            aspectRatio: 1.25,
                                            tintColor: '#ffffff90'
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            {
                                headerOptions.includes('back') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        backgroundColor: '#000',
                                        padding: 9,
                                        paddingVertical: 10,
                                        borderRadius: 1000
                                    }}
                                    onPress={() => {
                                        navigation.canGoBack() && navigation.goBack()
                                    }}
                                >
                                    <Image
                                        source={require('@/assets/icons/back.svg')}
                                        style={{
                                            width: 18,
                                            aspectRatio: 1.25
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            {
                                headerOptions.includes('title') &&
                                <Text size="lg" center style={{
                                    flex: 1,
                                    // transform: [
                                    //     { translateX: 0 }
                                    // ]
                                }}>{options.title}</Text>
                            }
                            {headerOptions.includes('search') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        backgroundColor: '#000',
                                        padding: 9,
                                        paddingVertical: 10,
                                        borderRadius: 1000
                                    }}
                                    onPress={()=>navigation.navigate('scan-qr')}
                                >
                                    <Image
                                        source={require('@/assets/icons/search.svg')}
                                        style={{
                                            width: 24,
                                            aspectRatio: 1.25,
                                            tintColor: '#4DE0D9'
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            {headerOptions.includes('favourite') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        backgroundColor: '#000',
                                        padding: 9,
                                        paddingVertical: 10,
                                        borderRadius: 1000
                                    }}
                                >
                                    <Image
                                        source={require('@/assets/icons/favorite.svg')}
                                        style={{
                                            width: 24,
                                            aspectRatio: 1,
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            {headerOptions.includes('notification') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        backgroundColor: '#000',
                                        padding: 9,
                                        paddingVertical: 10,
                                        borderRadius: 1000
                                    }}
                                    onPress={()=>navigation.navigate('notifications')}
                                >
                                    <Image
                                        source={require('@/assets/icons/bell-badge.svg')}
                                        style={{
                                            width: 24,
                                            aspectRatio: 0.9,
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            {headerOptions.includes('dot-menu') &&
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        backgroundColor: '#000',
                                        padding: 9,
                                        paddingVertical: 10,
                                        paddingHorizontal: 18,
                                        borderRadius: 1000
                                    }}
                                >
                                    <Image
                                        source={require('@/assets/icons/dot-menus.svg')}
                                        style={{
                                            width: 3,
                                            height: 18,
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            <View />
                        </View>
                    )
                },
            }}
        >

            <Stack.Screen name='splash-screen' component={SplashScreen} />

            <Stack.Screen name='onboarding-step-1' component={OnboardingStep1} />
            <Stack.Screen name='onboarding-step-2' component={OnboardingStep2} />
            <Stack.Screen name='onboarding-step-3' component={OnboardingStep3} />

            <Stack.Screen name='sign-in' options={{ title: 'Sign In' }} component={SignIn} />
            <Stack.Screen name='sign-up-with-mobile' options={{ title: 'Sign Up' }} component={SignUpWithPhone} />
            <Stack.Screen name='verify-otp' options={{ title: 'OTP Verification' }} component={OtpVerification} />
            <Stack.Screen name='create-password' options={{ title: 'Create password' }} component={CreatePassword} />
            <Stack.Screen name='forgot-password' options={{ title: 'Forget Password' }} component={ForgotPassword} />
            <Stack.Screen name='select-location' options={{ title: 'Select Location' }} component={SelectLocation} />

            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='market-trends' options={{ title: 'Market Trends' }} component={MarketTrends} />
            <Stack.Screen name='portfolio' options={{ title: 'Portfolio' }} component={Portfolio} />
            <Stack.Screen name='bitcoin-details' options={{ title: 'Bitcoin (BTC)' }} component={BitcoinDetails} />
            <Stack.Screen name='settings' options={{ title: 'Settings' }} component={Settings} />
            <Stack.Screen name='scan-qr' options={{ title: 'Scan QR code' }} component={ScanQR} />
            <Stack.Screen name='profile-details' options={{ title: 'Profile Details' }} component={ProfileDetails} />
            <Stack.Screen name='notifications' options={{ title: 'Notifications' }} component={Notification} />
        </Stack.Navigator>
    )
}


declare global {
    namespace ReactNavigation {
        interface RootParamList extends ROUTES { }
    }
}


export type ScreenProps<T extends keyof ROUTES> = NativeStackScreenProps<ROUTES, T>;





