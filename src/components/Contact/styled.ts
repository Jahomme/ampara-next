import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: auto;
  margin: 25px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;

    @media (max-width: 720px) {
      font-size: 1rem;
    }

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 60%;

  h1 {
    margin: 0px 0px 25px;
  }

  h2 {
    font-size: 1.8rem;
  }

  button {
    margin: 40px 0;
    padding: 20px 30px;
    font-size: 1.2rem;
    width: 40%;
  }

  @media (max-width: 965px) {
    h2 {
      font-size: 1.5rem;
    }

    button {
      font-size: 1.2rem;
      width: 60%;
    }
  }

  @media (max-width: 925px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.2rem;
    }

    button {
      font-size: 1rem;
      width: 70%;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    button {
      width: 90%;
      font-size: 0.95rem;
    }
  }
`;
