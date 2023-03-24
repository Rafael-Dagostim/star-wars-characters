import styled from 'styled-components';

export const CharacterFilmListStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  h1 {
    font-size: 1.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 40rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    section {
      width: 90%;
    }
  }

  @media screen and (max-width: 480px) {
    section {
      width: 90%;
    }
    padding-bottom: 1rem;
  }
`