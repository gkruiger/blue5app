import React from 'react'
import { View, StyleSheet } from 'react-native'

import StoryItem from './StoryItem'

export default function Story({lines, appStyle, fadeOut}) {

  return (
    <View style={[appStyle, styles.storyStyle, {opacity: fadeOut ? 0 : 1}]}>
      {lines != null && lines.slice().reverse().map((line) => (
        <StoryItem
          text={line.text}
          id={line.id}
          key={line.id}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  storyStyle: {
    paddingTop: 15,
    paddingBottom: 20,
  }
})