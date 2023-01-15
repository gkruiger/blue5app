import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'

import * as Font from 'expo-font';

export default function AyanaText(props) {

  const [fontIsLoaded, setFontIsLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Myfont-regular': require('./assets/fonts/Myfont-Regular.ttf'),
        'Myfont-bold': require('./assets/fonts/Myfont-Bold.ttf'),
      });
      setFontIsLoaded(true)
    }
    loadFont()
  })

  return (
    fontIsLoaded && 
      <Text style={[{fontFamily: 'Myfont-bold'},
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
