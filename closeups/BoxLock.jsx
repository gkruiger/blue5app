import React, { useEffect, useState } from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import IosevkaText from '../IosevkaText'

export const BoxLock = ({solutionFound}) => {
 
  const [arrows, setArrows] = useState([0, 1, 2, 3, 4, 5, 6, 7])

  const gears = [
    [0, 1, 7],
    [1, 5],
    [2, 1, 3],
    [3, 7],
    [4, 3, 5],
    [5, 1],
    [6, 5, 7],
    [7, 3],
  ]

  const solution = [4, 5, 6, 7, 0, 1, 2, 3]

  const possibleArrows = [
    '\u{1F866}',
    '\u{1F863}',
    '\u{1F867}',
    '\u{1F860}',
    '\u{1F864}',
    '\u{1F861}',
    '\u{1F865}',
    '\u{1F862}',
  ]

  useEffect(() => {
    if(JSON.stringify(arrows) == JSON.stringify(solution)) {
      solutionFound() 
    }
  }, [arrows])

  const handleClick = (index) => {   
    gears[index].map((gear) => {
      setArrows((previousState) => {
        let newArrows = [...previousState]
        newArrows[gear] = newArrows[gear] + 1 == possibleArrows.length ? 0 : arrows[gear] + 1
        return newArrows
      })
    })
  }

  const cell = (index) => {
    return (
      <TouchableOpacity 
        key={index} 
        onPress={() => {handleClick(index)}}
      >
        <IosevkaText 
          extraStyle={[{fontSize: 60, lineHeight: 80}]}
        >
          {index == -1 ? '  ' : possibleArrows[arrows[index]]}
        </IosevkaText>
      </TouchableOpacity>
    )
  }

  return (
    <Text style={{textAlign: 'center'}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          {cell(0)}
          {cell(1)}
          {cell(2)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {cell(7)}
          {cell(-1)}
          {cell(3)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {cell(6)}
          {cell(5)}
          {cell(4)}
        </View>
      </View>
    </Text>
  )
}