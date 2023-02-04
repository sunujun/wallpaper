import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageList } from '../screens/ImageList';
import { FavoriteImageList } from '../screens/FavoriteImageList';
import { TabIcon } from '../components/TabIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    const getIconName = () => {
                        if (route.name === 'ImageList') {
                            return 'home';
                        } else if (route.name === 'FavoriteImageList') {
                            return 'star';
                        } else {
                            return '';
                        }
                    };
                    const iconName = getIconName();
                    return <TabIcon visibleBadge={true} iconName={iconName} iconColor={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="ImageList" component={ImageList} />
            <Tab.Screen name="FavoriteImageList" component={FavoriteImageList} />
        </Tab.Navigator>
    );
};
