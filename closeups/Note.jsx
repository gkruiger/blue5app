import React, { useState } from 'react'

import { Text, StyleSheet, View } from 'react-native'

import DejaVuSansMonoText from '../DejaVuSansMonoText'
import IosevkaText from '../IosevkaText'
import EversonMonoText from '../EversonMonoText'
import Button from '../Button'
import AyanaText from '../AyanaText'

export const Note = ({id}) => {

  let elements = [
    ['\u{1F702}', 'Fire', 'ahi'],
    ['\u{1F746}', 'Oil', 'aila'],
    ['\u{1F706}', 'Aqua regia (royal water)', 'ali i wai'],
    ['\u{1F701}', 'Air', 'ea'],
    ['\u{1F721}', 'Iron ore', 'hao hao'],
    ['\u{1F703}', 'Earth', 'honua'],
    ['\u{1F72A}', 'Lead ore', 'ke kepau oka'],
    ['\u{1F720}', 'Copper ore', 'keleawe keleawe'],
    ['\u{1F732}', 'Regulus', 'liona'],
    ['\u{1F708}', 'Aqua vitae (water of life)', 'ola wai'],
    ['\u{1F714}', 'Salt', 'pa akai'],
    ['\u{1F718}', 'Rock salt', 'pa akai pohaku'],
    ['\u{1F704}', 'Water', 'wai'],
    ['\u{1F705}', 'Aquafortis (strong water)', 'wai ikaika'],      
  ]
 
  const notes = [{
    id: 'missionlog',
    pages: [
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>Khrysos Mission</DejaVuSansMonoText>{"\n"}
            - Type: SAR{"\n"}
            - Target: dr. Inglesias Berry{"\n"}
            - Targets last known position: planet H-19.7/155.8{"\n"}
            - Targets status: unknown{"\n"}
            - Objectives: target location, assesment and retrieval
        </DejaVuSansMonoText>
      , 
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>Planet details</DejaVuSansMonoText>{"\n"}
            - ID: H-19.7/155.8{"\n"}
            - Cluster: K81{"\n"}
            - Surface type: 99.87% water, 0.13% land{"\n"}
            - Existing population: probably human
        </DejaVuSansMonoText>
      ,
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>Mission brief (1/2)</DejaVuSansMonoText>{"\n"}
          More than a decade ago, the Exospace Reseach Center for Other Civilizations
          provided readings for planet H-19.7/155.8 that indicated the existence of life.
          Further investigation confirmed these initial readings and even provided strong evidence for a human civilization.
          The ERCOC assigned team RED the mission to establish first contact.
        </DejaVuSansMonoText>
      , 
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>Mission brief (2/2)</DejaVuSansMonoText>{"\n"}
          Dr. Berry insisted for this mission to go alone. 
          He was supposed to send regular updates, but none was ever received.
          Team BLUE is now in charge of finding him and bringing him back. 
          The team consists of Zendaya (BLUE1), Alexandar (BLUE2), Sarah (BLUE3), Rafael (BLUE4) and you (BLUE5) of course.
          You'll be going alone.
        </DejaVuSansMonoText>
      , 
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>SPPL</DejaVuSansMonoText>{"\n"}
          You'll be launched from cluster K81's ERCOC Central Hub using a stardard SPPL (Single Person Planet Lander).
          The SPPL's onboard systems will automatically put you in and out of cryosleep during the journey. 
          Remember: all safety measures onboard, like entering and exiting your SPPL, are secured by your personal ID.
        </DejaVuSansMonoText>      
    ]
  }, {
    id: 'cavenote',
    pages: [
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4287-45</DejaVuSansMonoText>{"\n"}
        What a surpise!{"\n"}
        Yesterday night I was taken in by the local people.{"\n"}
        Everybody from the island welcomed me with their dance.{"\n"}
        And with everybody, I really mean everybody: from only a couple of weeks old, until way over 80.{"\n"}
        The total darkness was chased away by a great fire.{"\n"}
        Around the fire they all stood there, looking at me.{"\n"}
        They all stayed in their places and used only their arms for this dance.{"\n"}
        Never have I ever seen something so magical and heart warming.
      </DejaVuSansMonoText>      
    ]
  }, {
    id: 'cavedrawingsleft',
    pages: [
      <View>
        <IosevkaText extraStyle={{textAlign:'center', fontSize: 40}}>
          {String.fromCodePoint(0x1FBC7)} - {String.fromCodePoint(0x2B15)}{"\n"}
          {String.fromCodePoint(0x1FBC5)} - {String.fromCodePoint(0x2B13)}
        </IosevkaText>
      </View>
    ]
  }, {
    id: 'cavedrawingsright',
    pages: [
      <View>
        <IosevkaText extraStyle={{textAlign:'center', fontSize: 40, letterSpacing: 10}}>
          {String.fromCodePoint(0x1FBC7)}{"\n"}
          {String.fromCodePoint(0x1FBC5)} {String.fromCodePoint(0x1FBC5)}{"\n"}
          {String.fromCodePoint(0x1FBC8)} {String.fromCodePoint(0x1FBC8)} {String.fromCodePoint(0x1FBC8)}{"\n"}
          {String.fromCodePoint(0x1FBC9)} {String.fromCodePoint(0x1FBC9)} {String.fromCodePoint(0x1FBC9)} {String.fromCodePoint(0x1FBC9)}
        </IosevkaText>
      </View>
    ]
  }, {
    id: 'bridgenote',
    pages: [
      <View>
        <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>K81-4288-62</DejaVuSansMonoText>{"\n"}
          Last night the heat reader was fiddled with for the third time this week.{"\n"}
          I don't want to set it to the right settings again each morning, so I've put a simple lock on it.{"\n"}
          That should do the trick.{"\n"}
        </DejaVuSansMonoText>
        <Text style={{textAlign: 'center'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <IosevkaText extraStyle={{color: 'red'}}>
                {String.fromCodePoint(0x1F866)}{' '}
                {String.fromCodePoint(0x1F863)}{' '}
                {String.fromCodePoint(0x1F867)}
              </IosevkaText>
              <IosevkaText extraStyle={{color: 'green'}}>
                {'  '}
                {String.fromCodePoint(0x1F864)}{' '} 
                {String.fromCodePoint(0x1F861)}{' '} 
                {String.fromCodePoint(0x1F865)}
              </IosevkaText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <IosevkaText extraStyle={{color: 'red'}}>
                {String.fromCodePoint(0x1F862)}{' '}
                {'  '}{' '}
                {String.fromCodePoint(0x1F860)}
              </IosevkaText>
              <IosevkaText extraStyle={{color: 'green'}}>
                {'  '}
                {String.fromCodePoint(0x1F860)}{' '}
                {'  '}{' '}
                {String.fromCodePoint(0x1F862)}
              </IosevkaText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <IosevkaText extraStyle={{color: 'red'}}>
                {String.fromCodePoint(0x1F865)}{' '}
                {String.fromCodePoint(0x1F861)}{' '}
                {String.fromCodePoint(0x1F864)}
              </IosevkaText>
              <IosevkaText extraStyle={{color: 'green'}}>
                {'  '}
                {String.fromCodePoint(0x1F867)}{' '}
                {String.fromCodePoint(0x1F863)}{' '}
                {String.fromCodePoint(0x1F866)}
              </IosevkaText>
            </View>
          </View>
        </Text>
      </View>
    ]
  }, {
    id: 'gardennote',
    pages: [
      <DejaVuSansMonoText>
          <DejaVuSansMonoText fontWeight='bold'>K81-4289-12</DejaVuSansMonoText>{"\n"}
          Kayana showed me her garden today.
          It was really lovely, both the garden itself and seeing her so full of passion for it.
          Apart from the colorful flowers, plants and trees, she also showed me the statues.
          She confirmed what I already suspected: they represent their gods:
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4289-12 (continued)</DejaVuSansMonoText>{"\n"}
        - Awina, goddess of sea. She is in all the water, from a small raindrop to the big ocean. She is believed to be the mother of all life.{"\n"}
        - Alano, god of the earth. He is in everything we walk on. He is believed to be the protector of all life.{"\n"}
        - Anomi, goddess of the sky. She is in everything above the earth. She is believed to have power over all elements in the sky, like the wind, but also the sun and the stars.{"\n"}
        - Ailua, god of our dreams, hopes, and love. He is believed to be the driver of all feelings.
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4289-15</DejaVuSansMonoText>{"\n"}
          Today I tried opening the garden gate.
          I saw people coming in and out of the garden, but when I tried to open the gate, it was closed.
          I asked Kayana about it.
          She said that only those who know all the sixteen steps of the gods, can get in.
          When I looked confused, she drew a few symbols in the sand:{"\n"}{"\n"}
          {String.fromCodePoint(0x25B6)}{' '}
          {String.fromCodePoint(0x2501)}{' '}
          ?{' '}
          {String.fromCodePoint(0x2501)}{' '}
          {String.fromCodePoint(0x25C1)}{"\n"}{"\n"}
          After that, she gave me that special look of hers, smiled and walked away.
      </DejaVuSansMonoText>
    ]
  }, {
    id: 'awinastatue',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <AyanaText extraStyle={{fontSize: 50}}>awina</AyanaText>
        {'\n'}{'\n'}{'\n'}
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
          {String.fromCodePoint(0x251B)}{' '}
          {String.fromCodePoint(0x250F)}{' '}
          {String.fromCodePoint(0x2501)}{' '}
          {String.fromCodePoint(0x2501)}
        </DejaVuSansMonoText>
      </Text>
    ]
  }, {
    id: 'alanostatue',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
          {String.fromCodePoint(0x2513)}{' '}
          {String.fromCodePoint(0x2503)}{' '}
          {String.fromCodePoint(0x251B)}{' '}
          {String.fromCodePoint(0x2517)}
        </DejaVuSansMonoText>
      </Text>
    ]
  }, {
    id: 'anomistatue',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <AyanaText extraStyle={{fontSize: 50}}>anomi</AyanaText>
        {'\n'}{'\n'}{'\n'}
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
          {String.fromCodePoint(0x2513)}{' '}
          {String.fromCodePoint(0x250F)}{' '}
          {String.fromCodePoint(0x251B)}{' '}
          {String.fromCodePoint(0x250F)}
        </DejaVuSansMonoText>
      </Text>
    ]
  }, {
    id: 'ailuastatue',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <AyanaText extraStyle={{fontSize: 50}}>ailua</AyanaText>
        {'\n'}{'\n'}{'\n'}
        <DejaVuSansMonoText extraStyle={{fontSize: 40}}>
          {String.fromCodePoint(0x2517)}{' '}
          {String.fromCodePoint(0x2501)}{' '}
          {String.fromCodePoint(0x2501)}{' '}
          {String.fromCodePoint(0x2501)}
        </DejaVuSansMonoText>
      </Text>
    ]
  }, {
    id: 'schoolblackboardleft',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <AyanaText extraStyle={{fontSize: 45}}>a e h i k l m n o p u w</AyanaText>
      </Text>
    ]
  }, {
    id: 'schoolblackboardright',
    pages: [
      <Text style={{textAlign: 'center'}}>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'yellow', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
        {'\n'}
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'green', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'orange', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
        {'\n'}
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'blue', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'purple', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
        <DejaVuSansMonoText extraStyle={{fontSize: 40, color: 'red', letterSpacing: 40}}>{'\u{25B2}'}</DejaVuSansMonoText>
      </Text>
    ]
  }, {
    id: 'schoolnote',
    pages: [
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4290-78</DejaVuSansMonoText>{"\n"}
        Akamai gave me a tour of his lab today. 
        He was most proud of his setup. 
        And has was right to feel that way: 
        I witnessed an amazing collection of fluids, powers and solids.
        So many colors!
        Tomorrow, he has business elsewhere, but he invited me to do some investigation on my own. 
        This should get you access, he said:{'\n'}
        {'\n'}
        <AyanaText extraStyle={{fontSize: 30, letterSpacing: 5}}>
         03 21 23 32          
        </AyanaText>{'\n'}
        {'\n'}
        I'll definitely take a look tomorrow.
      </DejaVuSansMonoText>
    ]
  }, {
    id: 'lableftnote',
    pages: [
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4293-5</DejaVuSansMonoText>{"\n"}
          Of course I couldn't miss the two great canvasses in Akamai's lab.
          I quickly learned that he considered them his life's work.
          His mission - as he told me - was to discover every element within nature.
          In the last two years, he had extended his list to fourteen different elements.
          For each element he created a symbol and a name.
          Neat!
          I suspected that the elements he discovered were already known to science, but I didn't dare to spoil the fun.
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4293-5 (continued)</DejaVuSansMonoText>{"\n"}
          I spent a full day is his lab, asking him al kinds of questions.
          He was eager to answer and happily let me use his devices.
          At the end of the day I was able to translate the Ayana names for the elements Akamai discovered to the ones I'm familiar with.
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4293-5 (continued)</DejaVuSansMonoText>{"\n"}
        <Text>
          {elements.map((elem, index) => {
            return (
              index < 7 &&
              <Text key={index}>
                <AyanaText >{elem[2]}</AyanaText>
                <DejaVuSansMonoText> | {elem[1]}</DejaVuSansMonoText>
                {'\n'}
              </Text>
            )
          })}
        </Text>
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4293-5 (continued)</DejaVuSansMonoText>{"\n"}
        {elements.map((elem, index) => {
          return (
            index >= 7 &&
            <Text key={index}>
              <AyanaText >{elem[2]}</AyanaText>
              <DejaVuSansMonoText> | {elem[1]}</DejaVuSansMonoText>
              {'\n'}
            </Text>
          )
        })}
    </DejaVuSansMonoText>
    ]
  }, {
    id: 'lableftcanvas',
    pages: [
        <View>
          {elements.map((elem, index) => {
            return (
              index % 2 == 0 &&
              <Text key={index}>
                <EversonMonoText extraStyle={{fontSize: 40, lineHeight: 50}}>{elem[0]} </EversonMonoText>
                <AyanaText extraStyle={{fontSize: 20}}>{elem[2]}</AyanaText>
              </Text>
            )
          })}
        </View>
    ]
  }, {
    id: 'labrightcanvas',
    pages: [
      <View>
        {elements.map((elem, index) => {
          return (
            index % 2 == 1 &&
            <Text key={index}>
              <EversonMonoText extraStyle={{fontSize: 40, lineHeight: 50, flexShrink: 1}}>{elem[0]} </EversonMonoText>
              <AyanaText extraStyle={{fontSize: 20}}>{elem[2]}</AyanaText>
            </Text>
          )
        })}
      </View>
    ]
  }, {
    id: 'lableftenvelope',
    pages: [
      <DejaVuSansMonoText fontStyle='italic'>
        Dear,
        {'\n'}{'\n'}
        If you've come{'\n'}
        it means that{'\n'}
        to learn quite{'\n'}
        this island.{'\n'}
        the notes I left{'\n'}
        on your jouney.{'\n'}
        hoped to
        {'\n'}{'\n'}
        The truth is{'\n'}
        learning so{'\n'}
        island and its{'\n'}
        became a part{'\n'}
        I've become{'\n'}
        So when they{'\n'}
        leave this place,{'\n'}
        had to
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText fontStyle='italic'>
        I'm sure this{'\n'}
        even begin{'\n'}
        questions you{'\n'}
        me. I therefore{'\n'}
        to follow me,{'\n'}
        to follow{'\n'}
        place. My id - GREY{'\n'}
        guide you{'\n'}
        {'\n'}
        I hope I'll{'\n'}
        {'\n'}
        Inglesias
      </DejaVuSansMonoText>
    ]
  }, {
    id: 'labrightnote',
    pages: [
      <DejaVuSansMonoText>
        <DejaVuSansMonoText fontWeight='bold'>K81-4294-82</DejaVuSansMonoText>{"\n"}
        Akamai believed that the elements he had found could be combined.
        He was convinced that certain combinations would unlock new possibilities. 
        He said he already found one: fire and oil, and he hoped 
        Ailua was honored by this discovery, as it provided his people with continuous warmth and light.
        He had high hopes for combining Awina's element with its three variants.
      </DejaVuSansMonoText>
    ]
  }, {
    id: 'labrightenvelope',
    pages: [
      <DejaVuSansMonoText fontStyle='italic' extraStyle={{textAlign: 'right'}}>
        reader,
        {'\n'}{'\n'}
        this far,{'\n'}
        you've come{'\n'}
        a bit about{'\n'}
        I hope that{'\n'}
        helped you{'\n'}
        Maybe you{'\n'}
        find me.
        {'\n'}{'\n'}
        that after{'\n'}
        much about this{'\n'}
        people, they{'\n'}
        of me, and{'\n'}
        a part of them.{'\n'}
        decided to{'\n'}
        I felt I{'\n'}
        go with them.
      </DejaVuSansMonoText>
    ,
      <DejaVuSansMonoText fontStyle='italic' extraStyle={{textAlign: 'right'}}>
        doesn't{'\n'}
        to answer the{'\n'}
        must have for{'\n'}
        invite you{'\n'}
        or better:{'\n'}
        us, to our new{'\n'}
        4 - will{'\n'}
        to me.{'\n'}
        {'\n'}
        see you soon.{'\n'}
        {'\n'}
        Berry
      </DejaVuSansMonoText>
    ]
  }]  
  
  let pages = [];
  for(let note of notes) {
    if(note.id == id) {
      pages = note.pages
    }
  }

  const [page, setPage] = useState(0)

  return (
    <View  style={styles.noteStyle}>

      <View>
        {pages[page]}
      </View>

      {pages.length > 1 &&
        <View style={styles.buttons}>
          <Button 
            title='Previous'
            disabled={page == 0 ? true : false}
            onPress={() => {setPage(page == 0 ? 0 : page-1)}}
          />

          <Button 
            title='Next'
            disabled={page == pages.length-1 ? true : false}
            onPress={() => {setPage(page == pages.length-1 ? page : page+1)}}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  noteStyle: {
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor: '#ccc',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
})