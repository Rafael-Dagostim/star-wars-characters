import React from 'react'
import { Character } from '../../types'
import { CharacterDescriptionStyle, CharacterInfoStyle } from './styled'

interface Prop {
  character: Character
}

export const CharacterDescription = ({character}: Prop) => {
  return (
    <CharacterDescriptionStyle>
      <h1>{ character.name }</h1>
      <section>
        <CharacterInfoStyle>
          <h4>Ano de Nascimento</h4>
          <span>{ character.birth_year }</span>
        </CharacterInfoStyle>
        <CharacterInfoStyle>
          <h4>Gênero</h4>
          <span>{ character.gender }</span>
        </CharacterInfoStyle>
        <CharacterInfoStyle>
          <h4>Cor dos Olhos</h4>
          <span>{ character.eye_color }</span>
        </CharacterInfoStyle>
      </section>
    </CharacterDescriptionStyle>
  )
}
