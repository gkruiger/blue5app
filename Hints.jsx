import React from 'react'
import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from './Button'
import DejaVuSansMonoText from './DejaVuSansMonoText'
import IosevkaText from './IosevkaText'
import AyanaText from './AyanaText'
import EversonMonoText from './EversonMonoText'


export default function Hints({interactions, puzzlesSolved, setIsHintsVisible}) {

  const [hintNumber, setHintNumber] = useState(0)
  const [hints, setHints] = useState([])

  useEffect(() => {
    let interactionsWithHints = interactions.filter((interaction) => {
      return interaction.closeUp && interaction.closeUp.hints && !puzzlesSolved.includes(interaction.id)
    })

    setHints(interactionsWithHints.length != 0 ? interactionsWithHints[0].closeUp.hints : (['No hints available.']))
    setHintNumber(0)
  }, [puzzlesSolved])

  const getHint = () => {
    if(hints[hintNumber] == undefined) {
      return
    }

    if(hints[hintNumber].includes("<")) {
      let hint = hints[hintNumber]
      
      let before = hint.slice(0, hint.indexOf("<"))
      
      let type = ""
      if(hint.indexOf("<iosevka>") != -1) type = "iosevka"
      if(hint.indexOf("<ayana>") != -1) type = "ayana"
      if(hint.indexOf("<eversonmono>") != -1) type = "eversonmono"
      
      let middle = hint.slice(hint.indexOf(">") + 1)
      middle = middle.slice(0, middle.indexOf("<"))
      
      let after = hint.slice(hint.lastIndexOf(">") + 1)
     
      return ( 
        <>
          {before}
          {type == 'iosevka' && 
            <IosevkaText>
              {middle}
            </IosevkaText>
          }
          {type == 'ayana' && 
            <AyanaText extraStyle={{lineHeight: 25}}>
              {middle}
            </AyanaText>
          }
          {type == 'eversonmono' && 
            <EversonMonoText extraStyle={{lineHeight: 25}}>
              {middle}
            </EversonMonoText>
          }
          {after}
        </>
      )

    } else {
      return hints[hintNumber]
    }
  }

  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <DejaVuSansMonoText>
          ({hintNumber + 1}/{hints.length})&nbsp;{getHint()}
          {"\n"}        
        </DejaVuSansMonoText>
      </View>
      <View style={styles.row}>
        <Button 
            title='Previous'
            disabled={hintNumber == 0 ? true : false}
            onPress={() => {if(hintNumber != 0) setHintNumber(hintNumber => hintNumber - 1)}}
          />
          <Button 
            title='Next'
            disabled={hintNumber == hints.length-1 ? true : false}
            onPress={() => {if(hintNumber != hints.length-1) setHintNumber(hintNumber => hintNumber + 1)}}
          />
          <Button 
            title='Close'
            onPress={() => {setIsHintsVisible(false)}}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column', 
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  }
})
