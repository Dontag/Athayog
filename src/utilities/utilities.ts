import { Dimensions, StatusBar } from 'react-native';

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const StatusBarHeight: any = StatusBar.currentHeight;

export { images } from './images';

export { colors } from './colors';

export const currency = '\u20B9';