import styled from 'styled-components';

export const CharacterDescriptionStyle = styled.section`
  border: 3px #D0E10C solid;
  background-color: rgba(0, 4, 99, 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  section {
    display: flex;
    gap: 1rem;
  }
`
export const CharacterInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  h4 {
    color: white;
    font-size: large;
    font-weight: bold;
  }

  span {
    color: #D0E10C;
  }
`