import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const style = StyleSheet.create({
    containerSplashScreen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

function LoadingSplashScreen({ params }) {
    return (
        <View style={style.containerSplashScreen}>
            <Image
                source={require('../../components/Asset/RC.png')}
                resizeMode="center"
                style={{
                    alignSelf: 'center',
                }}
            />
            <ActivityIndicator size={40} />
        </View>
    );
}

export default LoadingSplashScreen;
