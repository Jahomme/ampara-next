import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
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
  width: 75%;
  margin: 10px;

  h1 {
    margin: 25px 0px;
    color: #fff;
  }
`;

export const BoxSection = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 2fr;
  gap: 10px;

  @media ${breakpoints.size4} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Box = styled.div`
  text-align: start;
  margin: 10px;

  ul li {
    list-style: inside;
    margin: 5px 0;
  }

  ol li {
    margin: 20px 0 20px 30px;
  }

  .contentText {
    color: ${({ theme }) => theme.colors.white};
    margin: 10px 0 0;
  }

  .contentTitle {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    border: solid 2px #fff;
    border-radius: 10px;

    button {
      background-color: transparent;
      padding: 6.25px 5px 0;
    }

    h2 {
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #fff;
    margin: 10px 0 0 0;

    @media (max-width: 750px) {
      font-size: 0.8rem;
    }
  }
`;
