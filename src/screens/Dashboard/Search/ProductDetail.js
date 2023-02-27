import React, { useRef, useState, useEffect, useMemo } from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BottomSheetScrollViewComponent from '../../../components/Element/BottomSheetScrollViewComponent';
import { theme } from '../../../constants/theme';
import IconContained from '../../../components/Element/IconContained';
import MyButton from '../../../components/Element/MyButton';
import SugestionSection from './SugestionSection';
import BannerImageCarousel from '../HomeScreen/Banner';
import CheckoutContent from './CheckoutContent';
import { FormatCurrency } from '../../../components/FormatCurrency';
import Chip from '../../../components/Element/Chip';
import { topRated } from '../../../../mockup';
import Seperator from '../../../components/Element/Seperator';

const { width } = Dimensions.get('window');

const ProductDetail = (route) => {
    const sheetRef = useRef(null);
    const [tabs, setTabs] = useState('');
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [offside, setOffside] = useState({ x: 0, y: 0 });
    const [cart, setCart] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigation();
    const { label, images, review, duration, desc, price } = route.route.params.i;

    const [quantity, setQuantity] = useState(1);
    const onAddCart = async () => {
        Snackbar.show({
            text: 'Thêm vào giỏ hàng thành công!',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: theme.colors.primary,
        });
        const clone = [...cart];
        const body = {
            ...route.route.params.i,
            quantity,
            total: price * quantity,
        };
        clone.push(body);
        const jsonValue = JSON.stringify(clone);
        await AsyncStorage.setItem('@cart', jsonValue).then((res) => {
            navigate.goBack();
        });
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@cart');
            const valueOrders = await AsyncStorage.getItem('@orders');
            if (value !== null || valueOrders !== null) {
                const jsonValue = JSON.parse(value);
                const jsonValueOrders = JSON.parse(valueOrders);
                setLoading(false);
                setCart(jsonValue || []);
                setOrders(jsonValueOrders || []);
            } else {
                setCart([]);
            }
        } catch (e) {
            // error reading value
        }
    };

    const randomNUm = Math.floor(Math.random() * 999 + 1);
    const onPressSubmit = async () => {
        const clone = [...orders];
        const currentItem = {
            ...route.route.params.i,
            quantity,
            total: quantity * price,
        };
        const body = {
            items: [currentItem],
            createdAt: new Date().toISOString(),
            expiredAt: '01:34:00',
            id: randomNUm + 1,
            type: tabs,
            invoice: `ORDER - INV${1998}`,
            total: price * quantity,
            status: 'unpaid',
        };
        clone.push(body);
        const data = JSON.stringify(clone);
        await AsyncStorage.setItem('@orders', data)
            .then(async (res) => {
                navigate.navigate('RootDashboard', {
                    screen: 'OrdersDetails',
                    params: { body, backPath: { parent: 'Dashboard', child: 'Search' } },
                });
            })
            .catch((error) => {
                console.log(error, 'Error');
            });
    };
    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        Snackbar.show({
            text: 'Thêm vào danh sách yêu thích thành công!',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: theme.colors.primary,
        });
    };
    const onPressItem = (i) => {
        setOffside((prevValue) => {
            if (Boolean(prevValue.y)) {
                return { x: 0, y: 0 };
            }
            return { x: 0, y: 1 };
        });
        navigate.navigate('RootDashboard', { screen: 'ProductDetail', params: { i } });
    };

    useEffect(() => {
        getData();
    }, []);

    const MemoSugestion = useMemo(() => <SugestionSection onPressItem={onPressItem} />, []);

    return (
        <BottomSheetScrollViewComponent
            title="Chọn kiểu đặt hàng"
            sheetRef={sheetRef}
            onPressSubmit={onPressSubmit}
            submitLabel="Thanh toán"
            cancelLabel="Hủy"
            triggerCallBack={tabs}
            content={<CheckoutContent tabs={tabs} total={price * quantity} setTabs={setTabs} />}
        >
            <View>
                <ScrollView contentOffset={offside}>
                    <BannerImageCarousel isUri data={images} />
                    <View style={style.topIconContained}>
                        <IconContained onPress={() => navigate.goBack()} icon="arrow-back" />
                        <View style={style.topIcon}>
                            <IconContained
                                sx={{ marginRight: 8 }}
                                onPress={() => navigate.navigate('CartList')}
                                icon="shopping-cart"
                                iconColor={theme.colors.primary}
                            />
                            <IconContained
                                sx={{ marginRight: 8 }}
                                onPress={handleFavorite}
                                icon={isFavorite ? 'favorite' : 'favorite-border'}
                                iconColor={theme.colors.primary}
                            />
                            <IconContained
                                // onPress={handleFavorite}
                                // icon={isFavorite ? 'favorite' : 'favorite-border'}
                                icon="share"
                                iconColor={theme.colors.primary}
                            />
                        </View>
                    </View>
                    <View style={style.body}>
                        <Text variant="headlineMedium">{label}</Text>
                        <View style={style.contentContainer}>
                            <View>
                                <View style={style.price}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                        {FormatCurrency(price * quantity)} đ
                                    </Text>
                                </View>
                                <View style={style.firstSection}>
                                    <View style={style.starIconContained}>
                                        <AntDesign name="star" size={20} color={theme.colors.yellow} />
                                        <Text style={style.titleIcon}>{review}</Text>
                                    </View>
                                    <View style={style.clockIconContained}>
                                        <AntDesign name="clockcircleo" size={15} color={theme.colors.gray} />
                                        <Text variant="titleMedium" style={style.titleIcon}>
                                            {duration || '15 phút'}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={style.btnCounter}>
                                <IconButton
                                    icon="minus"
                                    disabled={quantity <= 1}
                                    mode="contained"
                                    containerColor={theme.colors.error}
                                    iconColor={theme.colors.white}
                                    style={style.iconButton}
                                    onPress={() => setQuantity((prev) => prev - 1)}
                                />
                                <View style={style.valueCounter}>
                                    <Text style={style.quantity}>{quantity}</Text>
                                </View>
                                <IconButton
                                    icon="plus"
                                    mode="contained"
                                    containerColor={theme.colors.primary}
                                    iconColor={theme.colors.white}
                                    style={style.iconButton}
                                    onPress={() => setQuantity((prev) => prev + 1)}
                                />
                            </View>
                        </View>
                        <View style={style.chip}>
                            <Chip readOnly data={topRated} keyExtractor={(item) => item.value} />
                        </View>
                        <View style={style.descContainer}>
                            <Text style={style.desc}>Mô tả</Text>
                            <Text>{desc}</Text>
                        </View>
                        <View style={{ marginBottom: 32 }}>{MemoSugestion}</View>
                    </View>
                </ScrollView>
                <View style={style.bottomButton}>
                    <MyButton sx={{ flex: 1 }} title="Thêm vào giỏ" onPress={onAddCart} />
                    <Seperator />
                    <MyButton
                        onPress={() => sheetRef.current.snapToIndex(1)}
                        title="Thanh toán"
                        sx={{ flex: 1 }}
                        mode="contained"
                    />
                </View>
            </View>
        </BottomSheetScrollViewComponent>
    );
};

const style = StyleSheet.create({
    topIconContained: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        padding: 10,
    },
    topIcon: {
        flexDirection: 'row',
    },
    body: {
        padding: 10,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        marginTop: -20,
        backgroundColor: theme.colors.white,
        width: '100%',
        height: '100%',
    },
    firstSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIconContained: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    titleIcon: {
        marginLeft: 4,
        color: theme.colors.gray,
    },
    clockIconContained: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    btnCounter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        borderRadius: 5,
        height: 30,
        width: 30,
    },
    valueCounter: {
        borderColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 20,
    },
    descContainer: {
        marginTop: 20,
    },
    desc: {
        fontSize: 19,
        fontFamily: 'Poppins-Bold',
    },
    bottomButton: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: 'absolute',
        bottom: 0,
        backgroundColor: theme.colors.white,
        borderTopColor: theme.colors.divider,
        borderTopWidth: 1,
    },
    chip: {
        marginTop: 10,
    },
});

export default ProductDetail;
