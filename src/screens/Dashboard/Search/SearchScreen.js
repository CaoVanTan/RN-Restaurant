import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../store/BottomSheetReducer';
import { theme } from '../../../constants/theme';
import ProductCard from '../../../components/Element/ProductCard';
import { product, category } from '../../../../mockup';
import BottomSheetScrollViewComponent from '../../../components/Element/BottomSheetScrollViewComponent';
import Filter from './Filter';
import Chip from '../../../components/Element/Chip';

function SearchScreen({ navigation }) {
    const [selectedCategory, setSelectedIdCategory] = useState(null);
    const navigate = useNavigation();
    const bottomSheet = useSelector((props) => props.bottomSheet);
    const dispatch = useDispatch();

    const onPressItem = (i) => {
        navigate.navigate('RootDashboard', { screen: 'ProductDetail', params: { i } });
    };

    const sheetRef = useRef(null);
    useEffect(() => {
        if (bottomSheet.sheetRef) {
            sheetRef.current.snapToIndex(1);
        }
    }, [bottomSheet.sheetRef]);

    return (
        <BottomSheetScrollViewComponent
            onClose={() => dispatch(close())}
            title="Lọc"
            sheetRef={sheetRef}
            submitLabel="Áp dụng"
            cancelLabel="Đóng"
            content={<Filter />}
        >
            <View style={style.container}>
                <View style={style.chipContainer}>
                    <Chip
                        data={category}
                        selectedCategory={selectedCategory}
                        setSelectedIdCategory={setSelectedIdCategory}
                        keyExtractor={(item) => item.value}
                    />
                </View>
                <View style={style.productCardContainer}>
                    <ProductCard onPressItem={onPressItem} data={product} />
                </View>
            </View>
        </BottomSheetScrollViewComponent>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        marginBottom: -24,
    },
    chipContainer: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    productCardContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
});

export default SearchScreen;
