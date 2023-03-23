import styled from 'styled-components';

export const SearchBarStyle = styled.section`
  width: 40rem;
  height: 2.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center ;
  text-align: center;
  border: 3px #D0E10C solid;
  background-color: none;
`

export const SearchInputStyle = styled.input.attrs({ type: 'string' })`
  width: 90%;
  height: 100%;
  padding-left: 1rem;
  background: none;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  color: white;
  outline: none;
  ::placeholder {
    color: white;
    border: none;
  }
`

export const SearchIconStyle = styled.img`
  width: 1rem;
  height: 1rem;
`