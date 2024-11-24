'use client';

import React, { useState } from 'react';
import { FixedButton, Nav, StyledImage } from './styled';
import { FaBars, FaTimes, FaWhatsapp, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { ProfileIcon } from '@/components/svg/ProfileIcon';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';

const logo = require('../../../../public/assets/logo.png');

export function HeaderDesktop() {
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const token = getAuthTokenClient();

  const menuOptions = [
    { title: 'INÍCIO', ref: '#Home' },
    { title: 'SOBRE NÓS', ref: '#About' },
    { title: 'EQUIPE', ref: '#Team' },
    { title: 'CONTATO', ref: '#Contact' },
  ];
  return (
    <>
      <Nav>
        <a className="logo" title="Logo" href="#Home">
          <StyledImage alt="Foto" src={logo}></StyledImage>
        </a>
        <div className="links">
          {menuOptions.map((item) => {
            return (
              <a title={item.title} href={item.ref}>
                {item.title}
              </a>
            );
          })}

          {token ? (
            <Link legacyBehavior href="/perfil">
              <button className="loginButton">
                <ProfileIcon color="white" />
                <span>{userContext.username}</span>
              </button>
            </Link>
          ) : (
            <Link legacyBehavior href="/login">
              <button className="loginButton">
                <ProfileIcon color="white" />
                <span>ACESSAR</span>
              </button>
            </Link>
          )}
        </div>
      </Nav>
    </>
  );
}
