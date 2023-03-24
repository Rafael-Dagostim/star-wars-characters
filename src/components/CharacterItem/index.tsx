import React from 'react'
import { Link } from 'react-router-dom'
import { Character } from '../../types'
import { CharacterItemStyle, LinkStyle } from './style'

interface Props {
  character: Character
  index: number
}

export const CharacterItem = ({ character, index }: Props) => {
  return (
    <CharacterItemStyle>
      <LinkStyle to={`character/${index}`}>
        <p>{character.name}</p>
      </LinkStyle>
    </CharacterItemStyle>
  )
}
