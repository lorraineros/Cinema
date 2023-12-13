import PropTypes from 'prop-types'
import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const TabBar = ({ 
  pageName
}) => {
  const { navigate } = useNavigation();

  return (
    <View styleName="horizontal" style={styles.tabBar}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Cinemas')}
        disabled={pageName === 'Cinemas'}>
        <Text style={styles.paragraph}>Cinemas</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Upcoming')}
        disabled={pageName === 'Upcoming'}>
        <Text style={styles.paragraph}>Upcoming Movies</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TabBar
