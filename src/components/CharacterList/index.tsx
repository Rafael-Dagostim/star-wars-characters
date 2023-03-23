import React from 'react'
import { Character } from '../../types'
import { CharacterItem } from '../CharacterItem'
import { CharacterListStyle } from './style'

interface Prop {
  list: Character[]
}

export const CharacterList = ({ list }: Prop) => {
  return (
    <CharacterListStyle>
      {list.map((character, index) => <CharacterItem character={character} index={index} />)}
    </CharacterListStyle>
  )
}
