import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  description: {
    color: '#9CA3AF',
    fontSize: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  input: {
    height: 60,
    backgroundColor: '#151515',
    color: '#D1D5DB',
    borderWidth: 0.5,
    borderColor: '#6B7280',
    borderRadius: 6,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#F9A826',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },

  buttonIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
})