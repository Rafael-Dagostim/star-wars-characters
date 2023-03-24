import React from 'react'
import { toRoman } from '../../helpers'
import { Film } from '../../types'
import { CharacterFilmItemStyle } from './style'

interface Props {
  film: Film
}

export const CharacterFilmItem = ({ film }: Props) => {
  const romanNumber = toRoman(film.episode_id);

  const convertFilmDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-')
    return `${day}/${month}/${year}`;
  }

  return (
    <CharacterFilmItemStyle>
      <span>{romanNumber} - {film.title}</span>
      <span className='date'>{ convertFilmDate (film.release_date) }</span>
    </CharacterFilmItemStyle>
  )
}
