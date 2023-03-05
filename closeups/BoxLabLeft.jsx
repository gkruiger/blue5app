import React, { useState } from 'react'

import { Text, TouchableOpacity } from 'react-native'

import EversonMonoText from '../EversonMonoText'
import AyanaText from '../AyanaText'

export const BoxLabLeft = ({solutionFound}) => {

  const possibleLines = [
    'a',
    'e',
    'h',
    'i',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'u',
    'w'
  ]

  const firstColumn = [
    '\u{1F701}',
    '\u{1F702}',
    '\u{1F703}',
    '\u{1F704}'
  ]

  const [input, setInput] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])

  const solution = [
    [0, 7, 8, 6, 3],
    [0, 3, 5, 10, 0],
    [0, 5, 0, 7, 8],
    [0, 11, 3, 7, 0]
  ]

  const handleClick = (rowIndex, celIndex) => {
    let newInput = JSON.parse(JSON.stringify(input))
    newInput[rowIndex][celIndex] = newInput[rowIndex][celIndex] == possibleLines.length - 1 ? 0 : newInput[rowIndex][celIndex] + 1
    setInput(newInput)
    if(JSON.stringify(newInput) === JSON.stringify(solution)) {
      solutionFound()
    }
  }

  return (
    <Text style={{textAlign: 'center'}}>
      {input.map((row, rowIndex) => {
          return (
            <Text key={rowIndex}>
              <EversonMonoText extraStyle={{fontSize: 60, lineHeight: 60}}>
                {firstColumn[rowIndex]}{' '}
              </EversonMonoText>
              {row.map((cel, celIndex) => {
                return (
                  <TouchableOpacity 
                    key={celIndex}
                    onPress={() => {handleClick(rowIndex, celIndex)}}
                  >
                    <AyanaText extraStyle={{fontSize: 40, lineHeight: 40}}>
                      {possibleLines[cel]}
                    </AyanaText>
                  </TouchableOpacity>
                )
              })}
              {rowIndex != 3 && <Text>{'\n'}</Text>}
            </Text>
        )})}
    </Text>
  )
}