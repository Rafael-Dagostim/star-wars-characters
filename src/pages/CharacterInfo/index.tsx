import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReturnArrow } from '../../components/ReturnArrow';
import { CharacterDescription } from '../../components/CharacterDescription';
import { CharacterFilmList } from '../../components/CharacterFilmList';
import { Header } from '../../components/Header';
import LoadingSpin from '../../components/LoadingSpin';
import { useSwapiApiContext } from '../../hooks';
import { Character } from '../../types';
import { CharacterInfoStyle } from './style';

export const CharacterInfo = () => {
  const [character, setCharacter] = useState<Character | null>(null)
  const navigate = useNavigate();
  const { index } = useParams();
  const { characters, isLoadingCharacters } = useSwapiApiContext();

  useEffect(() => {
    if (!isLoadingCharacters) {
      if (!characters[Number(index)]) navigate('/notFound')
      setCharacter(characters[Number(index)])
    }
  }, [isLoadingCharacters])

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
