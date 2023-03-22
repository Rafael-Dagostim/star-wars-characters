import React, { useContext } from 'react'
import { SwapiApiContext } from '../contexts/SwapiApiContext'

export const useSwapiApiContext = () => {
  const context = useContext(SwapiApiContext)

  if (!context) throw new Error('OUT_OF_CONTEXT')

  return context;
}
