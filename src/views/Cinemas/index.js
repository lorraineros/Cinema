import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import TabBar from '../../components/TabBar';

const Cinemas = () => {
  const cinemas = useSelector((state) => {
    return state.cinema.cinemas.slice().sort((a, b) => a.name.localeCompare(b.name));
  });
  return (
    <ScrollView>
      <TabBar
        pageName={"Cinemas"}
      />
      <View style={styles.container}>
        <CinemaList cinemas={cinemas} />
      </View>
    </ScrollView>
  );
}

export default Cinemas;
