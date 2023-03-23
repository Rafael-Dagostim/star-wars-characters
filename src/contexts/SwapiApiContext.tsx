import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Character, Film } from '../types';
import { swapiApiService } from '../services';

interface ContextProps {
  characters: Character[],
  films: Film[],
}

type ProviderProps = {
  children: ReactNode;
}

export const SwapiApiContext = createContext<ContextProps>({ characters: [], films: [] });

export const SwapiApiProvider = ({ children }: ProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [films, setFilms] = useState<Film[]>([])

  const INITIAL_PAGE = 1;
  const TOTAL_PAGES = 9;

  const loadAllFilms = async () => {
    const data = await swapiApiService.getAllFilms();
    setFilms(data);
  }

  const loadAllCharacters = async () => {
    for (let i = INITIAL_PAGE; i <= TOTAL_PAGES; i++) {
      try {
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