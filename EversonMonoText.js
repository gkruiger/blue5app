import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'

import * as Font from 'expo-font';

export default function EversonMonoText(props) {

  const [fontIsLoaded, setFontIsLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'EversonMono': require('./assets/fonts/EversonMono.ttf'),
      });
      setFontIsLoaded(true)
    }
    loadFont()
  })

  return (
    fontIsLoaded && 
      <Text style={[
        {fontFamily: 'EversonMono'},
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
  }
})
