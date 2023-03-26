import React from 'react'
import { Link } from 'react-router-dom'
import { Character } from '../../types'
import { CharacterItemStyle, LinkStyle } from './style'

interface Props {
  character: Character
}

export const CharacterItem = ({ character }: Props) => {
  return (
    <CharacterItemStyle>
      <LinkStyle to={`character/${character.slug}`}>
        <p>{character.name}</p>
      </LinkStyle>
    </CharacterItemStyle>
  )
}
