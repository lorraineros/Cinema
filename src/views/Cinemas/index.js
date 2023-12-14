import React, { useEffect } from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';
import CinemaList from '../../components/CinemaList';
import TabBar from '../../components/TabBar';

const Cinemas = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return state.token.token;
  });

  useEffect(() => {
    console.log("cinema", token)
    dispatch(getCinemas(token));
  }, [dispatch])

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
