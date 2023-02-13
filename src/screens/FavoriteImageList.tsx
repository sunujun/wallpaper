import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { PhotoListItem } from '../components/PhotoListItem';
import { RootState } from '../store/store';

export const FavoriteImageList = () => {
    const imageList = useSelector((state: RootState) => state.favorite.favoriteList);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="FAVORITE" />
            </Header>
            <FlatList
                style={{ flex: 1 }}
                data={imageList}
                renderItem={({ item }) => {
                    return <PhotoListItem url={item} />;
                }}
            />
        </View>
    );
};
