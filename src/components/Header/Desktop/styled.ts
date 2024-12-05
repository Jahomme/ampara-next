import styled from 'styled-components';
import Image from 'next/image';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 0.5rem 1rem;
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
    color: ${({ theme }) => theme.colors.primaryDark};
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 12%;
    height: 12%;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryDark};
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

export const UserInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  div {
    color: white;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const StyledImage = styled(Image)`
  width: 20%;
  height: 20%;
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

export const SignOutIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
