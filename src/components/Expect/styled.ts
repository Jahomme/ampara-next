import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 500px;
  }

  a {
    color: #fff;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 80%;
  margin: 10px;

  h1 {
    margin: 50px 0px;
    color: #fff;
  }
`;

export const BoxSection = styled.div`
  text-align: center;
  display: grid;
  grid: repeat(1, 250px) / auto-flow;

  @media ${breakpoints.size4} {
    grid: repeat(4, 180px) / auto-flow;
  }
`;

export const Box = styled.div`
  text-align: center;
  margin: 0 10px;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1rem;
    color: #fff;

    @media (max-width: 750px) {
      font-size: 0.8rem;
    }
  }
`;
