import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native'

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
        <DejaVuSansMono fontWeight='bold'>BLUE5</DejaVuSansMono>
      </View>

      <View style={styles.iconsStyle}>

        <TouchableOpacity onPress={() => setIsAboutVisible(true)}> 
          <Icon
            style={styles.iconStyle}
            name='info'
          />
          <Modal
            title='About'
            message= {
              'The game A Dark Room inspired me to develop a game of my own.' +
              'Game design is heavy influenced by games like Beneath a Steel Sky, ' +
              'Flashback, Myst & Riven, Subnautica, The Secret of Monkey Island ' +
              'and The Witness. Music is done by Jesse Kruiger.'
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
            message= {
              `You will loose all your progress and start the game rom the beginning. ` +
              `Are you sure?`
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
            message= {
              `Every time someone turns the sound off, its creator sheds a tear. ` +
              `Are you sure?`
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
    paddingTop: 60,
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
  androidDefaultscontainer: {
    backgroundColor: '#FAFAFA',
  },
  androidDefaultstitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  androidDefaultsmessage: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'normal',
  },
  androidAlertBox: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 50,
  },
  androidTitle: {
    margin: 24,
  },
  androidMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
})
