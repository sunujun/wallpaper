import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    );
}

export default App;
