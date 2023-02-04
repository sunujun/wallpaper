import React from 'react';
import { Text } from 'react-native';

export const Typography = ({
    color,
    fontSize,
    children,
}: {
    color?: string;
    fontSize: number;
    children: JSX.Element | string;
}) => {
    return (
        <Text
            style={{
                color: color,
                fontSize: fontSize,
            }}>
            {children}
        </Text>
    );
};
