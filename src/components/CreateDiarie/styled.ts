import styled from 'styled-components';

export interface EmotionIconProps {
  $active: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      scale: 105%;
      transition: cubic-bezier() 300ms;
    }
  }

  button {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryDark};
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;
  justify-content: end;

  input {
    border-radius: 10px;
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
  gap: 2rem;
  flex-direction: column;
  border-radius: 10px;
  border: gray solid 0.5px;
  color: black;
  padding: 1rem 2rem;

  label {
    font-size: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title-container {
      display: flex;
      flex-direction: column;
      input {
        width: 30%;
        height: 1.5rem;
        padding: 0.5rem;
        border-radius: 3px;
        border: solid 1px gray;
      }
    }

    .description-container {
      display: flex;
      flex-direction: column;
    }

    .emotions-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        display: none;
      }
    }

    .button-container {
      display: flex;
      justify-content: end;
      button {
        width: 20%;
      }
    }
  }
`;

export const Table = styled.table``;

export const EmotionIcon = styled.div<EmotionIconProps>`
  cursor: pointer;
  color: ${(item) => (item.$active ? 'green' : 'black')};

  &:active {
    scale: 105%;
    transition: cubic-bezier() 500ms;
  }

  &:hover {
    color: green;
  }
`;

export const EmotionsWraper = styled.div`
  gap: 1rem;
  display: flex;

  align-items: center;
`;
