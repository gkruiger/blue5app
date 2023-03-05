import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import EversonMonoText from '../EversonMonoText'
import DejaVuSansMonoText from '../DejaVuSansMonoText'

const Bar = ({symbol, length, position, setPosition}) => {

  const plusses = Array(length).fill('+')

  return (
    <Text>
      <TouchableOpacity onPress={() => {if(position[symbol] > 0) {let newPosition = position.slice(); newPosition[symbol]--; setPosition(newPosition)}}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 55, marginBottom: -15}}>
        {'\u{25C0} '}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 55, marginBottom: -15}}>
          {plusses.map((item, index) => {
            return index == position[symbol] ? '\u{2588}' : '+'
          })}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {if(position[symbol] < length-1) {let newPosition = position.slice(); newPosition[symbol]++; setPosition(newPosition)}}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 55, marginBottom: -15}}>
          {' \u{25B6}'}
        </DejaVuSansMonoText>
      </TouchableOpacity>
      {'\n'}
    </Text>
  )
}

export const Microscope = () => {

  const length = 8
  const symbols = [
    '\u{1F702}', 
    '\u{1F746}', 
    '\u{1F706}', 
    '\u{1F701}',
    '\u{1F721}',
    '\u{1F703}',
    '\u{1F72A}',
    '\u{1F720}',
    '\u{1F732}',
    '\u{1F708}',
    '\u{1F714}',
    '\u{1F718}',
    '\u{1F704}',
    '\u{1F705}',
  ]

  const offsets = [      
    [2, 1, 3, 7],
    [4, 6, 2, 8],
    [5, 8, 1, 7],
    [5, 3, 6, 4],
    [6, 2, 4, 6],
    [7, 8, 2, 5],
    [3, 7, 1, 2],
    [1, 4, 8, 3],
    [8, 5, 7, 4],
    [8, 6, 5, 1],
    [5, 1, 2, 1], 
    [2, 6, 6, 3],
    [2, 4, 1, 8],
    [1, 8, 3, 4], 
  ]

  const [symbol, setSymbol] = useState(0)

  const [translateXPosition, setTranslateXPosition] = useState(Array(symbols.length).fill(0))
  const [rotationPosition, setRotationPosition] = useState(Array(symbols.length).fill(0))
  const [scalePosition, setScalePosition] = useState(Array(symbols.length).fill(0))
  const [translateYPosition, setTranslateYPosition] = useState(Array(symbols.length).fill(0))

  return (
    <View>
      <View style={{overflow: 'hidden'}}>
        <Text 
          style={{
            textAlign: 'center',
            marginTop: -75,
            marginBottom: -75,
            position: 'absolute',
            color: 'black',
            width: '100%',
            opacity: 0.5
          }}
        >
          <EversonMonoText extraStyle={{fontSize: 150, lineHeight: 300}}>
            {symbols[symbol]}
          </EversonMonoText>
        </Text>
        <Text 
          style={{
            textAlign: 'center', 
            transform: [
              { scale: Math.pow(2, ((scalePosition[symbol] + offsets[symbol][2])/4) - 2) },
              { rotate: `${-180+((360/(16))*(rotationPosition[symbol] + offsets[symbol][1]))}deg` },
              { translateX: -40+(5*(translateXPosition[symbol] + offsets[symbol][0]))},
              { translateY: -40+(5*(translateYPosition[symbol] + offsets[symbol][3]))},
            ],
            marginTop: -75,
            marginBottom: -75,
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <EversonMonoText extraStyle={{fontSize: 150, lineHeight: 300}}>
            {symbols[symbol]}
          </EversonMonoText>
        </Text>
      </View>

      <Text style={{textAlign: 'center'}}>
        {symbols.map((s, index) => {
          if (index < 7) return (
            <TouchableOpacity key={index }onPress={() => {setSymbol(index)}}>
              <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 45, letterSpacing: -10}}>
                {index == symbol ? ' \u{25A3} ' : ' \u{25A1} '}
              </DejaVuSansMonoText>
            </TouchableOpacity>
          )
        })}
      </Text>
      <Text style={{textAlign: 'center'}}>
        {symbols.map((s, index) => {
          if (index >= 7) return (
            <TouchableOpacity key={index }onPress={() => {setSymbol(index)}}>
              <DejaVuSansMonoText extraStyle={{fontSize: 40, lineHeight: 45, letterSpacing: -10}}>
                {index == symbol ? ' \u{25A3} ' : ' \u{25A1} '}
              </DejaVuSansMonoText>
            </TouchableOpacity>
          )
        })}
      </Text>

      <Text style={{textAlign: 'center'}}>
        <Bar symbol={symbol} length={length} position={translateXPosition} setPosition={setTranslateXPosition}/>
        <Bar symbol={symbol} length={length} position={rotationPosition} setPosition={setRotationPosition}/>
        <Bar symbol={symbol} length={length} position={scalePosition} setPosition={setScalePosition}/>
        <Bar symbol={symbol} length={length} position={translateYPosition} setPosition={setTranslateYPosition}/>
      </Text>

    </View>
  )
}