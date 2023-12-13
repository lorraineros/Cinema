import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import TabBar from '../../components/TabBar';
import { useNavigation } from '@react-navigation/native';

const Cinemas = () => {
  const cinemas = useSelector((state) => {
    // console.log(state.cinema.cinemas);
    return state.cinema.cinemas.slice().sort((a, b) => a.name.localeCompare(b.name));
  });
  const { navigate } = useNavigation();
  return (
    <ScrollView>
      <TabBar
        pageName={"Cinemas"}
        redirect={navigate}
      />
      <View style={styles.container}>
        <CinemaList cinemas={cinemas} />
      </View>
    </ScrollView>
  );
}

export default Cinemas;
