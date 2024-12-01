'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { EyeIcon } from '../svg/EyeIcon';
import { LoupeIcon } from '../svg/LoupeIcon';
import * as C from './styled';
import { FaPlus } from 'react-icons/fa';
import { Diary, DiaryType } from '@/@types/diaries/diaries';

export const DiariesContainer = ({ diaries }: { diaries?: Diary[] }) => {
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
                <h3>Nome da Personalidade</h3>
              </th>
              <th>
                <h3>Data de Criação</h3>
              </th>
              <th>
                <h3>Visualizar</h3>
              </th>
            </tr>
          </C.TableHead>
          <C.TableBody>
            {diaries &&
              diaries.map((item) => {
                return (
                  <tr key={item.id}>
                    {' '}
                    {/* Adicionando key para cada item */}
                    <td>{item.attributes.title}</td> {/* Exibe o title */}
                    <td>
                      {item.attributes.createdAt
                        ? format(
                            new Date(item.attributes.createdAt),
                            'dd/MM/yyyy',
                          )
                        : 'Data não disponível'}
                    </td>{' '}
                    {/* Exibe o createdAt */}
                    <td>
                      <button>
                        <EyeIcon color="#6f237d" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </C.TableBody>
        </C.Table>
      </C.TableContainer>
    </C.MainContainer>
  );
};
