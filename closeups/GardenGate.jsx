import React, { useState } from 'react'

import { TouchableOpacity, Pressable, Text, View } from 'react-native'
import DejaVuSansMonoText from '../DejaVuSansMonoText'

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const GardenGate = ({solutionFound}) => {

  const possibleLines = [
    '\u{2503}',
    '\u{2501}',
    '\u{2517}',
    '\u{250F}',
    '\u{2513}',
    '\u{251B}',
  ]

  const firstColumn = [
    '\u{25B2}',
    '\u{25B6}',
    '\u{25BC}',
    '\u{25C0}',
  ]

  const lastColumn = [
    '\u{25B3}',
    '\u{25B7}',
    '\u{25BD}',
    '\u{25C1}'
  ]

  const [input, setInput] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  const solution = [
    [3, 1, 1, 4],
    [5, 3, 4, 0],
    [3, 5, 2, 5],
    [2, 1, 1, 1],
  ]

  const handleClick = (rowIndex, celIndex) => {
    let newInput = JSON.parse(JSON.stringify(input))
    newInput[rowIndex][celIndex] = newInput[rowIndex][celIndex] == possibleLines.length - 1 ? 0 : newInput[rowIndex][celIndex] + 1
    setInput(newInput)
    if(JSON.stringify(newInput) === JSON.stringify(solution)) {solutionFound()}
  }

  return (
    <Text style={{textAlign: 'center'}}>
      {input.map((row, rowIndex) => {
        return (
          <View key={rowIndex}>
            <Text>
              <View>
                <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 60}}>
                  {firstColumn[rowIndex]}
                  <DejaVuSansMonoText extraStyle={{fontSize: 40, letterSpacing: 20, lineHeight: 60}}>
                    {'\u{2501}'}
                  </DejaVuSansMonoText>
                </DejaVuSansMonoText>
              </View>
              {row.map((cel, celIndex) => {
                return (
                  <TouchableOpacity key={(input.length * 4) + celIndex} onPress={() => {handleClick(rowIndex, celIndex)}}>
                    <DejaVuSansMonoText extraStyle={{fontSize: 40, letterSpacing: 10, lineHeight: 60}}>
                      {possibleLines[cel]}
                    </DejaVuSansMonoText>
                  </TouchableOpacity>
                )
              })}
              <View>
                <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 60}}>
                  <DejaVuSansMonoText extraStyle={{fontSize: 40, letterSpacing: 20, lineHeight: 60}}>
                    {'\u{2501}'}
                  </DejaVuSansMonoText>
                  {lastColumn[rowIndex]}
                </DejaVuSansMonoText>
              </View>
            </Text> 
          </View>
        )
      })}
    </Text>
  )
}