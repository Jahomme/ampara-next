import { theme } from '@/styles/theme';
import styled from 'styled-components';

interface LiProps {
  $active?: boolean;
}

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15vw;
  height: 100vh;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  padding: 3.5rem 0.5rem;

  a {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  a:hover {
    background-color: #555;
    border-radius: 20px;
  }

  a.active {
    background-color: #777;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100vw;
    height: 15vh;
    position: fixed;
    top: 85%;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Li = styled.li<LiProps>`
  background-color: ${(item) => (item.$active ? '#6f237d' : '')};
  box-shadow: ${(item) =>
    item.$active ? '0 4px 12px rgba(0, 0, 0, 0.15)' : ''};
  border-radius: 20px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    a {
      font-size: 1rem;
      flex-direction: column;
    }
  }
`;

