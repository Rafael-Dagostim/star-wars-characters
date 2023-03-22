import React, { ReactNode } from 'react'
import { BoxStyle } from './styles'

interface Props {
  children: ReactNode,
  backgroundColor?: string,
  borderColor?: string,
  remWidth: number,
  remHeight: number,
}

export const Box = ({ children, backgroundColor, borderColor, remHeight, remWidth }: Props) => {
  return (
    <BoxStyle
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      remWidth={remWidth}
      remHeight={remHeight}
    >
      {children}
    </BoxStyle>
  )
}
