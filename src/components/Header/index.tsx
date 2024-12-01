'use client';

import React, { useEffect, useState } from 'react';
import { HeaderDesktop } from './Desktop/index';
import { HeaderMobile } from './Mobile/index';
import { FaBars, FaTimes, FaWhatsapp, FaUser } from 'react-icons/fa';
import { useWindowDimensions } from '@/utils/windows_size';
import * as C from './styled';

const logo = require('../../../public/assets/logo.png');

export default function Header() {
  const { width } = useWindowDimensions();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {width > 767 ? <HeaderDesktop /> : <HeaderMobile />}
      <C.FixedButton>
        <a href="https://wa.me/message/GLX5E6IA7AAYB1">
          {' '}
          <FaWhatsapp size={50} />
        </a>
      </C.FixedButton>
    </>
  );
}
