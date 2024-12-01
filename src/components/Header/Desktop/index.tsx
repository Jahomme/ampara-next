'use client';

import React, { useState } from 'react';
import * as C from './styled';
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import { ProfileIcon } from '@/components/svg/ProfileIcon';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { logoutAction } from '@/data/actions/auth-actions';
import { redirect } from 'next/navigation';

const logo = require('../../../../public/assets/logo.png');

export function HeaderDesktop() {
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const token = getAuthTokenClient();

  const handleLogout = () => {
    userContext.logout();
    logoutAction();
  };

  const menuOptions = [
    { title: 'INÍCIO', ref: '#Home' },
    { title: 'SOBRE NÓS', ref: '#About' },
    { title: 'EQUIPE', ref: '#Team' },
    { title: 'CONTATO', ref: '#Contact' },
  ];
  return (
    <>
      <C.Nav>
        <a className="logo" title="Logo" href="/">
          <C.StyledImage alt="Foto" src={logo}></C.StyledImage>
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
              <FaSignOutAlt size={20} color="white" />
            </C.SignOutIcon>
          )}
        </div>
      </C.Nav>
    </>
  );
}
