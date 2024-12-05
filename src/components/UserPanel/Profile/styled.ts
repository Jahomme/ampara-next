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

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  .key {
    font-weight: 500;
  }
`;

export const ManageEmployees = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const AcceptedEmployees = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    all: unset;
  }

  svg {
    cursor: pointer;

    &:hover {
      scale: 105%;
    }
  }
`;

export const TableContainer = styled.div`
  width: 50%;
  display: flex;
  border-radius: 10px;
  border: gray solid 0.5px;
  color: black;
  padding: 1rem 2rem;
  justify-content: space-between;

  label {
    font-size: 20px;
  }

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
`;

export const Table = styled.table``;

export const EmotionIcon = styled.div<EmotionIconProps>`
  cursor: pointer;
`;

export const EmotionsWraper = styled.div`
  gap: 1rem;
  display: flex;

  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
