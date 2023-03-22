import React, { ReactNode, useEffect, useState } from 'react';
import { SwapiApiContext } from './context';
import { Character, Film } from '../../types';
import { swapiApiService } from '../../services';
import { toast } from 'react-toastify';

type Props = {
  children: ReactNode;
}

export const SwapiApiProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [films, setFilms] = useState<Film[]>([])

  const INITIAL_PAGE = 1;
  const TOTAL_PAGES = 9;

  const loadAllFilms = async () => {
    const data = await swapiApiService.getAllFilms();
    console.log(data);
    setFilms(data);
  }

  const loadAllCharacters = async () => {
    for (let i = INITIAL_PAGE; i <= TOTAL_PAGES; i++) {
      try {
        if (i == 5) throw new Error('Teste')
        const data = await swapiApiService.getCharactersByPage(i)
        setCharacters((curr) => curr.concat(data));
      } catch (error) {
        toast.error(`Falha ao buscar página ${i} de personagens: ${(error as Error).message}`)
      }
    }
  }

  useEffect(() => {
    loadAllFilms();
    loadAllCharacters();
  }, [])

  return (
    <SwapiApiContext.Provider value={{characters, films}}>{ children }</SwapiApiContext.Provider>
  )
}
