import styled from 'styled-components';

export const CharacterDescriptionStyle = styled.section`
  border: 3px #D0E10C solid;
  width: 40rem;
  background-color: rgba(0, 4, 99, 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  padding-top: 1.5rem;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 30rem;

    section {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    section {
      gap: 2rem;
      flex-direction: column;
    }
  }
`
