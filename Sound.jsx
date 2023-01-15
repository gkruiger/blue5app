import React from 'react'
import { useEffect } from 'react';

import { Audio } from 'expo-av';

import part1and2 from './assets/music/part1and2.mp3'

export default function Sound({isSoundOn}) {
  
  const [sound, setSound] = React.useState();

  useEffect(() => {
    if(isSoundOn) {
      (async () => {
        const sound = new Audio.Sound();
        await sound.loadAsync(part1and2)
        await sound.playAsync()
        sound.setIsLoopingAsync(true)
        setSound(sound)
      })()   
    } else {
      (async () => {
        if(sound) sound.unloadAsync();
      })()   
    }
  }, [isSoundOn]);
 
  return (
    <>
    </>
  )
}