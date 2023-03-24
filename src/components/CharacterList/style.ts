import styled from 'styled-components';

export const CharacterListStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40rem;
  max-height: 31rem;
  overflow: auto;

  @media screen and (max-width: 768) {
    width: 100%;
  }
`