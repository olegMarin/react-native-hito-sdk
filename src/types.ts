import type {
    RegisteredStyle,
    StyleProp,
 } from 'react-native/Libraries/StyleSheet/StyleSheet';

type ModalStylesType = {
    wight?: `${string}%` | number;
    height?: `${string}%` | number;
    backgroundColor?: `#${string}`;
    color?: `#${string}`;
    borderRadius?: number;
}
 
type WraperCenteringStylesType = {
    flexDirection: 'column' | 'row';
    //justifyContent: StyleProp<'justifyContent'>,
    justifyContent: 'flex-start' | 'flex-end' | 'center',
    alignItems: 'flex-start' | 'flex-end' | 'center'

}

export {ModalStylesType, WraperCenteringStylesType};