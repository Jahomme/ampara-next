import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      filter: brightness(85%);
    }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    text-align: start;
    margin: 20px 0;
  }

  ul li {
    text-align: start;
    color: ${({ theme }) => theme.colors.white};
    margin: 10px 0;
  }

  @media (max-width: 1050px) {
    display: block;

    img {
      margin: 0;
    }
  }

  .image {
    margin: 2rem;
    /* border-radius: 100%; */
    overflow: hidden;

    svg {
      /* border-radius: 100%; */
    }
  }

  @media (max-width: 500px) {
    .image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 5%;
`;

export const StyledImage = styled(Image)`
  width: 30%;
  height: 30%;
  object-fit: cover;
  margin: 50px 0;

  @media (max-width: 1050px) {
    margin: 0;
  }
`;
