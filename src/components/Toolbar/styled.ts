import styled from 'styled-components';

export interface ToggleProps {
  $active: boolean;
}

export const Toggle = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    scale: 105%;
    transition: cubic-bezier() 300ms;
  }

  background-color: ${(item) => (item.$active ? '#e0e0e0' : 'white')};
  box-shadow: ${(item) =>
    item.$active ? '0 4px 6px rgba(0, 0, 0, 0.08)' : ''};
`;

export const ToggleContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-bottom: solid 1px gray;
  /* border-radius: 8px; */
  gap: 0.5rem;
`;
