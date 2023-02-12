import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';
import store from './src/store/store';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <RootStackNavigation />
            </Provider>
        </NavigationContainer>
    );
}

export default App;
