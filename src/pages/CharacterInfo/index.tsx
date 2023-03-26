import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReturnArrow } from '../../components/ReturnArrow';
import { CharacterDescription } from '../../components/CharacterDescription';
import { CharacterFilmList } from '../../components/CharacterFilmList';
import { Header } from '../../components/Header';
import LoadingSpin from '../../components/LoadingSpin';
import { useSwApiContext } from '../../hooks';
import { Character } from '../../types';
import { CharacterInfoStyle } from './style';

export const CharacterInfo = () => {
  const { characters, isLoadingCharacters } = useSwApiContext();
  const [character, setCharacter] = useState<Character | null>(null)
  const { slug } = useParams();

  useEffect(() => {
    const char = characters.find((c) => c.slug === slug);
    if (char) setCharacter(char)
  }, [characters])

  return (
    <CharacterInfoStyle>
      <Header />
      <ReturnArrow/>
      {isLoadingCharacters && <LoadingSpin />}
      {!isLoadingCharacters && character && <>
        <CharacterDescription character={character} />
        <CharacterFilmList character={character} />
      </>}
    </CharacterInfoStyle>
  )
}
