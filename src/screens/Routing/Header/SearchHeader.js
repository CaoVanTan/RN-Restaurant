import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { open } from '../../../store/BottomSheetReducer';
import MyTextField from '../../../components/Element/MyTextField';
import { theme } from '../../../constants/theme';
import Cart from './Cart';

function SearchHeader() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@cart');
            if (value !== null) {
                const jsonValue = JSON.parse(value);
                setCart(jsonValue || []);
                // navigation.navigate('Dashboard');
            } else {
                setCart([]);
                // navigation.navigate('AuthRouteStack');
            }
        } catch (e) {
            // error reading value
        }
    };

    /// stackoverflow Start
    /// question : https://stackoverflow.com/questions/60182942/useeffect-not-called-in-react-native-when-back-to-screen
    /// answer by Nitesh Tosniwal : https://stackoverflow.com/users/8663643/nitesh-tosniwal
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            getData();
        }
    }, [isFocused]);
    /// stackoverflow End

    return (
        <View style={style.container}>
            <View style={style.body}>
                <MyTextField
                    placeholder="Tìm đồ ăn mà bạn thích"
                    leftIcon="magnify"
                    fontSize={15}
                    sx={{ flex: 2, marginRight: 10 }}
                />
                <View style={style.iconContainer}>
                    <TouchableOpacity onPress={() => dispatch(open())}>
                        <FontAwesome name="filter" size={25} color={theme.colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('FavoriteList')}>
                        <AntDesign name="heart" size={25} style={style.icon} color={theme.colors.white} />
                    </TouchableOpacity>
                    <Cart onPress={() => navigation.navigate('CartList')} badge={cart.length} />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
    },
    body: {
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 15,
    },
});

export default SearchHeader;
