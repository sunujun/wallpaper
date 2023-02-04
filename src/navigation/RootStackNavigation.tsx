import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageDetail } from '../screens/ImageDetail';
import { BottomTabNavigation } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export const RootStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
            <Stack.Screen name="ImageDetail" component={ImageDetail} />
        </Stack.Navigator>
    );
};
