import React from 'react'
import { StyleSheet, View } from 'react-native'

import DejaVuSansMono from './DejaVuSansMonoText'

export default function StoryItem({text}) {

  const styleText = (text) => {
    
    let fontStyle = 'regular'

    if (text.includes('<i>')) {

      text = text.replace(/<i>/g, '')
      text = text.replace(/<\/i>/g, '')
      fontStyle = 'italic';
    }
    
    return (
      <View style={styles.storyItemStyle}>
        <DejaVuSansMono fontStyle={fontStyle}>
          {text}
        </DejaVuSansMono> 
      </View>
    )
  }

  return (
    styleText(text)
  )
}

const styles = StyleSheet.create({
  storyItemStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
})