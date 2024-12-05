import { FaBars, FaTimes, FaWhatsapp, FaUser } from 'react-icons/fa';
import * as Dialog from '@radix-ui/react-dialog';
import * as C from './styled';
import { HeaderSideMenu } from '@/components/Dialogs/HeaderSideMenu';
import logo from '../../../../public/assets/logo.png';
import { UnifikLogo } from '@/components/svg/UnifikLogo';
import { Unifik } from '@/components/svg/Unifik';

export function HeaderMobile() {
  return (
    <C.Nav>
      <a className="logo" title="Logo" href="/">
        <Unifik size={60} />
        {/* <C.StyledImage alt="Foto" src={logo}></C.StyledImage> */}
      </a>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <FaBars size={20} color="black" />
        </Dialog.Trigger>
        <HeaderSideMenu />
      </Dialog.Root>
    </C.Nav>
  );
}
