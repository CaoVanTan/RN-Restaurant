import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import HeaderBack from '../../../../components/Element/HeaderBack';
import ListProduct from '../../../../components/Element/ListProduct';
import { theme } from '../../../../constants/theme';

function FavoriteList() {
    const navigation = useNavigation();

    const listFavourite = new Array(4).fill({
        images: [[Object], [Object], [Object]],
        imgLink:
            'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isDeliver: true,
        isDineIn: true,
        label: 'Bread',
        price: 2500,
        quantity: 1,
        review: '4.8',
        total: 2500,
    });
    return (
        <View style={style.container}>
            <View style={style.headerBack}>
                <HeaderBack onPressBack={() => navigation.goBack()} title="Yêu thích" />
            </View>
            <ListProduct
                bottom={10}
                data={listFavourite}
                cancelButtonLabel="Xóa"
                submitButtonLabel="Đặt hàng"
                isFavorite
            />
        </View>
    );
}

const style = StyleSheet.create({
    headerBack: {
        paddingHorizontal: 12,
    },
    container: {
        backgroundColor: theme.colors.white,
        flex: 1,
    },
    title: {
        marginHorizontal: 12,
        marginBottom: 8,
        fontSize: 16,
    },
});

export default FavoriteList;
