import React from 'react'
import { EyeColor, translateEyeCollor } from '../../helpers'
import { Gender, translateGender } from '../../helpers/translateGender'
import { Character } from '../../types'
import { CharacterInfo } from '../CharacterInfo'
import { CharacterDescriptionStyle } from './styled'

interface Props {
  character: Character
}

export const CharacterDescription = ({ character }: Props) => {


  return (
    <CharacterDescriptionStyle>
      <h1>{character.name}</h1>
      <section>
        <CharacterInfo title='ano de nascimento' value={character.birth_year} />
        <CharacterInfo title='gênero' value={ translateGender(character.gender as Gender)} />
        <CharacterInfo title='cor dos olhos' value={translateEyeCollor(character.eye_color as EyeColor)} />
      </section>
    </CharacterDescriptionStyle>
  )
}
