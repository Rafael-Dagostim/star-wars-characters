import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterDescription } from '../../components/CharacterDescription';
import { Header } from '../../components/Header';
import { useSwapiApiContext } from '../../hooks';
import { CharacterInfoStyle } from './style';

export const CharacterInfo = () => {
  const { index } = useParams();
  const { characters } = useSwapiApiContext();
  const character = characters[Number(index)]

  return (
    <CharacterInfoStyle>
      <Header />
      <CharacterDescription character={character}/>
    </CharacterInfoStyle>
  )
}
