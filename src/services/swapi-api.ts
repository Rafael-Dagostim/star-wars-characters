import axios, { AxiosInstance } from 'axios';
import { Character, Film, SwapiPagination } from '../types';

const swapiApi: AxiosInstance = axios.create({ baseURL: 'https://swapi.dev/api' });

const getCharactersByPage = async(pageIndex = 1): Promise<Character[]> => {
  const response = await swapiApi.get<SwapiPagination<Character>>(`/people/?page=${pageIndex}`)
  return response.data.results;
}

const getFilms = async(): Promise<Film[]> => {
  const response = await swapiApi.get<SwapiPagination<Film>>(`/films`)
  return response.data.results;
}

export const swapiApiService = { getCharactersByPage, getAllFilms: getFilms };