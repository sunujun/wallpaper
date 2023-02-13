import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    BottomTab: undefined;
    ImageDetail: { url: string };
};

export type BottomTabScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BottomTab'>;
export type ImageDetailScreenRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;
