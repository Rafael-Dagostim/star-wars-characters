import { createContext } from 'react';
import { Character, Film } from '../../types';

interface Props {
  characters: Character[],
  films: Film[],
}

export const SwapiApiContext = createContext<Props>({ characters: [], films: [] });