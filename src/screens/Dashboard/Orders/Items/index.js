import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import ListProduct from '../../../../components/Element/ListProduct';
import { theme } from '../../../../constants/theme';

export const EmptyData = ({ firstTitle, secondTitle, thirtTitle }) => {
    const navigation = useNavigation();

    const style = StyleSheet.create({
        containerEmptyData: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
        firstTitle: { color: theme.colors.backdrop, textAlign: 'center' },
        thirtTitle: { color: theme.colors.primary, fontWeight: 'bold' },
    });

    return (
        <View style={style.containerEmptyData}>
            <View>
                <Text variant="headlineMedium" style={style.firstTitle}>
                    {firstTitle}
                </Text>
                <Text variant="titleMedium" style={style.firstTitle}>
                    {secondTitle}{' '}
                    <Text onPress={() => navigation.navigate('Search')} style={style.thirtTitle}>
                        {thirtTitle}
                    </Text>
                </Text>
            </View>
        </View>
    );
};
function Index({ isEmptyCart, totalAmountCart, cart }) {
    const { height } = Dimensions.get('window');
    const style = StyleSheet.create({
        containerListProduct: {
            paddingBottom: 0,
            height: height / 1.2,
        },
    });

    return (
        <View style={style.containerListProduct}>
            {isEmptyCart ? (
                <EmptyData
                    firstTitle="Giỏ hàng của bạn đang trống"
                    secondTitle="tìm đồ ăn phù hợp với bạn"
                    thirtTitle="Tại đây!"
                />
            ) : (
                <ListProduct cancelButtonLabel="Xóa" data={cart} />
            )}
        </View>
    );
}

export default Index;
