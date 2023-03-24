import React from 'react'
import { useSwApiContext } from '../../hooks'
import { Character } from '../../types'
import { CharacterFilmItem } from '../CharacterFilmItem/intex'
import { CharacterFilmListStyle } from './style'

interface Props {
  character: Character
}

export const CharacterFilmList = ({ character }: Props) => {
  const { films } = useSwApiContext()

  const characterFilms = films
    .filter((film) => character.films.includes(film.url))
    .sort((a, b) => a.episode_id - b.episode_id)

  return (
    <CharacterFilmListStyle>
      <h1>Filmes</h1>
      <section>
        {characterFilms.map((film) => <CharacterFilmItem key={film.episode_id} film={film} />)}
      </section>
    </CharacterFilmListStyle>
  )
}
