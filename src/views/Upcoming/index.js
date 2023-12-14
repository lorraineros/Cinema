import React from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import UpcomingList from '../../components/UpcomingList';
import TabBar from '../../components/TabBar';

const Upcoming = () => {
  const upcoming = useSelector((state) => {
    return state.upcoming.upcoming.slice().sort((a, b) => {
      const dateA = new Date(b['release-dateIS']);
      const dateB = new Date(a['release-dateIS']);
      return dateB - dateA;
    });
  });
  return (
    <ScrollView>
      <TabBar
        pageName={'Upcoming'}
      />
      <View style={styles.container}>
        <UpcomingList upcoming={upcoming} />
      </View>
    </ScrollView>
  );
}

export default Upcoming;
