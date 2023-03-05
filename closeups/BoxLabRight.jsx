import React, { useState } from 'react'

import { Text, TouchableOpacity } from 'react-native'

import DejavuSansMonoText from '../DejaVuSansMonoText'

export const BoxLabRight = ({solutionFound}) => {

  const [input, setInput] = useState([])

  const solution = [
    'red',
    'green',
    'orange',
    'blue',
  ]

  const colors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ]

  const handleClick = (color) => {
    let newInput = [...input, color]
    setInput(newInput)
    if(JSON.stringify(newInput.slice(-4)) === JSON.stringify(solution)) {solutionFound()}
  }

  return (
    <Text style={{textAlign: 'center'}}>
      {colors.map((color, index) => {
        return (
          <TouchableOpacity 
            key={index}
            onPress={() => {handleClick(color)}}
          >
            <DejavuSansMonoText extraStyle={{fontSize: 80, lineHeight: 70, color: color}}>
              &#9724;
            </DejavuSansMonoText>
          </TouchableOpacity>
        )
      })}
    </Text>
  )
}