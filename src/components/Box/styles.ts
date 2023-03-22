import styled from 'styled-components';

interface Prop {
  backgroundColor?: string,
  borderColor?: string,
  remWidth: number,
  remHeight: number,
}

export const BoxStyle = styled.section<Prop>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#000463'};
  border-color: ${({ borderColor }) => borderColor ?? '#D0E10C'};
  border-width: 3px;
  border-style: solid;
  width: ${({ remWidth }) => `${remWidth}rem`};
  height: ${({remHeight}) => `${remHeight}rem`};
`