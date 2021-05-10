import React from 'react';
import { useRoute } from '@react-navigation/core';
import { Image, Text, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

interface IParams {
  username: string;
}

const Profile: React.FC = () => {
  const route = useRoute();

  const routeParams = route.params as IParams;
  const { username } = routeParams;

  console.log(username);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.user_image}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/50719694?v=4',
          }}
        />

        <Text style={styles.name}>João Victor</Text>

        <View style={styles.hr} />

        <Text style={styles.infoTitle}>Infos:</Text>

        <ScrollView>
          <Text style={styles.infos}>Username: joaovds</Text>
          <Text style={styles.infos}>
            Bio: Cursando Técnico em Desenvolvimento de Sistemas
          </Text>
          <Text style={styles.infos}>Followers: 12</Text>
          <Text style={styles.infos}>Following: 25</Text>
          <Text style={styles.infos}>Company: Etec de Peruíbe</Text>
          <Text style={styles.infos}>Public Repos: 23</Text>
          <Text style={styles.infos}>Location: Peruíbe , SP - Brasil</Text>

          <RectButton style={styles.button}>
            <Text style={styles.buttonText}>Ver Repositórios</Text>
          </RectButton>
          <RectButton style={styles.button}>
            <Text style={styles.buttonText}>Ver Organizações</Text>
          </RectButton>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
