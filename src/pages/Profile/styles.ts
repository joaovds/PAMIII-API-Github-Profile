import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 15,
  },

  user_image: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFFBEB'
  },

  name: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    maxWidth: 260,
    lineHeight: 24,
    marginVertical: 10,
  },

  hr: {
    borderBottomColor: '#2e2e2e',
    borderBottomWidth: 1,
    marginVertical: 2
  },

  infoTitle: {
    color: '#999999',
    fontSize: 18,
    maxWidth: 260,
    lineHeight: 20,
    marginTop: 20,
    marginBottom: 5
  },

  infos: {
    color: '#cccccc',
    fontSize: 15,
    maxWidth: 260,
    lineHeight: 20,
    marginVertical: 12,
  },

  button: {
    backgroundColor: '#141414',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
})