import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import Image from 'next/image';
import banner from '../../../public/assets/BANNER_UNIFIK.png';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 2rem 2rem 2rem;
  display: flex;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  background-image: url(${banner.src});
  overflow: hidden;
  height: 500px;
  width: 100%;
  /* padding: 10px 1rem; */
  margin-top: 100px;

  @media ${breakpoints.size2} {
    flex-direction: column;
  }

  img {
    width: 40%;
    height: 40%;
    margin: 75px 30px;

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
  margin: 75px 30px;

  @media ${breakpoints.size2} {
    width: 70%;
    height: 70%;
    margin: 10px 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: black;
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
    text-align: center;
    letter-spacing: 5px;
    margin: 25px 0px;
    color: black;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
