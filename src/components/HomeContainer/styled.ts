import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import Image from 'next/image';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  max-width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.size2} {
    flex-direction: column;
  }

  img {
    width: 40%;
    height: 40%;
    margin: 75px 30px 10px;

    @media ${breakpoints.size2} {
      width: 70%;
      height: 70%;
      margin: 10px 30px;
    }
  }

  a {
    color: #fff;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
  margin: 75px 30px 10px;

  @media ${breakpoints.size2} {
    width: 70%;
    height: 70%;
    margin: 10px 30px;
  }
`;

export const Title = styled.div`
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 80px 30px 10px;

  button {
    padding: 20px 40px;
    font-size: 1.2rem;
  }

  @media ${breakpoints.size4} {
    text-align: center;

    button {
      width: 90%;
      padding: 10px 20px;
      font-size: 1rem;
    }
  }

  h1 {
    margin: 25px 0px;
    color: #fff;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
