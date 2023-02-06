import React from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../components/Header/Header';
import { PhotoListItem } from '../components/PhotoListItem';
import { IMAGE_LIST } from '../constants';

export const ImageList = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="IMAGE LIST" />
                </Header.Group>
            </Header>
            <FlatList
                style={{ flex: 1 }}
                data={IMAGE_LIST}
                renderItem={({ item }) => {
                    return <PhotoListItem url={item} />;
                }}
            />
        </View>
    );
};
