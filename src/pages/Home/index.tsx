import React, { useEffect, useState } from 'react'
import { CharacterList } from '../../components/CharacterList'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearcBar'
import { useSwapiApiContext } from '../../hooks'
import { Character } from '../../types'
import { HomeStyle } from './style'

export const Home = () => {
  const { characters } = useSwapiApiContext()

  const [onDisplayCharacters, setOnDisplayCharacters] = useState<Character[]>(characters);

  useEffect(() => {
    if (!onDisplayCharacters.length) setOnDisplayCharacters(characters)
  }, [characters])

  const handleCharacterFilter = (value: string) => {
    const filterCriteria = value.toLowerCase().trim();
    const filteredCharacters = characters.filter((char) => char.name.toLowerCase().trim().indexOf(filterCriteria) >= 0)
    setOnDisplayCharacters(filteredCharacters);
  }

  return (
    <HomeStyle>
      <Header />
      <SearchBar onChange={handleCharacterFilter} />
      <CharacterList list={onDisplayCharacters} />
    </HomeStyle>
  )
}