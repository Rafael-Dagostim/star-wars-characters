import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Character, Film } from '../types';
import { swapiApiService } from '../services';

interface ContextProps {
  characters: Character[],
  films: Film[],
  isLoadingCharacters: boolean,
}

type ProviderProps = {
  children: ReactNode;
}

export const SwApiContext = createContext<ContextProps>({ characters: [], films: [], isLoadingCharacters: false });

export const SwApiProvider = ({ children }: ProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [films, setFilms] = useState<Film[]>([])
  const [isLoadingCharacters, setIsLoadingCharacters] = useState<boolean>(false)

  const INITIAL_PAGE = 1;
  const TOTAL_PAGES = 9;

  const loadAllFilms = async () => {
    const data = await swapiApiService.getAllFilms();
    setFilms(data);
  }

  const loadAllCharacters = async () => {
    setCharacters([])
    let data: Character[] = []
    for (let i = INITIAL_PAGE; i <= TOTAL_PAGES; i++) {
      try {
        data.push(...await swapiApiService.getCharactersByPage(i));
        setCharacters(data);
      } catch (error) {
        toast.error(`Falha ao buscar página ${i} de personagens: ${(error as Error).message}`)
      }      
    }
  }

  useEffect(() => {
    console.log('AOPA');
    setIsLoadingCharacters(true);
    loadAllCharacters().then(() => setIsLoadingCharacters(false));
    loadAllFilms();
  }, [])

  return (
    <SwApiContext.Provider value={{ characters, films, isLoadingCharacters }}>{children}</SwApiContext.Provider>
  )
}