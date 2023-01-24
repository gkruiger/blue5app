import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import DejaVuSansMonoText from './DejaVuSansMonoText'

export default function Button({title, disabled, onPress}) {

  return (
    <TouchableOpacity 
      style={[styles.buttonStyle, disabled ? styles.disabled : null]}
      disabled={disabled}
      onPress={onPress}
    >
      <DejaVuSansMonoText 
        extraStyle={{color: 'white'}} 
        fontWeight='bold'>
        {title}
      </DejaVuSansMonoText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 0,
    backgroundColor: '#666',
  },
  disabled: {
    backgroundColor: '#aaa'
  }
})
