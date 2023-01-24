import { View } from 'react-native';

import React from 'react'
import {useState, useEffect, useRef} from 'react'

import { StyleSheet, DevSettings, StatusBar } from 'react-native';

import RNRestart from 'react-native-restart'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';

import Menu from './Menu'
import Actions from './Actions'
import Story from './Story'
import CloseUp from './CloseUp'
import Sound from './Sound'

import {interactions, locations} from './gameData'
import { ScrollView } from 'react-native';

export default function App() {
  
  const [stateIsLoaded, setStateIsLoaded] = useState(false)

  const scrollRef = useRef()

  useEffect(() => {
    AsyncStorage.getItem('state').then((response) => {
      if(response != null) {
        let state = JSON.parse(response)

        setIsSoundOn(state.isSoundOn)
        setActions(state.actions)
        setStoryLines(state.storyLines)
        setLocation(state.location)
        setHistory(state.history)
        setCloseUp(state.closeUp)
      }
      
      setStateIsLoaded(true)
    })  
  }, [])

  const [isSoundOn, setIsSoundOn] = useState(true)
  const [actions, setActions] = useState([])
  const [storyLines, setStoryLines] = useState()
  const [location, setLocation] = useState('')
  const [history, setHistory] = useState([])
  const [closeUp, setCloseUp] = useState(undefined)
 
  useEffect(() => {
    AsyncStorage.setItem(
      'state',
      JSON.stringify({
        isSoundOn: isSoundOn,
        actions: actions,
        storyLines: storyLines,
        location: location,
        history: history,
        closeUp: closeUp,
      })
    )
  }, [isSoundOn, actions, storyLines, location, history, closeUp]);
 
  const processAction = (id) => {
    
    if(id == 79) {
      setTimeout(() => {
        setStoryLines([])
        setStoryLines([
          {text: 'The rest of the journey might one time be written.', id: uuidv4()},
          {text: 'Thanks for playing!', id: uuidv4()}
        ])
      }, 6000);
    }
    
    for(let action of interactions) {
      if(action.id == id) {
        if(action.closeUp) setCloseUp(action.closeUp)
        if(action.texts) addStoryLines(action.texts)
        if(action.location) {
          setLocation(action.location)
          addStoryLines(getLocationTexts(action.location))
        }
          
        if(!action.closeUp) setHistory(history => [...history, id])
      }
    }
  }

  const addStoryLines = (texts) => {
    if(texts != undefined) {
      setStoryLines(storyLines => [...(storyLines ? storyLines : []), {text: texts.join(' '), id: uuidv4()}])
    }
  }
  
  const getLocationTexts = (id) => {
    for(let location of locations) {
      if(location.id == id) {
        return location.texts
      }
    }
  }

  useEffect(function updateActions() {
  
    setActions([])

    for(let action of interactions) {
      let add = true; 
      
      if(action.requirements.location != location) add = false
      
      for(let item of action.requirements.notInHistory) {
        if(Array.isArray(item)) {
          if(item.every((element) => history.includes(element))) {
            add = false;
          }
        } else {
          if(history.indexOf(item) != -1) {
            add = false
          }
        }
      }

      let temp = false;
      
      if(action.requirements.inHistory.length == 0) {
        temp = true;
      }
      
      for(let item of action.requirements.inHistory) {
        if(Array.isArray(item)) {
          if(item.every((element) => history.includes(element))) {
            temp = true;
          }
        } else {
          if(history.indexOf(item) != -1) {
            temp = true
          }
        }
      }
      if(!temp) add = false

      if(closeUp != undefined && action.closeUp && closeUp.id == action.closeUp.id) add = false

      if(action.id == history[history.length - 1] && action.closeUp == undefined) add = false

      if(add) {
        setActions(actions => [...(actions ? actions : []), {id: action.id, name: action.name}])  
      }
    }
  }, [location, history, closeUp]);

  async function solutionFound() {
    for(let action of interactions) {
      if(action?.closeUp?.id == closeUp.id) {
        setCloseUp(undefined)
        setHistory(history => [...history, action.id])
        setStoryLines(storyLines => [...storyLines, {text: closeUp.texts.join(' ') + ' ', id: uuidv4()}])
      }
    }
  }

  function restart() {
    AsyncStorage.removeItem('state')
    __DEV__ ? DevSettings.reload() : RNRestart.Restart()
  }

  if(storyLines == undefined) {
    processAction(0)
  }

  return (
    stateIsLoaded &&
      <View>
        <StatusBar
          backgroundColor="#aaa"
          barStyle='dark-content'
        />
        <Menu
          appStyle={styles.appStyle}
          isSoundOn={isSoundOn} 
          setIsSoundOn={setIsSoundOn}
          restart={restart}
        />
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() => {scrollRef.current?.scrollTo({x: 0, y: 0, animated: true})}}
        >
          <CloseUp
            appStyle={styles.appStyle}
            closeUp={closeUp}
            solutionFound={solutionFound}
          />
          <Actions
            appStyle={styles.appStyle}
            actions={actions}
            processAction={processAction}
            closeUp={closeUp}
            setCloseUp={setCloseUp}
          />
          <Story
            appStyle={styles.appStyle}
            lines={storyLines}
          />
          <Sound
            isSoundOn={isSoundOn}
          />
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  appStyle: {
    paddingLeft: 25,
    paddingRight: 25,
  }
})
