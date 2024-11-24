import styled from 'styled-components';
import Image from 'next/image';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0rem 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  button {
    background-color: transparent;
  }

  .loginButton {
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginButton span {
    margin: 0 0 0 5px;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 12%;
    height: 12%;
  }

  a {
    color: #fff;
    margin: 0 20px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(85%);
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledImage = styled(Image)`
  width: 12%;
  height: 12%;
`;

export const FixedButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 85px;
  height: 85px;
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 999; /* Garante que o botão esteja sempre sobre os outros elementos */
`;
