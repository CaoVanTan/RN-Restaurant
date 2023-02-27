import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { logOut } from '../../../store/AuthReducer';
import { theme } from '../../../constants/theme';

function AccountScreen() {
    const dispatch = useDispatch();

    const buttonList = [
        {
            label: 'Thiết lập tài khoản',
            tagLabel: 'Thay đổi thông tin của bạn',
            leftIcon: 'setting',
            rightIcon: 'right',
        },
        {
            label: 'Lịch sử',
            tagLabel: 'Xem lịch sử đơn hàng của bạn',
            leftIcon: 'flag',
            rightIcon: 'right',
        },
        {
            label: 'Trung tâm cuộc gọi',
            tagLabel: 'Liên hệ với chúng tôi',
            leftIcon: 'customerservice',
            rightIcon: 'right',
        },
        {
            label: 'Đăng xuất',
            tagLabel: 'Đăng xuất và xóa mọi dữ liệu của tài khoản',
            leftIcon: 'logout',
            rightIcon: 'right',
            action: async () => {
                Alert.alert(
                    'Bạn có chắc chắn muốn thoát không?',
                    'Tất cả dữ liệu sẽ bị xóa bao gồm hoạt động đăng nhập, bộ nhớ đệm, danh sách giỏ hàng và thông tin người dùng. Đăng xuất ngay?',
                    [
                        { text: 'Hủy', style: 'cancel', onPress: () => {} },
                        {
                            text: 'Đồng ý',
                            style: 'destructive',
                            onPress: async () => {
                                dispatch(logOut());
                                await AsyncStorage.clear();
                            },
                        },
                    ],
                );
            },
        },
    ];

    return (
        <View style={style.container}>
            <View style={style.qrContainer}>
                <View style={style.imageContainer}>
                    <Image
                        resizeMode="cover"
                        style={style.image}
                        source={require('../../../components/Asset/qr.png')}
                    />
                </View>
                <Text style={style.codeTitleQr}>SHP00078</Text>
                <Text style={style.accountName}>Cao Văn Tân</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <View style={style.accountProgress}>
                            <View style={style.accountProgressTitle}>
                                <Text style={style.valueProgress} variant="headlineMedium">
                                    27
                                </Text>
                                <Text style={style.valueProgressTitle}>Tổng đơn hàng</Text>
                            </View>
                            <View style={style.poin}>
                                <Text style={style.valueProgress} variant="headlineMedium">
                                    6
                                </Text>
                                <Text style={style.valueProgressTitle}>Tổng điểm</Text>
                            </View>
                            <View style={style.accountProgressTitle}>
                                <Text style={style.valueProgress} variant="headlineMedium">
                                    348K
                                </Text>
                                <Text style={style.valueProgressTitle}>Tổng tiền đã tiêu</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {buttonList.map((item, index) => (
                                <TouchableOpacity onPress={item.action} style={style.bottomMenuContainer} key={index}>
                                    <View style={style.listButton}>
                                        <AntDesign name={item.leftIcon} color={theme.colors.primary} size={25} />
                                        <View style={style.listTitle}>
                                            <Text style={style.label}>{item.label}</Text>
                                            <Text style={style.tagLabel}>{item.tagLabel}</Text>
                                        </View>
                                    </View>
                                    <AntDesign name={item.rightIcon} color={theme.colors.primary} size={20} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        marginBottom: 56,
    },
    qrContainer: {
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: '#000',
        elevation: 5,
    },
    imageContainer: {
        backgroundColor: theme.colors.white,
        width: 200,
        height: 200,
        padding: 15,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    codeTitleQr: {
        fontFamily: 'Poppins-Bold',
        fontSize: 21,
        color: theme.colors.white,
        marginTop: 10,
    },
    accountName: {
        fontSize: 21,
        color: theme.colors.white,
        marginTop: -5,
    },
    accountProgress: {
        width: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
        backgroundColor: theme.colors.primary,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    accountProgressTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueProgress: {
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: 'Poppins-Bold',
    },
    valueProgressTitle: {
        color: theme.colors.white,
        fontSize: 16,
    },
    bottomMenuContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listTitle: {
        marginLeft: 15,
    },
    label: {
        fontSize: 18,
        color: theme.colors.primary,
    },
    tagLabel: { marginTop: -5, color: theme.colors.backdrop },
    open: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderEndColor: theme.colors.white,
        borderRightWidth: 1,
        borderStartColor: theme.colors.white,
        borderLeftWidth: 1,
    },
});

export default AccountScreen;
