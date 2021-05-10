import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { Image, Text, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import api from '../../services/api';

interface IParams {
  username: string;
}

interface IUserInfo {
  login?: string;
  name?: string;
  bio?: string;
  followers?: number;
  following?: number;
  company?: string;
  public_repos?: number;
  location?: string;
  repos_url?: string;
  organizations_url?: string;
  html_url?: string;
  avatar_url?: string;

  message?: string;
}

const Profile: React.FC = () => {
  const route = useRoute();

  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const routeParams = route.params as IParams;
  const { username } = routeParams;

  useEffect(() => {
    api.get(username).then((response) => setUserInfo(response.data));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.user_image}
          source={{
            uri: userInfo?.avatar_url,
          }}
        />

        <Text style={styles.name}>{userInfo?.name}</Text>

        <View style={styles.hr} />

        <Text style={styles.infoTitle}>Infos:</Text>

        <ScrollView>
          <Text style={styles.infos}>Username: {userInfo?.login}</Text>
          <Text style={styles.infos}>Bio: {userInfo?.bio}</Text>
          <Text style={styles.infos}>Followers: {userInfo?.followers}</Text>
          <Text style={styles.infos}>Following: {userInfo?.following}</Text>
          <Text style={styles.infos}>Company: {userInfo?.company}</Text>
          <Text style={styles.infos}>
            Public Repos: {userInfo?.public_repos}
          </Text>
          <Text style={styles.infos}>Location: {userInfo?.location}</Text>

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
