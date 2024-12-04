import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

// Animações
const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const slideRightToLeft = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%)
    }
`;

// Overlay
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: rgba(31, 41, 55, 0.3);
`;

export const UserInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    color: white;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const SignOutIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

// Content
export const Content = styled(Dialog.Content)`
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  animation: ${slideRightToLeft} 0.3s ease-out;
  &:focus {
    outline: none;
  }

  .links {
    button {
      all: unset;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 5px;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    a {
      font-weight: 700;
      color: black;
      padding-bottom: 5px;
      border-bottom: gray 1px solid;
    }

    .loginButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.primary};
      border: 1px solid transparent;
      border-radius: 8px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #fff;
      padding: 10px 20px;
      transition: all 300ms;
      text-transform: uppercase;

      &:hover {
        filter: brightness(85%);
      }
    }
  }
`;

// Title
export const Title = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
`;

// Description
export const Description = styled(Dialog.Description)`
  margin: 10px 0 20px;
  color: var(--mauve-11);
  font-size: 15px;
  line-height: 1.5;
`;

// Button Styles
export const Button = styled.button<{ variant: 'violet' | 'green' }>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  background-color: ${({ variant }) =>
    variant === 'green' ? 'var(--green-4)' : 'white'};
  color: ${({ variant }) =>
    variant === 'green' ? 'var(--green-11)' : 'var(--violet-11)'};
  box-shadow: ${({ variant }) =>
    variant === 'violet' ? '0 2px 10px var(--black-a7)' : 'none'};

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'green' ? 'var(--green-5)' : 'var(--mauve-3)'};
  }
  &:focus {
    box-shadow: ${({ variant }) =>
      variant === 'green' ? '0 0 0 2px var(--green-7)' : '0 0 0 2px black'};
  }
`;

// IconButton
export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 102%;
`;

// Fieldset
export const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
`;

// Label
export const Label = styled.label`
  font-size: 15px;
  color: var(--violet-11);
  width: 90px;
  text-align: right;
`;

// Input
export const Input = styled.input`
  all: unset;
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet-11);
  box-shadow: 0 0 0 1px var(--violet-7);
  height: 35px;

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-8);
  }
`;
