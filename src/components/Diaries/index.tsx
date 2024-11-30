'use client';

import Link from 'next/link';
import { EyeIcon } from '../svg/EyeIcon';
import { LoupeIcon } from '../svg/LoupeIcon';
import * as C from './styled';
import { FaPlus } from 'react-icons/fa';

export const DiariesContainer = () => {
  const diariesContent: { [key: string]: string }[] = [
    { title: 'Fulano1', date: '21/07/2024' },
    { title: 'Fulano2', date: '21/07/2024' },
    { title: 'Fulano3', date: '21/07/2024' },
    { title: 'Fulano4', date: '21/07/2024' },
  ];

  return (
    <C.MainContainer>
      <C.Header>
        <h1>Diário de Personalidades</h1>
        <Link href="/user_panel/diaries/create_diarie">
          <button>
            <FaPlus /> Adicionar novo registro
          </button>
        </Link>
      </C.Header>
      <C.TableContainer>
        <C.InputContainer>
          <input type="text" />
          <button>
            <LoupeIcon />
          </button>
        </C.InputContainer>
        <C.Table>
          <C.TableHead>
            <tr>
              <th>
                <h3>Nome da personalidade</h3>
              </th>
              <th>
                <h3>Data de criação</h3>
              </th>
              <th>
                <h3>Visualizar</h3>
              </th>
            </tr>
          </C.TableHead>
          <C.TableBody>
            {diariesContent.map((item) => {
              return (
                <tr>
                  {Object.keys(item).map((keys) => {
                    return (
                      <>
                        <th>{item[keys]}</th>
                      </>
                    );
                  })}
                  <th>
                    <button>
                      <EyeIcon color="#6f237d" />
                    </button>
                  </th>
                </tr>
              );
            })}
          </C.TableBody>
        </C.Table>
      </C.TableContainer>
    </C.MainContainer>
  );
};
