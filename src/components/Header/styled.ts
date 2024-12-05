import styled from 'styled-components';
import Image from 'next/image';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  padding: 0 10px;
  display: flex;
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
  }

  .loginButton span {
    margin: 0 0 0 5px;
  }

  img {
    width: 12%;
    height: 12%;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin: 0 20px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(85%);
    }
  }

  @media (max-width: 1200px) {
    .links {
      display: none;
    }
    .links-open {
      display: flex;
      flex-direction: column;
      width: 30%;
      text-align: center;
    }
    .links-open a {
      color: #fff;
      margin: 0 10px;
      flex: 1 1 45%;
      margin: 5px 0;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 18%;
      height: 18%;
    }

    a {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.7rem;
    }
  }

  @media (min-width: 1200px) {
    .button {
      display: none;
    }
    .links-open {
      display: none;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledImage = styled(Image)`
  width: 12%;
  height: 12%;

  @media (max-width: 500px) {
    width: 18%;
    height: 18%;
  }
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
