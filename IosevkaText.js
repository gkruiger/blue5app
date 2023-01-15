import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'

import * as Font from 'expo-font';

export default function DejaVuSansMonoText(props) {

  const [fontIsLoaded, setFontIsLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'iosevka-regular': require('./assets/fonts/iosevka-regular.ttf'),
      });
      setFontIsLoaded(true)
    }
    loadFont()
  })

  return (
    fontIsLoaded && 
      <Text style={[
        styles.textStyle,
        props.extraStyle
      ]}>
        {props.children}
      </Text>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: 'iosevka-regular',
  }
})
