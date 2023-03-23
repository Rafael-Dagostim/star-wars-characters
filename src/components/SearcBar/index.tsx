import React, { ChangeEventHandler } from 'react'
import { SearchBarStyle, SearchInputStyle, SearchIconStyle } from './style';

import SearchIconSvg from '../../assets/SearchIcon.svg'

interface Prop {
  onChange: (value: string) => void
}

export const SearchBar = ({ onChange }: Prop) => {
  return (
    <SearchBarStyle>
      <SearchIconStyle src={SearchIconSvg} />
      <SearchInputStyle placeholder='Digite o nome do personagem' onChange={(event) => onChange(event.target.value)} />
    </SearchBarStyle>
  )
}
