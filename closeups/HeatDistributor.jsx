import React, { useState } from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const HeatDistributor = ({solutionFound}) => {

  const [energyLevels, setEnergyLevels] = useState([0, 0, 0, 0])
  const [handle, setHandle] = useState(false)

  const solution = [3, 1, 6, 4]

  const barLevels = [
    '\u{2581}',
    '\u{2582}',
    '\u{2583}',
    '\u{2584}',
    '\u{2585}',
    '\u{2586}',
    '\u{2587}',
    '\u{2588}',
  ]

  const changeEnergyLevel = (bar, change) => {
    setEnergyLevels((previousState) => {
      let newEnergyLevel = energyLevels[bar] + change;
      if(newEnergyLevel > barLevels.length-1) {
        newEnergyLevel = 0
      }
      
      let newEnergyLevels = [...previousState]
      newEnergyLevels[bar] = newEnergyLevel
      return newEnergyLevels
    })

  }

  const changeHandle = () => {
    if(JSON.stringify(energyLevels) == JSON.stringify(solution)) {
      setHandle(!handle)
      setTimeout(() => {
        solutionFound() 
      }, 500);
    }
  }

  return (
    <Text style={{textAlign: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => changeEnergyLevel(0, +1)}>
            <Text style={styles.barStyle}>{barLevels[energyLevels[0]]}</Text>
          </TouchableOpacity>
          <Text style={styles.symbolStyle}>{'\u{2294}'}</Text>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => changeEnergyLevel(1, +1)}>
            <Text style={styles.barStyle}>{barLevels[energyLevels[1]]}</Text>
          </TouchableOpacity>
          <Text style={styles.symbolStyle}>{'\u{228F}'}</Text>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => changeEnergyLevel(2, +1)}>
            <Text style={styles.barStyle}>{barLevels[energyLevels[2]]}</Text>
          </TouchableOpacity>
          <Text style={styles.symbolStyle}>{'\u{2293}'}</Text>
        </View>
        <View style={styles.columnStyle}>
          <TouchableOpacity onPress={() => changeEnergyLevel(3, +1)}>
            <Text style={styles.barStyle}>{barLevels[energyLevels[3]]}</Text>
          </TouchableOpacity>
          <Text style={styles.symbolStyle}>{'\u{2290}'}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => changeHandle()}>
            <Text style={{fontSize: 80, lineHeight: 110}}>
              {handle ? ' ' : '\u{2443}'}
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 80, lineHeight: 70}}>
            {handle ? '\u{2442}' : ' '}
          </Text>
        </View>
      </View>
    </Text>
  )
}

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: 'column', 
    marginRight: 5
  },
  barStyle: {
    fontSize: 70, 
    lineHeight: 120
  },
  symbolStyle: {
    fontSize: 70, 
    lineHeight: 70
  }
})