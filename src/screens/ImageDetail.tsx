import React, { useCallback, useState } from 'react';
import { ActivityIndicator, useWindowDimensions, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'react-native-fs';
import { Header } from '../components/Header/Header';
import { RemoteImage } from '../components/RemoteImage';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Icon } from '../components/Icon';

export const ImageDetail = () => {
    const { width } = useWindowDimensions();
    const route = useRoute();
    const navigation = useNavigation();
    const [downloading, setDownloading] = useState(false);

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onPressDownload = useCallback(async () => {
        setDownloading(true);
        const downloadDest = `${FileSystem.DocumentDirectoryPath}/${new Date().getMilliseconds()}.jpg`;
        const { promise } = FileSystem.downloadFile({
            fromUrl: route.params.url,
            toFile: downloadDest,
        });

        try {
            const { statusCode } = await promise;
            console.log('Finished Downloading', statusCode);
        } catch (_) {}

        setDownloading(false);
    }, [route.params.url]);

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
            <Button onPress={onPressDownload}>
                <View style={{ paddingBottom: 24, backgroundColor: 'black' }}>
                    {downloading ? (
                        <View
                            style={{
                                height: 52,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <ActivityIndicator />
                        </View>
                    ) : (
                        <View
                            style={{
                                height: 52,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Typography color={'white'}>DOWNLOAD</Typography>
                            <Icon name="download" size={24} color="white" />
                        </View>
                    )}
                </View>
            </Button>
        </View>
    );
};
