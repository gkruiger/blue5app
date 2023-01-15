import React from 'react'

import { StyleSheet, View } from 'react-native'

import Button from './Button'

export default function Actions({actions, processAction, closeUp, setCloseUp, appStyle}) {

  return (
    <View style={[styles.actions, appStyle]}>

      {closeUp == undefined && actions != null && actions.map((action, index) =>
        <Button 
          key={index}
          title={action.name}
          onPress={() => {processAction(action.id)}}
        />
      )}

      {closeUp != undefined &&
        <Button 
          title='Go back'
          onPress={() => {setCloseUp(undefined)}}
        />
      }
      
    </View>

  )
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor: '#eeeeee',
    paddingTop: 20,
    paddingBottom: 10,
    minHeight: 30
  }
})