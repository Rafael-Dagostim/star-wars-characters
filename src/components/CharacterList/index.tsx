import React from 'react'
import { Character } from '../../types'
import { CharacterItem } from '../CharacterItem'
import { CharacterListStyle } from './style'

interface Props {
  list: Character[]
}

export const CharacterList = ({ list }: Props) => {
  return (
    <CharacterListStyle>
      {list.map((character, index) => <CharacterItem character={character} key={index} />)}
    </CharacterListStyle>
  )
}
