import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';

export const Typography = StyleSheet.create({
  h1: {
    fontFamily: 'Poppins-Light, Poppins, sans-serif',
    fontWeight: '300',
    fontSize: 93,
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: 'Poppins-Light, Poppins, sans-serif',
    fontWeight: '300',
    fontSize: 58,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 46,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 33,
    letterSpacing: 0.25,
  },
  h5: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 23,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: 'Poppins-Medium, Poppins, sans-serif',
    fontWeight: '500',
    fontSize: 19,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: 'Poppins-Medium, Poppins, sans-serif',
    fontWeight: '500',
    fontSize: 13,
    letterSpacing: 0.1,
  },
  body1: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 13,
    letterSpacing: 0.25,
  },
  button: {
    fontFamily: 'Poppins-Medium, Poppins, sans-serif',
    fontWeight: '500',
    fontSize: 13,
    letterSpacing: 1.25,
    textTransform: Platform.select({ android: 'uppercase', default: 'none' }),
  },
  caption: {
    fontFamily: 'Poppins-Regular, Poppins, sans-serif',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.4,
  },
});
