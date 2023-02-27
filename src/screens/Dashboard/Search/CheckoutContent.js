import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../../../constants/theme';
import { FormatCurrency } from '../../../components/FormatCurrency';

function CheckoutContent({ tabs, setTabs, total }) {
    return (
        <View>
            <View style={style.titleContainer}>
                <Text>
                    Chọn đơn đặt hàng của bạn để ăn tại chỗ hoặc giao hàng, và tận hưởng những lợi ích khác nhau của
                    từng lựa chọn.
                </Text>
            </View>
            <View style={style.boxContainer}>
                <TouchableOpacity
                    onPress={() => setTabs('delivery')}
                    style={[
                        style.box,
                        {
                            backgroundColor: tabs?.includes('delivery')
                                ? theme.colors.primary
                                : theme.colors.background,
                        },
                    ]}
                >
                    <MaterialIcons
                        name="delivery-dining"
                        size={50}
                        color={tabs?.includes('delivery') ? theme.colors.white : theme.colors.primary}
                    />

                    <Text
                        style={[
                            style.tabTitle,
                            {
                                color: tabs?.includes('delivery') ? theme.colors.white : theme.colors.primary,
                            },
                        ]}
                    >
                        Đặt hàng
                    </Text>
                </TouchableOpacity>
                <View style={style.separator} />
                <TouchableOpacity
                    onPress={() => setTabs('dine_in')}
                    style={[
                        style.box,
                        {
                            backgroundColor: tabs?.includes('dine_in') ? theme.colors.primary : theme.colors.background,
                        },
                    ]}
                >
                    <MaterialIcons
                        name="local-dining"
                        size={50}
                        color={tabs?.includes('dine_in') ? theme.colors.white : theme.colors.primary}
                    />
                    <Text
                        style={[
                            style.tabTitle,
                            {
                                color: tabs?.includes('dine_in') ? theme.colors.white : theme.colors.primary,
                            },
                        ]}
                    >
                        Dùng ngay
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={style.payment}>
                <Text>
                    Tổng số tiền cần thanh toán của bạn là
                    <Text style={style.total}> {FormatCurrency(total)} đ</Text>
                </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    box: {
        justifyContent: 'center',
        borderColor: theme.colors.primary,
        borderWidth: 1,
        flex: 1,
        height: 100,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
    },
    boxContainer: {
        flexDirection: 'row',
    },
    separator: {
        height: '100%',
        width: 20,
    },
    tabTitle: {
        color: theme.colors.white,
    },
    titleContainer: {
        marginBottom: 20,
    },
    payment: {
        marginTop: 10,
    },
    total: {
        color: theme.colors.primary,
        fontFamily: 'Poppins-Bold',
    },
});

export default CheckoutContent;
