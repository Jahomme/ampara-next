import * as Dialog from '@radix-ui/react-dialog';
import * as C from './styled';
import { FaBars, FaTimes, FaWhatsapp, FaUser } from 'react-icons/fa';
import { ProfileIcon } from '@/components/svg/ProfileIcon';
import Link from 'next/link';

export function HeaderSideMenu() {
  const menuOptions = [
    { title: 'INÍCIO', ref: '#Home' },
    { title: 'SOBRE NÓS', ref: '#About' },
    { title: 'EQUIPE', ref: '#Team' },
    { title: 'CONTATO', ref: '#Contact' },
  ];
  return (
    <Dialog.Portal>
      <C.Overlay />
      <C.Content>
        <div className="links">
          <Dialog.Close>
            {menuOptions.map((item) => {
              return (
                <a title={item.title} href={item.ref}>
                  {item.title}
                </a>
              );
            })}
            <Link legacyBehavior href="/login">
              <button className="loginButton">
                {' '}
                <ProfileIcon size={20} color="white" />
                <span>ACESSAR</span>
              </button>
            </Link>
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
