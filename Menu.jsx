import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native'

import DejaVuSansMono from './DejaVuSansMonoText'
import Modal from './Modal'

import { Icon } from '@rneui/themed';

export default function Menu({isSoundOn, setIsSoundOn, restart, appStyle}) {

  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isRestartVisible, setIsRestartVisible] = useState(false)
  const [isSoundVisible, setIsSoundVisible] = useState(false)

  return (
    <View style={[appStyle, styles.menuStyle]}>

      <View>
        <DejaVuSansMono fontWeight='bold' extraStyle={{fontSize: 20}}>BLUE5</DejaVuSansMono>
      </View>

      <View style={styles.iconsStyle}>

        <TouchableOpacity onPress={() => setIsAboutVisible(true)}> 
          <Icon
            style={styles.iconStyle}
            name='info'
          />
          <Modal
            title='About'
            content = {
              <Text>
                Made by Gertjan Kruiger.
                Music by Jesse Kruiger.
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
              </Text>
            }
            isVisible={isAboutVisible}
            setIsVisible={setIsAboutVisible}
            buttons={[{
              title: 'OK',
            }]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsRestartVisible(true)}> 
          <Icon 
            style={styles.iconStyle}
            name='refresh'
          />
          <Modal
            title='Restart'
            content = {
              <Text>
                You will loose all your progress and start the game rom the beginning.
                Are you sure?
              </Text>
            }
            isVisible={isRestartVisible}
            setIsVisible={setIsRestartVisible}
            buttons={[{
              title: 'Cancel'
            }, {
              title: 'OK',
              onPress: () => restart()
            }]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{isSoundOn ? setIsSoundVisible(true) : setIsSoundOn(true)}}>
          <Icon 
            style={styles.iconStyle}
            name={isSoundOn ? 'music-note' : 'music-off'}
          />
          <Modal
            title='Sound'
            content = {
              <Text>
                Every time someone turns the sound off, its creator sheds a tear.
                Are you sure?
              </Text>
            }
            isVisible={isSoundVisible}
            setIsVisible={setIsSoundVisible}
            buttons={[{
              title: 'Cancel'
            }, {
              title: 'OK',
              onPress: () => setIsSoundOn(false)
            }]}
          />

        </TouchableOpacity>

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
  }
})
