import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'

import * as Font from 'expo-font';

export default function DejaVuSansMonoText(props) {

  const [fontIsLoaded, setFontIsLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'DejaVuSansMono': require('./assets/fonts/DejaVuSansMono.ttf'),
        'DejaVuSansMono-Oblique': require('./assets/fonts/DejaVuSansMono-Oblique.ttf'),
        'DejaVuSansMono-Bold': require('./assets/fonts/DejaVuSansMono-Bold.ttf'),
      });
      setFontIsLoaded(true)
    }
    loadFont()
  })

  return (
    fontIsLoaded && 
      <Text style={[
        props.fontStyle == 'italic' ? 
          {fontFamily: 'DejaVuSansMono-Oblique'} : 
          props.fontWeight == 'bold' ? 
            {fontFamily: 'DejaVuSansMono-Bold'} : 
            {fontFamily: 'DejaVuSansMono'},
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
