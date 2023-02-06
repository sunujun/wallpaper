import React, { useCallback } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../components/Header/Header';
import { RemoteImage } from '../components/RemoteImage';

export const ImageDetail = () => {
    const { width } = useWindowDimensions();
    const route = useRoute();
    const navigation = useNavigation();

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Button iconName={'arrow-back'} onPress={onPressBack} />
                    <Header.Title title="IMAGE DETAIL" />
                </Header.Group>
            </Header>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <RemoteImage url={route.params.url} width={width} height={width * 1.5} />
            </View>
        </View>
    );
};
