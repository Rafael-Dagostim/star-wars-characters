import styled from 'styled-components';

export const SearchBarStyle = styled.input.attrs({ type: 'string' })`
  width: 8rem;
  background: none;
  color: white;
  ::placeholder {
    color: white;
  }
`