import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import Image from 'next/image';


export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 25px;
  align-items: center;
  justify-content: center;

  img {
    width: 45%;
    height: 550px;
    border-radius: 15px;
    object-fit: cover;
  }

  h1 {
    padding: 0 25px 50px 25px;
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

export const Item = styled.div`
  display: flex;
  margin: 10px 5px 50px;
  width: 90%;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
`;

export const Info = styled.div`
  margin: 30px 5px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .crp {
    color: ${({ theme }) => theme.colors.fontColor};
  }

  .name {
    font-size: 1.1rem;
  }

  span {
    margin: 0 0 15px 10px;
    font-size: 1rem;
    text-align: start;

    @media ${breakpoints.size5} {
      font-size: 0.9rem;
    }

    @media ${breakpoints.size4} {
      font-size: 0.85rem;
    }

    @media ${breakpoints.size3} {
      font-size: 0.8rem;
    }

    @media ${breakpoints.size2} {
      font-size: 0.75rem;
    }

    @media ${breakpoints.size1} {
      font-size: 0.7rem;
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 45%;
  height: 550px;
  border-radius: 15px;
  object-fit: cover;
`;

