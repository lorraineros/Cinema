import PropTypes from 'prop-types'
import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const TabBar = ({ pageName, redirect }) => {
  return (
    <View styleName="horizontal" style={styles.tabBar}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => redirect(pageName)}
        disabled={pageName === "Cinemas"}>
        <Text style={styles.paragraph}>Cinemas</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => redirect(pageName)}
        disabled={pageName === "Upcoming"}>
        <Text style={styles.paragraph}>Upcoming Movies</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TabBar
