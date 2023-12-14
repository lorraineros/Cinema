import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const UpcomingDetail = ({ route }) => {
  const { upcoming } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: upcoming['poster'] }}/>
        <Text style={styles.title}>{upcoming['title']}</Text>
        <Text style={styles.paragraph}>{upcoming['plot']}</Text>
        <Text style={styles.releaseDate}> Release Date: {new Date(upcoming['release-dateIS']).toLocaleDateString()}</Text>
        {upcoming['trailers'] && upcoming['trailers'].length > 0 && upcoming['trailers'][0].results.length > 0 && (
          <View style={styles.trailerContainer}>
            <Text style={styles.trailerTitle}>Trailer</Text>
            <WebView source={{ uri: upcoming['trailers'][0].results[0].url }} style={styles.webview} allowsFullscreenVideo={true}/>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default UpcomingDetail;
