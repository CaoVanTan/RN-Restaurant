import { MD3LightTheme as DefaultTheme, TextInput, configureFonts } from 'react-native-paper';

const fontConfig = {
    fontFamily: 'Poppins-Regular',
};

export const theme = {
    ...DefaultTheme,
    custom: <TextInput />,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...DefaultTheme.colors,
        primary: '#00b14fff',
        lightPrimary: '#d1fae3',
        secondary: '#e7a518ff',
        typography: '#0d0d0d',
        greenTeal: '#00e673',
        gray: '#676767',
        brown: '#795548',
        aqua: '#00e6bf',
        deepPurple: '#673ab7',
        blue: '#2196f3',
        divider: '#d2d2d2',
        white: '#FFFFFF',
        warning: '#ff9800',
        yellow: '#f7c942',
        pink: '#e91e63',
        cyan: '#00bcd4',
        lime: '#cddc39',
        green: '#4caf50',
        error: '#e53935',
        errorBackground: '#FD9E9E',
        errorFont: '#FF3F3F',
        successBackground: '#B1FD9E',
        successFont: '#209F25',
        info: '#29b6f6',
    },
};
