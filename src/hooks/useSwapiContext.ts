import React, { useContext } from 'react'
import { SwApiContext } from '../contexts/SwApiContext'

export const useSwApiContext = () => {
  const context = useContext(SwApiContext)

  if (!context) throw new Error('OUT_OF_CONTEXT')

  return context;
}
