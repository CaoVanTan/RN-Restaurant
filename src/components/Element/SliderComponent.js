import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { theme } from '../../constants/theme';
import { FormatCurrency } from '../FormatCurrency';

function SliderComponent() {
    const [state, setState] = useState([10000, 30000]);
    const trackMarkLabel = [
        { value: 0, label: '0K' },
        { value: 20000, label: '20K' },
        { value: 40000, label: '40K' },
        { value: 60000, label: '60K' },
        { value: 80000, label: '80K' },
        { value: 100000, label: '100K' },
    ];

    return (
        <View style={style.container}>
            <Slider
                maximumValue={100000}
                minimumValue={0}
                step={10000}
                renderTrackMarkComponent={(i) => {
                    return (
                        <View>
                            <View style={style.markHeight} />
                            <Text>{trackMarkLabel[i]?.label}</Text>
                        </View>
                    );
                }}
                trackMarks={trackMarkLabel.map((i) => i?.value)}
                thumbStyle={{ backgroundColor: theme.colors.primary }}
                maximumTrackTintColor={theme.colors.lightPrimary}
                minimumTrackTintColor={theme.colors.primary}
                trackStyle={style.trackStyle}
                value={state}
                onValueChange={(value) => setState(value)}
            />
            <Text style={style.textBetween}>
                Mức giá: {FormatCurrency(state[0])} - {FormatCurrency(state[1])}
            </Text>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textBetween: {
        textAlign: 'center',
        marginTop: 24,
    },
    trackStyle: {
        height: 8,
    },
    markHeight: {
        width: 5,
        height: 40,
        marginTop: 11,
        borderRadius: 4,
    },
});
export default SliderComponent;
