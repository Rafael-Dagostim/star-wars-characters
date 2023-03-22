import React from 'react'
import { useSwapiApiContext } from '../../hooks';
import { Box } from '../Box';
import { SearchBarStyle } from './style';

export const SearchBar = () => {
  const { characters } = useSwapiApiContext();

  return (
    <Box remWidth={12} remHeight={20}>
      {/* <img src="../../assets/SearchIcon.svg" alt="" /> */}
      <SearchBarStyle placeholder='Digite o nome do personagem' />
    </Box>
  )
}
