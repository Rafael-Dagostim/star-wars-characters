import React from 'react'
import { Character } from '../../types'
import { CharacterInfo } from '../CharacterInfo'
import { CharacterDescriptionStyle } from './styled'

interface Props {
  character: Character
}

export const CharacterDescription = ({character}: Props) => {
  return (
    <CharacterDescriptionStyle>
      <h1>{ character.name }</h1>
      <section>
        <CharacterInfo title='ano de nascimento' value={character.birth_year} />
        <CharacterInfo title='gênero' value={ character.gender }/>
        <CharacterInfo title='cor dos olhos' value={ character.eye_color }/>
      </section>
    </CharacterDescriptionStyle>
  )
}
