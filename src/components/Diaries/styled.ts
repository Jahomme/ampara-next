import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #6f237d;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background-color: #520e58;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  input {
    border-radius: 8px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 250px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6f237d;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transform: translateX(-16px);

    &:hover {
      background-color: #520e58;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #ccc;
  color: black;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f7;

  th {
    padding: 1rem;
    font-size: 14px;
    color: #8e8e93;
    text-align: left;
  }

  h3 {
    margin: 0;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f2f2f7;
  }

  td {
    padding: 1rem;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      scale: 1.1;
    }
  }

  /* tr td button {
    padding: 0 0 0 1.5rem;
  } */
`;

export const TableFooter = styled.tfoot`
  background-color: #f2f2f7;
  text-align: center;
  padding: 1rem;
  font-size: 14px;
  color: #8e8e93;
`;
