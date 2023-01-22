import React, { useState, useEffect } from 'react'

import { View, TouchableOpacity } from  'react-native'
import DejaVuSansMonoText from '../DejaVuSansMonoText'

export const SchoolDoor = ({solutionFound}) => {
 
  const [numbersSelected, setNumbersSelected] = useState([])

  const solution = [3, 9, 11, 14]

  const handleClick = (number) => {
    if(numbersSelected.includes(number)) {
       setNumbersSelected(numbersSelected.filter(n => n != number))
    } else if(numbersSelected.length != solution.length) {
      setNumbersSelected(numbersSelected => [...numbersSelected, number])
    }
  }

  useEffect(() => {
    if(JSON.stringify(numbersSelected.sort()) == JSON.stringify(solution.sort())) {
      solutionFound() 
    }
  }, [numbersSelected])

  const size = 19;

  let numberLine = [];
  for(let i=0; i<size; i++) {
    numberLine.push((i+1) % 4 == 0 ? '\u{254B}' : '\u{253C}')
  }

  return (
    <View style={{alignItems: 'center'}}>
      <DejaVuSansMonoText>
        {numberLine.map((character, index) => {
          return ( 
            <TouchableOpacity key={index} onPress={() => handleClick(index+1)}>
              <DejaVuSansMonoText extraStyle={[{fontSize: 25}, {color: numbersSelected.includes(index+1) ? 'blue' : 'black'}]}>
                {character}
              </DejaVuSansMonoText>
            </TouchableOpacity>
          )
        })}
      </DejaVuSansMonoText>

      <DejaVuSansMonoText>
        {'\n'}
        {solution.map((character, index) => {
          return ( 
            <DejaVuSansMonoText key={index} extraStyle={{fontSize: 25}}>
              {numbersSelected.length > index ? '\u{2588}' : '\u{2592}'}
            </DejaVuSansMonoText>
          )
        })}
      </DejaVuSansMonoText>
    </View>
  )
}