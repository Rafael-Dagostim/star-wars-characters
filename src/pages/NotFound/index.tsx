import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { NotFoundStyle } from './style';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundStyle>
      <Header/>
      <span className='num'>404</span>
      <span>infelizmente Não foi possível encontrar essa página</span>
      <footer onClick={() => navigate('/')}>voltar Para tela principal</footer>
    </NotFoundStyle>
  )
}
