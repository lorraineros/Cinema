import React, { useEffect } from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcoming } from '../../redux/features/upcoming/upcoming-slice';
import UpcomingList from '../../components/UpcomingList';
import TabBar from '../../components/TabBar';

const Upcoming = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return state.token.token;
  });

  useEffect(() => {
    console.log("upcoming", token)
    dispatch(getUpcoming(token));
  }, [dispatch])

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
