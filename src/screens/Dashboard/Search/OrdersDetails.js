import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, BackHandler, Alert, Dimensions } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import HeaderBack from '../../../components/Element/HeaderBack';
import { theme } from '../../../constants/theme';
import MyButton from '../../../components/Element/MyButton';
import BottomSheetScrollViewComponent from '../../../components/Element/BottomSheetScrollViewComponent';
import { FormatCurrency } from '../../../components/FormatCurrency';
import Seperator from '../../../components/Element/Seperator';

const { width } = Dimensions.get('window');

function Orders(route) {
    const listOrders = [route.route.params];

    const {
        body: { items, type },
        backPath: { parent, child },
    } = listOrders[0];
    const totalPayment = items.length <= 0 ? 0 : items.map((i) => i.price * i.quantity).reduce((x, y) => x + y);
    const navigate = useNavigation();
    const sheetRef = useRef(null);

    /// Preventing going back
    useEffect(() => {
        const backAction = () => {
            navigate.navigate(parent, { screen: child });
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    const List = () => {
        return (
            <View style={style.list}>
                {items.map((value, index) => (
                    <View key={index}>
                        <View style={style.containerList}>
                            <View>
                                <Text style={style.label}>{value.label}</Text>
                                <Text>
                                    {value.quantity} x
                                    <Text style={style.priceItem}> {FormatCurrency(value.price)} đ</Text>
                                </Text>
                            </View>
                            <Text style={style.price}>{FormatCurrency(value.price * value.quantity)} đ</Text>
                        </View>
                        <Divider style={style.divider} />
                    </View>
                ))}
            </View>
        );
    };
    return (
        <BottomSheetScrollViewComponent
            readOnly
            title="Danh sách thực đơn của bạn"
            sheetRef={sheetRef}
            cancelLabel="Đóng"
            content={<List />}
        >
            <View style={style.container}>
                <HeaderBack onPressBack={() => navigate.navigate(parent, { screen: child })} title="Đơn đặt hàng" />
                <View style={style.main}>
                    <View>
                        <Text variant="displaySmall" style={style.displayTitle}>
                            Một bước nữa
                        </Text>
                        <Text style={style.displayTitleTag}>
                            Bạn hãy đến chỗ nhân viên thu ngân sau đó hiển thị mã QR cho quy trình thanh toán.
                        </Text>

                        <View style={style.qrContainer}>
                            <Text style={style.qrCode}>INV-UI9909IKJU9989</Text>
                            <View style={style.qr}>
                                <Image
                                    resizeMode="cover"
                                    style={style.images}
                                    source={require('../../../components/Asset/qr.png')}
                                />
                            </View>
                            <Text style={style.totalPaymentTitle}>Tổng thanh toán</Text>
                            <Text style={style.totalPayment}>{FormatCurrency(totalPayment)}đ</Text>
                        </View>
                        <Text style={[style.displayTitleTag, { marginBottom: 20 }]}>
                            Nhân viên thu ngân sẽ quét mã QR để xác minh thanh toán
                        </Text>
                        <View style={style.button}>
                            <MyButton
                                color="error"
                                sx={{ flex: 1 }}
                                onPress={() => navigate.goBack()}
                                title="Hủy đơn hàng"
                            />
                            <Seperator />
                            <MyButton
                                mode="contained"
                                sx={{ flex: 1 }}
                                onPress={() => sheetRef.current.snapToIndex(1)}
                                title="Xem đơn hàng"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </BottomSheetScrollViewComponent>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list: {
        paddingBottom: 75,
    },
    displayTitle: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        color: theme.colors.primary,
    },
    displayTitleTag: {
        textAlign: 'center',
    },
    qrContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    qr: {
        backgroundColor: theme.colors.white,
        width: 250,
        height: 250,
        padding: 15,
        borderWidth: 1,
        borderColor: theme.colors.backdrop,
        borderRadius: 20,
        // shadowColor: '#000',
        // elevation: 10,
    },
    images: { width: '100%', height: '100%' },
    qrCode: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 19,
    },
    totalPaymentTitle: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 17,
    },
    totalPayment: {
        textAlign: 'center',
        fontSize: 19,
        color: theme.colors.primary,
        fontFamily: 'Poppins-Bold',
    },
    containerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        color: theme.colors.primary,
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
    },
    priceItem: {
        color: theme.colors.primary,
    },
    label: {
        fontSize: 17,
        maxWidth: width / 1.7,
    },
    main: {
        flex: 1,
    },
    ItemSeparatorComponent: {
        height: 10,
    },
    divider: {
        marginVertical: 5,
    },
});

export default Orders;
