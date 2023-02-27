import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { SingleProductCard } from '../../../components/Element/ProductCard';
import { FormatCurrency } from '../../../components/FormatCurrency';
import { sectionData } from '../../../../mockup';

function SugestionSection({ onPressItem, disabledMArginBottom = false, data = false }) {
    const isData = data || sectionData;

    return (
        <View style={{ marginTop: 20, marginBottom: disabledMArginBottom ? 0 : 12 }}>
            {isData.map((item, index) => {
                return (
                    <View key={index}>
                        <Text style={style.title}>{item.title}</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {item.data.map((content, contentIndex) => (
                                <SingleProductCard
                                    margin={5}
                                    onPress={() => onPressItem(content)}
                                    key={contentIndex}
                                    data={content}
                                />
                            ))}
                        </ScrollView>
                    </View>
                );
            })}
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 19,
        fontFamily: 'Poppins-Bold',
        marginBottom: 6,
    },
});

export default SugestionSection;
