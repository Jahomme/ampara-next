import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
  }

  button {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryDark};
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    padding: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;
  justify-content: end;

  input {
    border-radius: 8px;
  }

  button {
    background-color: black;
    transform: translateX(-16px);
  }
`;

export const TableHead = styled.thead`
  background-color: #f2f2f7;

  h3 {
    padding: 1rem 0;
    font-size: 14px;
    color: #8e8e93;
  }
`;

export const TableBody = styled.tbody`
  button {
    background-color: transparent;

    &:hover {
      scale: 110%;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: gray solid 0.5px;
  color: black;
`;

export const Table = styled.table``;
