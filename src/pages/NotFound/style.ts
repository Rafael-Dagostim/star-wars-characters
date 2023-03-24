import styled from 'styled-components';

export const NotFoundStyle = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: StarJedi;
  min-height: calc(100% - 50px);
  padding-bottom: 50px;
  text-align: center;
  gap: 2rem;

  span {
    text-align: center;
    font-size: 2rem;
    width: 30vw;

    &.num {
      text-align: center;
      font-size: 9rem;
      font-family: StarJediHollow;
      color: #D0E10C;
    }
  }

  footer {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    bottom: 0;
    width: 100vw;
    height: 4rem;

    :hover {
      color: #D0E10C;
      cursor: pointer;
    }
  }
`