import React, { useState } from 'react';
import { View, SafeAreaView, Keyboard, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';

import MyTextField from '../../components/Element/MyTextField';
import { theme } from '../../constants/theme';
import { login } from '../../store/AuthReducer';
import MyButton from '../../components/Element/MyButton';

export const DismissKeyBoard = ({ children }) => {
    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>;
};

export default function Login() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    return (
        <DismissKeyBoard>
            <View style={styles.container}>
                <View style={{ width: '100%' }}>
                    <View style={{ marginHorizontal: 16, marginVertical: '15%' }}>
                        <Image
                            style={styles.logo}
                            resizeMode="center"
                            source={require('../../components/Asset/RC-flex.png')}
                        />
                        <SafeAreaView>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                onSubmit={async (values) => {
                                    setLoading(true);
                                    try {
                                        if (values.email.includes('cvtan') && values.password.includes('cvtan')) {
                                            const jsonValue = JSON.stringify(values);
                                            await AsyncStorage.setItem('@access_token', jsonValue)
                                                .then((res) => {
                                                    setLoading(false);
                                                    dispatch(login());
                                                })
                                                .catch((err) => console.log(err));
                                        } else {
                                            setLoading(false);
                                            Snackbar.show({
                                                text: 'Email hoặc mật khẩu của bạn không chính xác!',
                                                duration: Snackbar.LENGTH_SHORT,
                                                backgroundColor: theme.colors.error,
                                            });
                                        }
                                    } catch (e) {
                                        console.warn(e);
                                    }
                                }}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View>
                                        <MyTextField
                                            size="large"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            placeholder="Email"
                                        />
                                        <MyTextField
                                            size="large"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            sx={{ marginTop: 16 }}
                                            rightIcon={showPassword ? 'eye-off' : 'eye'}
                                            onPressRightIcon={() => setShowPassword(!showPassword)}
                                            secure={showPassword}
                                            placeholder="Mật khẩu"
                                        />
                                        <View style={{ marginTop: 16 }}>
                                            <Text
                                                style={{
                                                    color: theme.colors.primary,
                                                    fontFamily: 'Poppins-Bold',
                                                    textAlign: 'right',
                                                }}
                                                onPress={() => {}}
                                            >
                                                Quên mật khẩu
                                            </Text>
                                        </View>
                                        <MyButton
                                            onPress={handleSubmit}
                                            mode="contained"
                                            loading={loading}
                                            disabled={loading}
                                            sx={{ marginTop: 24 }}
                                            size="large"
                                            title="Đăng nhập"
                                        />
                                        <View
                                            style={{
                                                marginTop: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text>Bạn chưa có tài khoản? </Text>
                                            <Text
                                                style={{
                                                    color: theme.colors.primary,
                                                    fontFamily: 'Poppins-Bold',
                                                }}
                                                onPress={() => navigate.navigate('Register')}
                                            >
                                                Đăng ký
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </DismissKeyBoard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
    logo: {
        width: '50%',
        alignSelf: 'center',
    },
});
