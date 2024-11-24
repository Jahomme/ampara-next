import { keyframes, styled } from 'styled-components';

export const SocialIcons = styled.div`
  margin: 20px 0;

  a {
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
  }
`;

export const LoginContainer = styled.div`
  .error {
    color: red;
    align-self: self-start;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
`;
