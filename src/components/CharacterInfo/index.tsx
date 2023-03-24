import React from 'react'
import { CharacterInfoStyle } from './styled';

interface Props {
  title: string;
  value: string;
}

export const CharacterInfo = ({ title, value }: Props) => {
  return (
    <CharacterInfoStyle>
      <h4>{ title }</h4>
      <span>{ value }</span>
    </CharacterInfoStyle>
  )
}
