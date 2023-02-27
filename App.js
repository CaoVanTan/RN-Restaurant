import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from './src/store/store';
import { Provider } from 'react-redux';
import Routing from './src/screens/Routing';
import { theme } from './src/constants/theme';

export default function App() {
    const queryClient = new QueryClient();

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <Provider store={store}>
                        <Routing />
                    </Provider>
                </NavigationContainer>
            </PaperProvider>
        </QueryClientProvider>
    );
}
