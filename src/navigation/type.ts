import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    BottomTab: undefined;
    ImageDetail: { url: string };
};

export type ImageDetailScreenRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;
