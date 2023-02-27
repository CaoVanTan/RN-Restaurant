import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import BottomSheetScrollViewComponent from '../../../../components/Element/BottomSheetScrollViewComponent';
import Items from '../../../Dashboard/Orders/Items';
import CheckoutContent from '../../../Dashboard/Search/CheckoutContent';
import { theme } from '../../../../constants/theme';
import HeaderBack from '../../../../components/Element/HeaderBack';
import MyButton from '../../../../components/Element/MyButton';

function CartList() {
    const navigation = useNavigation();
    const [tabs, setTabs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const totalAmountCart = cart?.length <= 0 ? 0 : cart?.map((i) => i?.total).reduce((a, b) => a + b);
    const isEmptyCart = cart?.length <= 0;
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@cart');
            const valueOrders = await AsyncStorage.getItem('@orders');
            if (value !== null || valueOrders !== null) {
                const jsonValue = JSON.parse(value);
                const jsonValueOrders = JSON.parse(valueOrders);
                setTimeout(() => {
                    setLoading(false);
                    setCart(jsonValue || []);
                    setOrders(jsonValueOrders || []);
                }, 2000);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setCart([]);
                    setOrders([]);
                }, 2000);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
            // error reading value
        }
    };
    const randomNUm = Math.floor(Math.random() * 999 + 1);
    const handleSubmit = async () => {
        const clone = [...orders];
        const body = {
            items: cart,
            createdAt: new Date().toISOString(),
            expiredAt: '01:34:00',
            id: randomNUm + 1,
            type: tabs,
            invoice: `ORDER - INV${1}`,
            total: totalAmountCart,
            status: 'Chưa thanh toán',
        };
        clone.push(body);
        const data = JSON.stringify(clone);
        await AsyncStorage.setItem('@orders', data)
            .then(async (res) => {
                await AsyncStorage.removeItem('@cart');
                navigation.navigate('RootDashboard', {
                    screen: 'OrdersDetails',
                    params: { body, backPath: { parent: 'Dashboard', child: 'Search' } },
                });
            })
            .catch((error) => {
                console.log(error, 'Error');
            });
    };
    useEffect(() => {
        getData();
    }, []);
    const sheetRef = useRef(null);

    return (
        <BottomSheetScrollViewComponent
            triggerCallBack={tabs}
            title="Chọn kiểu đặt hàng"
            sheetRef={sheetRef}
            submitLabel="Thanh toán"
            cancelLabel="Hủy"
            onPressSubmit={handleSubmit}
            content={<CheckoutContent total={totalAmountCart} tabs={tabs} setTabs={setTabs} />}
        >
            <View style={style.container}>
                <View style={style.headerBack}>
                    <HeaderBack onPressBack={() => navigation.goBack()} title="Giỏ hàng" />
                </View>
                <View style={style.sectionTitle}>
                    <Text style={style.title}>Danh sách đơn hàng</Text>
                    <Button
                        disabled={isEmptyCart}
                        onPress={async () =>
                            Alert.alert('Bạn có chắc chắn muốn xóa?', 'Tất cả đơn hàng của bạn sẽ bị xóa.', [
                                {
                                    text: 'Hủy',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Đồng ý',
                                    onPress: async () => {
                                        await AsyncStorage.removeItem('@cart');
                                        getData();
                                    },
                                },
                            ])
                        }
                        textColor={theme.colors.error}
                        mode="text"
                    >
                        Xóa tất cả
                    </Button>
                </View>
                <View style={style.cartList}>
                    {loading ? (
                        <View style={style.titleLoadingContainer}>
                            <ActivityIndicator animating={true} color={theme.colors.primary} size={50} />
                            <Text style={style.titleLoading}>Vui lòng chờ</Text>
                        </View>
                    ) : (
                        <Items cart={cart} isEmptyCart={isEmptyCart} totalAmountCart={totalAmountCart} />
                    )}
                </View>
                <View style={style.buttonContainer}>
                    <MyButton
                        disabled={cart?.length <= 0}
                        mode="contained"
                        onPress={() => sheetRef.current?.snapToIndex(1)}
                        title={`Thanh toán`}
                    />
                </View>
            </View>
        </BottomSheetScrollViewComponent>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    title: {
        fontSize: 18,
    },
    titleLoading: {
        marginTop: 20,
    },
    titleLoadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: theme.colors.white,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    cartList: {
        flex: 1,
    },
    sectionTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerBack: {
        paddingHorizontal: 10,
    },
});

export default CartList;
