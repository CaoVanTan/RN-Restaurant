import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../components/Element/Card';
import { theme } from '../../../constants/theme';
import MyTextField from '../../../components/Element/MyTextField';
import BannerImageCarousel from './Banner';
import { secondSectionData, dataCard, Ordertype, bannerImage, secondBannerImage } from '../../../../mockup';
import SugestionSection from '../Search/SugestionSection';

function HomeScreen() {
    const navigate = useNavigation();
    const [isScroll, setIsScroll] = useState(true);

    useEffect(() => {
        if (isScroll) {
            setIsScroll(true);
        }
    }, [isScroll]);

    const onPressItem = (i) => {
        navigate.navigate('RootDashboard', { screen: 'ProductDetail', params: { i } });
    };

    return (
        <GestureHandlerRootView>
            <ScrollView style={style.scrollView}>
                <View style={style.inputContainer}>
                    <MyTextField
                        placeholder="Tìm đồ ăn yêu thích của bạn"
                        leftIcon="magnify"
                        fontSize={16}
                        sx={{ flex: 1, justifyContent: 'center' }}
                    />
                </View>

                <BannerImageCarousel isBanner autoPlay mode="parallax" data={bannerImage} />

                <View style={style.viewContainer}>
                    <Text style={style.title}>Chọn theo thể loại</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={style.categoryContainer}>
                        {secondBannerImage.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    style.imageCategoryContainer,
                                    index == secondBannerImage.length - 1 ? { marginRight: 0 } : { marginRight: 12 },
                                ]}
                            >
                                <Image style={style.imageCategory} source={item.path}></Image>
                                <Text style={style.categoryTitle}>{item.label}</Text>
                            </View>
                        ))}
                    </ScrollView>

                    <SugestionSection onPressItem={onPressItem} />

                    <View>
                        <Text style={style.orderTypeTitle}>Bạn muốn gì?</Text>
                        {Ordertype.map((item, index) => (
                            <TouchableOpacity
                                style={[
                                    style.ordertypeContainer,
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    {
                                        backgroundColor: item.color,
                                        marginTop: index === 1 ? 20 : 10,
                                    },
                                ]}
                                key={index}
                            >
                                <MaterialIcons
                                    name={item.icon}
                                    size={50}
                                    style={style.iconOrderType}
                                    color={theme.colors.white}
                                />
                                <Text style={style.titleOrderType}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={style.bundleMenu}>
                        <Text style={style.orderTypeTitle}>Thời gian cho gia đình</Text>
                        <Text style={{ color: theme.colors.primary }}>Xem tất cả</Text>
                    </View>
                    <View>
                        {dataCard.map((x, y) => (
                            <Card
                                key={y}
                                index={y}
                                title={x.title}
                                tag={x.tag}
                                price={x.price}
                                location={x.location}
                                review={x.review}
                                isDivider
                                source={x.path}
                            />
                        ))}
                    </View>

                    <SugestionSection onPressItem={onPressItem} data={secondSectionData} />
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
}
const style = StyleSheet.create({
    scrollView: {
        backgroundColor: theme.colors.white,
        marginBottom: 32,
    },
    inputContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
        alignItems: 'center',
    },
    viewContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginVertical: 10,
        marginHorizontal: 12,
    },
    title: {
        fontSize: 19,
        fontFamily: 'Poppins-Bold',
        marginTop: 12,
    },
    categoryContainer: {
        marginTop: 8,
    },
    imageCategoryContainer: {
        marginRight: 12,
        shadowColor: '#000',
        elevation: 5,
    },
    imageCategory: {
        width: 150,
        height: 75,
        borderRadius: 10,
    },
    categoryTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    orderTypeTitle: {
        fontSize: 19,
        fontFamily: 'Poppins-Bold',
    },
    ordertypeContainer: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconOrderType: { marginRight: 10 },
    titleOrderType: {
        color: theme.colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
    },
    bundleMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 8,
    },
    posterContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    poster: {
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
    },
    posterTitle: {
        color: theme.colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: 23,
        textAlign: 'center',
    },
    posterTag: {
        color: theme.colors.white,
        textAlign: 'center',
    },
});

export default HomeScreen;
