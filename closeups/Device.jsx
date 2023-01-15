import React, { useState } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import DejaVuSansMonoText from '../DejaVuSansMonoText'

const Bar = ({position, setPosition}) => {

  const length = 8
  const plusses = Array(length).fill('+')

  return (
    <Text>
      <TouchableOpacity onPress={() => {if(position > 0) {setPosition(position-1)}}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
        {'\u{25C0} '}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
        {plusses.map((item, index) => {
          return index == position ? '\u{2588}' : '+'
        })}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {if(position < length-1) setPosition(position+1)}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
          {' \u{25B6}'}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      {'\n'}
    </Text>
  )
}

export const Device = () => {

  const symbols = [
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15}}>-</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'blue'}}>{'\u{25E5}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'yellow'}}>{'\u{25E5}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'red'}}>{'\u{25E5}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'blue'}}>{'\u{25E3}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'yellow'}}>{'\u{25E3}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15, color: 'red'}}>{'\u{25E3}'}</DejaVuSansMonoText>,
    <DejaVuSansMonoText extraStyle={{fontSize: 70, letterSpacing: 15}}>-</DejaVuSansMonoText>,
  ]

  const [positionOne, setPositionOne] = useState(0)
  const [positionTwo, setPositionTwo] = useState(0)
  const [positionThree, setPositionThree] = useState(0)
  const [positionFour, setPositionFour] = useState(0)

  return (
    <Text style={{textAlign: 'center'}}>
      {symbols[positionOne]}
      {symbols[positionTwo]}
      {symbols[positionThree]}
      {symbols[positionFour]}
      {'\n'}
      {'\n'}

      <Bar position={positionOne} setPosition={setPositionOne}/>
      <Bar position={positionTwo} setPosition={setPositionTwo}/>
      <Bar position={positionThree} setPosition={setPositionThree}/>
      <Bar position={positionFour} setPosition={setPositionFour}/>
    </Text>
  )
}