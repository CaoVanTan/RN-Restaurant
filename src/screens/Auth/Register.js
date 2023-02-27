import React, { useState } from 'react';
import { View, SafeAreaView, Keyboard, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native-paper';
import { Formik } from 'formik';

import MyButton from '../../components/Element/MyButton';
import { useNavigation } from '@react-navigation/native';
import MyTextField from '../../components/Element/MyTextField';
import { theme } from '../../constants/theme';

const DismissKeyBoard = ({ children }) => {
    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>;
};

export default function Register() {
    const navigate = useNavigation();
    const [showPassword, setShowPassword] = useState(true);

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
                                initialValues={{ email: 'cvtan', password: 'cvtan' }}
                                onSubmit={async (values) => {
                                    const jsonValue = JSON.stringify(values);
                                    await AsyncStorage.setItem('@access_token', jsonValue).then((res) => {
                                        navigate.navigate('OnBoardding');
                                    });
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
                                            placeholder="Mật khẩu"
                                            rightIcon={showPassword ? 'eye-off' : 'eye'}
                                            onPressRightIcon={() => setShowPassword(!showPassword)}
                                            secure={showPassword}
                                        />
                                        <View style={{ marginTop: 25 }}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    color: theme.colors.backdrop,
                                                    paddingHorizontal: 10,
                                                }}
                                            >
                                                Bằng cách đăng ký bạn đồng ý về{' '}
                                                <Text
                                                    style={{
                                                        color: theme.colors.primary,
                                                        fontWeight: '700',
                                                    }}
                                                >
                                                    Quyền riêng tư{' '}
                                                </Text>
                                                và{' '}
                                                <Text
                                                    style={{
                                                        color: theme.colors.primary,
                                                        fontWeight: '700',
                                                    }}
                                                >
                                                    Chính sách{' '}
                                                </Text>
                                                của chúng tôi
                                            </Text>
                                        </View>
                                        <MyButton
                                            onPress={handleSubmit}
                                            mode="contained"
                                            sx={{ marginTop: 25 }}
                                            title="Đăng ký"
                                            color="secondary"
                                        />
                                        <View
                                            style={{
                                                marginTop: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text>Bạn đã có tài khoản? </Text>
                                            <Text
                                                style={{
                                                    color: theme.colors.primary,
                                                    fontFamily: 'Poppins-Bold',
                                                }}
                                                onPress={() => navigate.navigate('Login')}
                                            >
                                                Đăng nhập
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
