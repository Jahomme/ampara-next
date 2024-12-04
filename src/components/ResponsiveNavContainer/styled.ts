import styled from 'styled-components';

export const NavContainer = styled.div`
  padding-left: 15vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-bottom: 15vh;
  }
`;
