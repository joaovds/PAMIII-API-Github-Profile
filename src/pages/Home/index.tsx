import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.description}>
          Digite o username de um usuário do GitHub:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCorrect={false}
          placeholderTextColor="#6B7280"
          selectionColor="#6B7280"
        />

        <RectButton style={styles.button} onPress={handleNavigateToProfile}>
          <Text style={styles.buttonText}>Ver Perfil</Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;
