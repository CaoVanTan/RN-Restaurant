import React from 'react';
import { TouchableOpacity, View, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { FormatCurrency } from '../FormatCurrency';
import { theme } from '../../constants/theme';

const { width } = Dimensions.get('window');

export const SingleProductCard = ({ onPress, data, margin = 2 }) => {
    const item = data;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style.touchableOpacity, { margin: Math.round(width) > 393 ? 5 : margin }]}
        >
            <ImageBackground
                source={require('../../components/Asset/RG.png')}
                resizeMode="center"
                style={style.imageBackground}
            >
                <Image source={{ uri: item.imgLink }} style={style.image} />
            </ImageBackground>

            <View style={style.container}>
                <Text style={{ fontSize: 18 }}>{item.label}</Text>
                <Text style={style.price}>{FormatCurrency(item.price)} đ</Text>
                <View style={[style.iconContainer, { marginBottom: 2 }]}>
                    <View style={style.starIconContainer}>
                        <AntDesign name="star" size={15} color={theme.colors.yellow} />
                        <Text style={style.fisrtTitleIcon}>{item.review}</Text>
                    </View>
                    <View style={style.clockIconContainer}>
                        <AntDesign name="clockcircleo" size={15} color={theme.colors.gray} />
                        <Text style={style.fisrtTitleIcon}>{item.duration || '15 phút'}</Text>
                    </View>
                </View>
                <View style={style.iconContainer}>
                    {item.isDeliver ? (
                        <View style={style.textIcon}>
                            <MaterialIcons
                                name="delivery-dining"
                                size={20}
                                style={style.orderType}
                                color={theme.colors.gray}
                            />
                            <Text style={{ color: theme.colors.gray }}>Giao hàng</Text>
                        </View>
                    ) : null}
                    {item.isDineIn ? (
                        <View style={style.textIcon}>
                            <MaterialIcons
                                name="local-dining"
                                size={20}
                                style={style.orderType}
                                color={theme.colors.gray}
                            />
                            <Text style={{ color: theme.colors.gray }}>Dùng ngay</Text>
                        </View>
                    ) : null}
                </View>
            </View>
        </TouchableOpacity>
    );
};

function ProductCard({ data, onPressItem }) {
    return (
        <ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {data.map((item, index) => {
                    return <SingleProductCard key={index} onPress={() => onPressItem(item)} data={item} />;
                })}
            </View>
            <View style={style.listFooterComponent} />
        </ScrollView>
    );
}

const style = StyleSheet.create({
    touchableOpacity: {
        paddingBottom: 10,
        width: width / 2.21,
    },
    imageBackground: {
        backgroundColor: theme.colors.divider,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 3,
    },
    image: {
        width: width / 2.21,
        height: 150,
        borderRadius: 10,
    },
    container: {
        marginTop: 5,
        paddingBottom: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    fisrtTitleIcon: {
        marginLeft: 6,
        color: theme.colors.gray,
    },
    clockIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    orderType: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 2,
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8,
        marginBottom: 8,
    },
    listFooterComponent: { height: 80, width: '100%' },
});

export default ProductCard;
