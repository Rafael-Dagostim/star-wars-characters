import styled from 'styled-components';

export const HeaderStyle = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
  h1 {
    font-family: StarJediHollow;
    color: #D0E10C;
    font-size: 7rem;
    line-height: 0.8;
    word-spacing: 0.1em;
  }
  h2 {
    font-family: StarJedi;
    color: white;
    font-size: 3rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-family: StarJedi;
      color: white;
      font-size: 1.5rem;
    }
  }
`