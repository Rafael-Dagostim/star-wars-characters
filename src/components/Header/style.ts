import styled from 'styled-components';

export const HeaderStyle = styled.header`
  text-align: center;
  h1 {
    font-family: StarJediHollow;
    color: #D0E10C;
    font-size: 8rem;
  }
  h2 {
    font-family: StarJediHollow;
    color: white;
    font-size: 3rem;
  }

  @font-face {
    font-family: StarJedi;
    src: url("./fonts/StarJedi.ttf");
  }

  @font-face {
    font-family: StarJediHollow;
    src: url("./fonts/StarJediHollow.ttf");
  }
`