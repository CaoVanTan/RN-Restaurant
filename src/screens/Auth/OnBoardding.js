import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { register } from '../../store/AuthReducer';
import MyButton from '../../components/Element/MyButton';
import { theme } from '../../constants/theme';

function OnBoardding() {
    const [navTo, setNavTo] = useState('');

    function Hello({ navigation }) {
        const hasUnsavedChanges = Boolean('p');

        useEffect(
            () =>
                navigation.addListener('beforeRemove', (e) => {
                    if (!hasUnsavedChanges) {
                        // If we don't have unsaved changes, then we don't need to do anything
                        return;
                    }

                    // Prevent default behavior of leaving the screen
                    e.preventDefault();

                    // Prompt the user before leaving the screen
                    Alert.alert(
                        'Discard changes?',
                        'You have unsaved changes. Are you sure to discard them and leave the screen?',
                        [
                            { text: "Don't leave", style: 'cancel', onPress: () => {} },
                            {
                                text: 'Discard',
                                style: 'destructive',
                                // If the user confirmed, then we dispatch the action we blocked earlier
                                // This will continue the action that had triggered the removal of the screen
                                onPress: () => navigation.dispatch(e.data.action),
                            },
                        ],
                    );
                }),
            [navigation, hasUnsavedChanges],
        );

        useEffect(() => {
            setNavTo('Welcome');
        }, []);

        return (
            <View style={style.helloContainer}>
                <ImageBackground
                    resizeMode="cover"
                    style={style.fullView}
                    source={require('../../components/Asset/OnBoardingImage-1.jpg')}
                >
                    <View style={style.containerChildren}>
                        <Text variant="displaySmall" style={style.title}>
                            Tất cả món ăn yêu thích của bạn đều ở đây!
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            Đặt hàng từ các nhà hàng địa phương tốt nhất, giao hàng dễ dàng và theo yêu cầu.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    function Welcome({ navigation }) {
        useEffect(() => {
            setNavTo('Finish');
        }, []);

        return (
            <View style={style.finishAndDoneContainer}>
                <ImageBackground
                    resizeMode="cover"
                    style={style.fullView}
                    source={require('../../components/Asset/OnBoardingImage-2.jpg')}
                >
                    <View style={style.containerChildren}>
                        <Text variant="displaySmall" style={style.title}>
                            Đơn đặt hàng miễn phí
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            Giao hàng miễn phí cho khách hàng mới thông qua VNPay và các phương thức thanh toán khác.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    function Finish({ navigation }) {
        useEffect(() => {
            setNavTo('Done');
        }, []);

        return (
            <View style={style.finishAndDoneContainer}>
                <ImageBackground
                    resizeMode="cover"
                    style={style.fullView}
                    source={require('../../components/Asset/OnBoardingImage-3.jpg')}
                >
                    <View style={style.containerChildren}>
                        <Text variant="displaySmall" style={style.title}>
                            Chọn đồ ăn của bạn
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            Dễ dàng tìm thấy loại đồ ăn của bạn và bạn sẽ nhận được hàng một cách nhanh chóng.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    const navigate = useNavigation();
    const AuthNavigationStack = createNativeStackNavigator();
    const dispatch = useDispatch();

    return (
        <View style={style.navigatorContainer}>
            <AuthNavigationStack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
                <AuthNavigationStack.Screen options={{ headerShown: false }} name="Hello" component={Hello} />
                <AuthNavigationStack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
                <AuthNavigationStack.Screen options={{ headerShown: false }} name="Finish" component={Finish} />
            </AuthNavigationStack.Navigator>
            <View style={style.button}>
                {navTo.includes('Done') ? (
                    <MyButton
                        onPress={() => dispatch(register())}
                        title="Bắt đầu"
                        mode="contained"
                        color="primary"
                    />
                ) : (
                    <MyButton
                        onPress={() => navigate.navigate(navTo)}
                        title="Tiếp theo"
                        mode="contained"
                        color="primary"
                    />
                )}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    helloContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        position: 'relative',
    },
    finishAndDoneContainer: { 
        flex: 1, 
        backgroundColor: theme.colors.background 
    },
    fullView: { 
        width: '100%', 
        height: '100%' 
    },
    containerChildren: { 
        padding: 40 
    },
    title: { 
        color: theme.colors.white, 
        fontWeight: 'bold' 
    },
    tag: {
        color: theme.colors.white,
        fontWeight: '600',
    },
    navigatorContainer: { 
        flex: 1 
    },
    button: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5,
        shadowColor: '#000',
        borderRadius: 8,
        backgroundColor: 'white',
    },
});

export default OnBoardding;
