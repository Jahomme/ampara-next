'use client';

import Link from 'next/link';
import { EyeIcon } from '../svg/EyeIcon';
import { LoupeIcon } from '../svg/LoupeIcon';
import * as C from './styled';
import { FaPlus } from 'react-icons/fa';

export const CreateDiarieContainer = () => {
  const diariesContent: { [key: string]: string }[] = [
    { title: 'Fulano1', date: '21/07/2024' },
    { title: 'Fulano2', date: '21/07/2024' },
    { title: 'Fulano3', date: '21/07/2024' },
    { title: 'Fulano4', date: '21/07/2024' },
  ];

  return (
    <C.MainContainer>
      <C.Header>
        <Link href="/user_panel/diaries/create_diarie">
          <button>
            <FaPlus /> Diários
          </button>
        </Link>
      </C.Header>
      <C.TableContainer>
        <C.HeaderInfo>
          <h1>Novo registro</h1>
          <C.InputContainer>
            <input type="text" />
            <button>
              <LoupeIcon />
            </button>
          </C.InputContainer>
        </C.HeaderInfo>
      </C.TableContainer>
    </C.MainContainer>
  );
};
