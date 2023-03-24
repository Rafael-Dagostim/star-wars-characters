import styled from 'styled-components';

export const CharacterListStyle = styled.section`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  width: 40rem;
  max-height: 31rem;
  overflow: auto;
  gap: 0.3rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`