import React from 'react'
import { HeaderStyle } from './style'

import Head from '../../assets/Head.svg';

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={Head} alt="" />
    </HeaderStyle>
  )
}
