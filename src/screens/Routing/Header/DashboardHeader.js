import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../../../constants/theme';

function DashboardHeader() {
    const [cart, setCart] = useState([]);
    const [username, setUsername] = useState([]);

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

    // const getUsername = async () => {
    //     try {
    //         const username = await AsyncStorage.getItem('@access_token');
    //         if (username !== null) {
    //             const jsonValue = JSON.parse(username);
    //             return jsonValue;
    //         } else {
    //             return 'CVTAN';
    //         }
    //     } catch (error) {
    //         console.warn(error);
    //     }
    // };

    return (
        <View style={style.container}>
            <View style={style.body}>
                <View style={style.containerContent}>
                    <View style={style.content}>
                        <View style={style.avatar}>
                            <Avatar.Image size={50} source={require('../../../assets/image/avatar.png')} />
                        </View>
                        <View>
                            <Text style={style.titleName}>Xin chào, Cao Văn Tân</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="notifications" size={30} color={theme.colors.white} />
                    </TouchableOpacity>
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
        paddingHorizontal: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 100,
    },
    titleName: {
        fontSize: 17,
        color: theme.colors.white,
        marginLeft: 10,
    },
    titleBadge: {
        fontSize: 16,
        color: theme.colors.white,
        marginLeft: 10,
        marginTop: -8,
        fontFamily: 'Poppins-Bold',
    },
});

export default DashboardHeader;
