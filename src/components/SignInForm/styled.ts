import { styled } from 'styled-components';

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
