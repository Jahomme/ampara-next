'use client';

import Link from 'next/link';
import * as C from './styled';
import { usePathname } from 'next/navigation';
import { ProfileIcon } from '../../svg/ProfileIcon';
import { FaStickyNote } from 'react-icons/fa';

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
    {
      href: '/user_panel',
      label: 'Meu Perfil',
      icon: <ProfileIcon color="white" size={24} />,
    },
    {
      href: '/user_panel/diaries',
      label: 'Meu Diário',
      icon: <FaStickyNote size={24} />,
    },
  ];
  return (
    <C.Nav>
      <C.Ul>
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <C.Li key={link.href} $active={isActive}>
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </C.Li>
          );
        })}
      </C.Ul>
    </C.Nav>
  );
}
