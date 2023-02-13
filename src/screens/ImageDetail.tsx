import React, { useCallback, useState } from 'react';
import { ActivityIndicator, PermissionsAndroid, Platform, useWindowDimensions, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import * as FileSystem from 'react-native-fs';
import { Header } from '../components/Header/Header';
import { RemoteImage } from '../components/RemoteImage';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Icon } from '../components/Icon';
import { onClickFavorite } from '../actions/favorite';
import { ImageDetailScreenRouteProp } from '../navigation/type';
import { RootState } from '../store/store';

export const ImageDetail = () => {
    const { width } = useWindowDimensions();
    const route = useRoute<ImageDetailScreenRouteProp>();
    const navigation = useNavigation();
    const [downloading, setDownloading] = useState(false);
    const dispatch = useDispatch();

    const onPressFavorite = useCallback(() => {
        dispatch(onClickFavorite(route.params.url));
    }, [dispatch, route.params.url]);

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onPressDownload = useCallback(async () => {
        async function hasAndroidPermission() {
            const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

            const hasPermission = await PermissionsAndroid.check(permission);
            if (hasPermission) {
                return true;
            }

            const status = await PermissionsAndroid.request(permission);
            return status === 'granted';
        }

        setDownloading(true);
        const downloadDest = `${FileSystem.DocumentDirectoryPath}/${new Date().getMilliseconds()}.jpg`;
        const { promise } = FileSystem.downloadFile({
            fromUrl: route.params.url,
            toFile: downloadDest,
        });

        try {
            const { statusCode } = await promise;
            console.log('Finished Downloading', statusCode);
            if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
                setDownloading(false);
                return;
            }
            const result = await CameraRoll.save(downloadDest);
            console.log('result', result);
        } catch (e) {
            console.log('save failed', e);
        }

        setDownloading(false);
    }, [route.params.url]);

    const isFavorite = useSelector((state: RootState) => {
        return state.favorite.favoriteList.filter(item => item === route.params.url).length > 0;
    });

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Button iconName="arrow-back" onPress={onPressBack} />
                    <Header.Title title="IMAGE DETAIL" />
                </Header.Group>
                <Header.Button iconName={isFavorite ? 'heart' : 'heart-outline'} onPress={onPressFavorite} />
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
                            <Typography color="white">DOWNLOAD</Typography>
                            <Icon name="download" size={24} color="white" />
                        </View>
                    )}
                </View>
            </Button>
        </View>
    );
};
