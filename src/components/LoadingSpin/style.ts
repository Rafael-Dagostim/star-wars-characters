import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerStyle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 4px solid #251193;
  border-top-color: transparent;
  animation: ${spin} 0.6s linear infinite;
`;