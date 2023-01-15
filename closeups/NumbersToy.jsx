import React, { useEffect, useState } from 'react'

import { View, TouchableOpacity } from 'react-native'

import AyanaText from '../AyanaText'
import DejaVuSansMonoText from '../IosevkaText'

export const NumbersToy = () => {

  const initialTrack = [[], [], [], [], []]
  
  const [track, setTrack] = useState(initialTrack)
  const [row, setRow] = useState(Math.floor(track.length/2))
  const [direction, setDirection] = useState('right')
  const [numberOfCharactersToAdd, setNumberOfCharactersToAdd] = useState(0)
  const [color, setColor] = useState(1)
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)

  const colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ]

  const delayBetweenCharacters = 500

  const maxTrackLength = 12

  const maxNumber = 3;

  useEffect(() => {
    if(numberOfCharactersToAdd > 0) {
      addOneCharacter()
      setTimeout(() => setNumberOfCharactersToAdd(numberOfCharactersToAdd => numberOfCharactersToAdd-1), delayBetweenCharacters)
    } else {
      setColor(color => color == colors.length-1 ? 0 : color+1)
    }
  }, [numberOfCharactersToAdd])

  const addOneCharacter = () => {
    
    const addRandomCharacter = (characters) => {
      let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
      
      if(direction == 'right') {
        for(let r=0; r<track.length; r++) {
          newTrack[r].push({
            character: r == row ? randomCharacter : '\u{00A0}',
            color: colors[color]
          })
        }
      } else {
        newTrack[row][newTrack[row].length-1] = {character: randomCharacter, color: colors[color]}
      }

      if(newTrack[0].length > maxTrackLength) {
        for(let i=0; i<newTrack.length; i++) {
          newTrack[i] = newTrack[i].slice(1)
        }
      }

      if(randomCharacter == '\u{2501}') {setDirection('right');}
      if(randomCharacter == '\u{2513}') {setDirection('down'); setRow(row => row+1)}
      if(randomCharacter == '\u{250F}') {setDirection('right');}
      if(randomCharacter == '\u{2517}') {setDirection('right');}
      if(randomCharacter == '\u{251B}') {setDirection('up'); setRow(row => row-1)}
      if(randomCharacter == '\u{2503}') {setRow(row => direction == 'up' ? row-1 : row+1)}
    } 

    let newTrack = JSON.parse(JSON.stringify(track))

    if(direction == 'right') {
      if(row == 0) {
        addRandomCharacter(['\u{2501}', '\u{2513}'])
      } else if(row == track.length-1) {
        addRandomCharacter(['\u{2501}', '\u{251B}'])
      } else {
        addRandomCharacter(['\u{2501}', '\u{2513}', '\u{251B}'])
      }
    } else if(direction == 'up') {
      if(row == 0) {
        addRandomCharacter(['\u{250F}'])
      } else {
        addRandomCharacter(['\u{2503}', '\u{250F}'])
      }
    } else if(direction == 'down') {
      if(row == track.length-1) {
        addRandomCharacter(['\u{2517}'])
      } else {
        addRandomCharacter(['\u{2503}', '\u{2517}'])
      }    
    }

    setTrack(newTrack)
  }

  const changeNumberOne = () => {
    numberOne == maxNumber ? setNumberOne(0) : setNumberOne(numberOne => numberOne+1)
  }

  const changeNumberTwo = () => {
    numberTwo == maxNumber ? setNumberTwo(0) : setNumberTwo(numberTwo => numberTwo+1)
  }

  const handleClick = () => {
    if(numberOfCharactersToAdd == 0) {
      setNumberOfCharactersToAdd(numberOne * 4 + numberTwo)
    }
  }

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {changeNumberOne()}}>
          <AyanaText extraStyle={{fontSize: 60}}>
            {numberOne}
          </AyanaText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {changeNumberTwo()}}>
          <AyanaText extraStyle={{fontSize: 60}}>
            {numberTwo}
          </AyanaText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handleClick()}}>
          <DejaVuSansMonoText extraStyle={{fontSize: 50}}>
            {'\u{25B6}'}
          </DejaVuSansMonoText>
        </TouchableOpacity>
      </View>
      <View flexDirection='column'>
        {track.map((row, rowIndex) => {
          return (
            <View key={rowIndex} flexDirection='row'>
              {row.map((cel, celIndex) => {
                return (
                  <DejaVuSansMonoText key={celIndex} extraStyle={{color: cel.color, fontSize: 40, letterSpacing: 7}}>
                    {cel.character}
                  </DejaVuSansMonoText>
                )
              })}
            </View>
          )})}
      </View>
    </View>
  )
}