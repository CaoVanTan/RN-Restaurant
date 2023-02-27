import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { ChipWrap } from '../../../components/Element/Chip';
import { category } from '../../../../mockup';
import SliderComponent from '../../../components/Element/SliderComponent';

function Filter() {
    const [selectedCategory, setSelectedIdCategory] = useState(null);

    return (
        <View>
            <View>
                <Text variant="titleMedium">Lọc theo loại đồ ăn</Text>
                <ChipWrap
                    data={category}
                    selectedCategory={selectedCategory}
                    setSelectedIdCategory={setSelectedIdCategory}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text variant="titleMedium">Chọn mức giá</Text>
                <SliderComponent />
            </View>
        </View>
    );
}

export default Filter;
