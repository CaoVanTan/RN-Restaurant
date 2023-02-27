import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../../constants/theme';
import { FormatCurrency } from '../FormatCurrency';

function Card({ title, tag, price, location, review, isDivider, imgUrl, index, source = false }) {
    return (
        <View>
            {isDivider ? <Divider /> : null}
            <View style={{ marginTop: index === 0 ? 0 : 24 }}>
                <View style={{ flex: 1, height: 200 }}>
                    <View
                        style={{
                            backgroundColor: theme.colors.white,
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                            source={
                                source || {
                                    uri: imgUrl,
                                }
                            }
                        />
                    </View>
                </View>

                <Text style={{ marginTop: 10, fontSize: 18, marginBottom: 4 }}>{title} </Text>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{FormatCurrency(price)} đ</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                    >
                        <MaterialIcons
                            name="local-dining"
                            size={25}
                            style={{ marginRight: 5 }}
                            color={theme.colors.gray}
                        />
                        <Text style={{ color: theme.colors.gray }}>Dùng ngay</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                    >
                        <MaterialIcons
                            name="delivery-dining"
                            size={25}
                            style={{ marginRight: 5 }}
                            color={theme.colors.gray}
                        />
                        <Text style={{ color: theme.colors.gray }}>Giao hàng</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="people" size={25} style={{ marginRight: 5 }} color={theme.colors.gray} />
                        <Text style={{ color: theme.colors.gray }}>5</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Card;
