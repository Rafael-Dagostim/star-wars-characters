import React from 'react'
import { ReturnArrowStyle } from './style'
import { useNavigate } from 'react-router-dom'

import BackArrowSvg from '../../assets/Arrow.svg'

export const ReturnArrow = () => {
  const navigate = useNavigate();

  return (
    <ReturnArrowStyle>
      <img src={BackArrowSvg} alt="Voltar" onClick={() => navigate('/')} />
    </ReturnArrowStyle>
  )
}
