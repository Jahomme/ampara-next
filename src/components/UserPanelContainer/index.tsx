'use client';

import Link from 'next/link';
import * as C from './styled';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  const links = [
    // { href: '/user_panel', label: 'Listagem de Vendas' },
    { href: '/user_panel/profile', label: 'Meu Perfil' },
    { href: '/user_panel/diaries', label: 'Meu Diário' },
  ];
  return (
    <C.Nav>
      <C.Ul>
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <C.Li key={link.href} $active={isActive}>
              <Link href={link.href}>{link.label}</Link>
            </C.Li>
          );
        })}
      </C.Ul>
    </C.Nav>
  );
}
