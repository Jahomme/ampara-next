'use client';

import Link from 'next/link';
import { Nav } from './styled';

export type userData = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  jobRole: string;
};

export type HeaderProps = {
  ok: boolean;
  data: userData | any;
  error: any | null;
};

export default function UserPanelContainer() {
  return (
    <Nav>
      <ul>
        <li>
          {' '}
          <Link href="/user_panel">Listagem de Vendas</Link>
        </li>
        <li>
          {' '}
          <Link href="/user_panel/profile">Meu Perfil</Link>
        </li>
        <li>
          {' '}
          <Link href="/user_panel/diaries">Meu Diário</Link>
        </li>
      </ul>
    </Nav>
  );
}
