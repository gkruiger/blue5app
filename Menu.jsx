import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native'

import { Icon } from '@rneui/themed';

import DejaVuSansMono from './DejaVuSansMonoText'
import Hints from './Hints'
import Button from './Button'

export default function Menu({isSoundOn, setIsSoundOn, restart, interactions, puzzlesSolved, appStyle}) {

  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isRestartVisible, setIsRestartVisible] = useState(false)
  const [isSoundVisible, setIsSoundVisible] = useState(false)
  const [isHintsVisible, setIsHintsVisible] = useState(false)

  return (
    <View>

      <View style={[appStyle, styles.menuStyle]}>

        <View>
          <DejaVuSansMono fontWeight='bold' extraStyle={{fontSize: 20}}>BLUE5</DejaVuSansMono>
        </View>

        <View style={styles.iconsStyle}>

          <TouchableOpacity onPress={() => setIsAboutVisible(!isAboutVisible)}> 
            <Icon
              style={styles.iconStyle}
              name='info'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsRestartVisible(true)}> 
            <Icon 
              style={styles.iconStyle}
              name='refresh'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{isSoundOn ? setIsSoundVisible(!isSoundVisible) : setIsSoundOn(true)}}>
            <Icon 
              style={styles.iconStyle}
              name={isSoundOn ? 'music-note' : 'music-off'}
            />
          <TouchableOpacity/>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsHintsVisible(!isHintsVisible)}> 
            <Icon 
              style={styles.iconStyle}
              name='help'
            />
          </TouchableOpacity>

        </View>
    
      </View>
               
      <View style={[appStyle, styles.menuContentStyle, !isHintsVisible && {display: 'none'}]}>
        <Hints
          interactions={interactions}
          puzzlesSolved={puzzlesSolved}
          isHintsVisible={isHintsVisible}
          setIsHintsVisible={setIsHintsVisible}
        />
      </View>

      <View style={[appStyle, styles.menuContentStyle, !isSoundVisible && {display: 'none'}]}>
        <DejaVuSansMono>
          <Text>
            Every time someone turns the sound off, its creator sheds a tear.
            Are you sure?
            {"\n"}
          </Text>
        </DejaVuSansMono>

        <View style={{flexDirection: 'row'}}>
          <Button 
            title='Cancel'
            onPress={() => setIsSoundVisible(false)}
          />
          <Button 
            title='OK'
            onPress={() => {setIsSoundOn(false); setIsSoundVisible(false)}}
          />
        </View>       

      </View>

      <View style={[appStyle, styles.menuContentStyle, !isRestartVisible && {display: 'none'}]}>
        <DejaVuSansMono>
          <Text>
            You will loose all your progress and start the game rom the beginning.
            Are you sure?
            {"\n"}
          </Text>
        </DejaVuSansMono>

        <View style={{flexDirection: 'row'}}>
          <Button 
            title='Cancel'
            onPress={() => setIsRestartVisible(false)}
          />
          <Button 
            title='OK'
            onPress={() => restart()}
          />
        </View>
      </View>

      <View style={[appStyle, styles.menuContentStyle, !isAboutVisible && {display: 'none'}]}>
        <DejaVuSansMono>
          <Text>
            Made by Gertjan Kruiger.
            Music by{' '} 
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.youtube.com/@XXrunnerXX');
              }}>
              Jesse Kruiger
            </Text>.            
            More about this game on my{' '} 
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.ontdeksels.nl/blue5-an-adventure-in-monospace/');
              }}>
              personal website
            </Text>.
            You can also play this game{' '} 
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://blue5.ontdeksels.nl/');
              }}>
              online
            </Text>.
            Code available in Github (
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://github.com/gkruiger/blue5');
              }}>
              Web
            </Text>|
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://github.com/gkruiger/blue5app');
              }}>
              App
            </Text>).
            {"\n"}
          </Text>
        </DejaVuSansMono>

        <View style={{flexDirection: 'row'}}>              
          <Button 
            title='Close'
            onPress={() => setIsAboutVisible(false)}
          />
        </View>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  menuStyle: {
    backgroundColor: '#aaa',
    textAlign: 'right',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconsStyle: {
    flexDirection: 'row-reverse'
  },
  iconStyle: {
    paddingLeft: 20
  },
  hyperlinkStyle: {
    color: 'blue'
  }, menuContentStyle: {
    backgroundColor: '#aaa',
    textAlign: 'right',
    paddingTop: 0,
    paddingBottom: 10,
  }
})
