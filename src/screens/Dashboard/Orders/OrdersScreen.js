import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../../../constants/theme';
import { FormatCurrency } from '../../../components/FormatCurrency';
import { EmptyData } from './Items';

function OrdersScreen() {
    const [tabValue, setTabValue] = useState('delivery');
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigation();

    const tabs = [
        {
            label: 'Giao hàng',
            value: 'delivery',
            icon: 'delivery-dining',
        },
        {
            label: 'Dùng ngay',
            value: 'dine_in',
            icon: 'local-dining',
        },
    ];

    const handlePressOrder = (body) => {
        navigate.navigate('RootDashboard', {
            screen: 'OrdersDetails',
            params: { body, backPath: { parent: 'Dashboard', child: 'Orders' } },
        });
    };

    const getData = async () => {
        setLoading(true);
        try {
            const value = await AsyncStorage.getItem('@orders');
            if (value !== null) {
                const jsonValue = JSON.parse(value);
                setTimeout(() => {
                    console.log(loading, '====');
                    setLoading(false);
                    const filterOrdersByType = jsonValue?.filter((i) => i.type === tabValue);
                    setOrders(filterOrdersByType || []);
                }, 500);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setOrders([]);
                }, 500);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
            // error reading value
        }
    };
    const IsEmptyOrders = () => {
        return (
            <>
                {orders.length <= 0 ? (
                    <EmptyData
                        firstTitle="Bạn không có đơn hàng nào"
                        secondTitle="tìm đồ ăn bạn thích"
                        thirtTitle="Tại đây!"
                    />
                ) : (
                    <FlatList
                        data={orders}
                        ListFooterComponent={<View style={style.footerFlatList} />}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={style.card} onPress={() => handlePressOrder(item)}>
                                    <View style={style.sectionOne}>
                                        <View>
                                            <Text variant="titleMedium">{item.invoice}</Text>
                                            <Text>Được tạo lúc:</Text>
                                            <Text variant="titleMedium" style={style.tag}>
                                                {item.createdAt}
                                            </Text>
                                        </View>
                                        <Text
                                            style={item.status === 'paid' ? style.statusPaid : style.statusUnpaid}
                                            variant="titleSmall"
                                        >
                                            {item.status}
                                        </Text>
                                    </View>
                                    <View style={style.sectionTwo}>
                                        <Text variant="titleMedium" style={style.price}>
                                            {FormatCurrency(item.total)}đ
                                        </Text>
                                        <View>
                                            <Text>Hết hạn lúc</Text>
                                            <Text variant="titleMedium" style={style.tag}>
                                                {item.expiredAt}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />
                )}
            </>
        );
    };
    useEffect(() => {
        getData();
    }, [tabValue]);
    return (
        <View style={style.container}>
            <View style={style.tab}>
                {tabs.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => setTabValue(item.value)}
                        key={index}
                        style={tabValue === item.value ? style.panelActive : style.panelNonActive}
                    >
                        <MaterialIcons
                            name={item.icon}
                            style={style.iconTabs}
                            size={30}
                            color={tabValue === item.value ? theme.colors.primary : theme.colors.backdrop}
                        />
                        <Text
                            style={tabValue === item.value ? style.labelTabActive : style.labelTabNonActive}
                            variant="titleMedium"
                        >
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={style.containerCard}>
                {loading ? (
                    <View style={style.loading}>
                        <ActivityIndicator animating={true} color={theme.colors.primary} size={50} />
                        <Text style={{ marginTop: 20 }}>Please wait</Text>
                    </View>
                ) : (
                    <IsEmptyOrders />
                )}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    tab: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    labelTabActive: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        color: theme.colors.primary,
    },
    labelTabNonActive: {
        textAlign: 'center',
        color: theme.colors.backdrop,
    },
    panelActive: {
        width: '50%',
        borderBottomWidth: 4,
        borderBottomColor: theme.colors.primary,
    },
    panelNonActive: {
        width: '50%',
        borderBottomWidth: 4,
        borderBottomColor: theme.colors.divider,
        paddingBottom: 10,
    },
    card: {
        backgroundColor: theme.colors.white,
        elevation: 5,
        shadowColor: '#000',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    containerCard: {
        flex: 1,
    },
    sectionOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    sectionTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    price: {
        fontFamily: 'Poppins-Medium',
        color: theme.colors.primary,
    },
    footerFlatList: {
        height: 70,
        width: '100%',
    },
    statusUnpaid: {
        backgroundColor: theme.colors.errorBackground,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        fontFamily: 'Poppins-Medium',
        color: theme.colors.errorFont,
        textTransform: 'capitalize',
    },
    statusPaid: {
        backgroundColor: theme.colors.successBackground,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        fontFamily: 'Poppins-Medium',
        color: theme.colors.successFont,
        textTransform: 'capitalize',
    },
    tag: {
        marginTop: -5,
    },
    iconTabs: {
        textAlign: 'center',
    },
});

export default OrdersScreen;
