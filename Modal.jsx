import React from 'react'
import { StyleSheet, View, Modal, Text, Pressable } from 'react-native'

import DejaVuSansMono from './DejaVuSansMonoText'
import Button from './Button'

export default function Menu({title, content, isVisible, setIsVisible, buttons}) {
  return(
    <Modal 
      visible={isVisible}
      transparent={true}
    >
      <Pressable 
        style={styles.background}
        onPress={() => setIsVisible(false)}
      />

      <View style={styles.alertBox}>
        <Text style={styles.title}>
          <DejaVuSansMono extraStyle={styles.title}>
            {title.toUpperCase()}
          </DejaVuSansMono>
        </Text>

        <Text style={styles.message}>
          <DejaVuSansMono>
            {content}
          </DejaVuSansMono>
        </Text>            

        <View style={styles.buttons}>
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                title={button.title.toUpperCase()}
                onPress={() => {                  
                  if(typeof button.onPress === 'function'){
                    button.onPress()
                  }
                  setIsVisible(false)
                }}
              />
            )
          })}
        </View>
      </View>
    </Modal>
  )
}
    
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  alertBox: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 50,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontWeight: 'bold',
    margin: 18,
  },
  message: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 18,
  },
  buttons: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 6,
    justifyContent: 'flex-end', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  }
})