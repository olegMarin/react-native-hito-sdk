'use strict';

import React  from 'react';
import {
    View,
} from 'react-native';
import {ModalStylesType} from '../types';

interface ModalPropsTypes {
    children?: React.ReactNode;
    style?: ModalStylesType
}

const Modal = (props: ModalPropsTypes) => {
    const {
        children,
        style,
    } = props;

    return(
        <View
            style={{
                wight: style?.wight ? style?.wight : 280,
                height: style?.height ? style?.height : 360,
                backgroundColor: style?.backgroundColor ? style?.backgroundColor : '#eee', //добавить хук темы
                сolor: style?.color ? style?.color : '#333', //добавить хук темы
                borderRadius: style?.borderRadius ? style?.borderRadius : 8,
            }}
        >
            {children}
        </View>
    )
}

export default Modal;