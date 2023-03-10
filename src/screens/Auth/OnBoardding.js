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
                            T???t c??? m??n ??n y??u th??ch c???a b???n ?????u ??? ????y!
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            ?????t h??ng t??? c??c nh?? h??ng ?????a ph????ng t???t nh???t, giao h??ng d??? d??ng v?? theo y??u c???u.
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
                            ????n ?????t h??ng mi???n ph??
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            Giao h??ng mi???n ph?? cho kh??ch h??ng m???i th??ng qua VNPay v?? c??c ph????ng th???c thanh to??n kh??c.
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
                            Ch???n ????? ??n c???a b???n
                        </Text>
                        <Text variant="headlineSmall" style={style.tag}>
                            D??? d??ng t??m th???y lo???i ????? ??n c???a b???n v?? b???n s??? nh???n ???????c h??ng m???t c??ch nhanh ch??ng.
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
                        title="B???t ?????u"
                        mode="contained"
                        color="primary"
                    />
                ) : (
                    <MyButton
                        onPress={() => navigate.navigate(navTo)}
                        title="Ti???p theo"
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
