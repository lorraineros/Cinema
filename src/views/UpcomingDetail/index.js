import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const UpcomingDetail = ({ 
  route
}) => {
  const { upcoming } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{upcoming['title']}</Text>
      <Text style={styles.paragraph}>{upcoming['plot']}</Text>

      {upcoming['trailers'] && upcoming['trailers'].length > 0 && upcoming['trailers'][0].results.length > 0 && (
        <View>
          <Text style={styles.trailerTitle}>Trailer</Text>
          <WebView
            source={{ uri: upcoming['trailers'][0].results[0].url }}
            style={styles.webview}
            allowsFullscreenVideo={true}
          />
        </View>
      )}
    </View>
  );
};

export default UpcomingDetail;
