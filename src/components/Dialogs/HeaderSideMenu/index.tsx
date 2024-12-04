import * as Dialog from '@radix-ui/react-dialog';
import * as C from './styled';
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';
import { ProfileIcon } from '@/components/svg/ProfileIcon';
import Link from 'next/link';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { logoutAction } from '@/data/actions/auth-actions';

export function HeaderSideMenu() {
  const menuOptions = [
    { title: 'INÍCIO', ref: '/' },
    { title: 'SOBRE NÓS', ref: '#About' },
    { title: 'EQUIPE', ref: '#Team' },
    { title: 'CONTATO', ref: '#Contact' },
  ];
  const token = getAuthTokenClient();
  const userContext = useContextSelector(UserContext, (ctx) => ctx);

  const handleLogout = () => {
    userContext.logout();
    logoutAction();
  };

  return (
    <Dialog.Portal>
      <C.Overlay />
      <C.Content>
        <div className="links">
          <Dialog.Close>
            {menuOptions.map((item) => {
              return (
                <Link title={item.title} href={item.ref}>
                  {item.title}
                </Link>
              );
            })}
            {token ? (
              <Link legacyBehavior href="/user_panel">
                <C.UserInfos>
                  <ProfileIcon size={32} color="white" />
                  <div>
                    <small>Olá! {userContext.username}</small>
                    <span>Meu painel</span>
                  </div>
                </C.UserInfos>
              </Link>
            ) : (
              <Link legacyBehavior href="/login">
                <button className="loginButton">
                  <ProfileIcon color="white" />
                  <span>ACESSAR</span>
                </button>
              </Link>
            )}
            {!!token && (
              <C.SignOutIcon onClick={handleLogout}>
                <FaSignOutAlt size={20} color="black" />
              </C.SignOutIcon>
            )}
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <C.IconButton aria-label="Close">
            <FaTimes color="white" />
          </C.IconButton>
        </Dialog.Close>
      </C.Content>
    </Dialog.Portal>
  );
}
