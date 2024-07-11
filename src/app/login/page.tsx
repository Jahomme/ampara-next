'use client';

import React, { useState } from 'react';
import { MainContainer, SocialIcons, StyledArrow } from './styled';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

export default function Login() {
  const [containerClassName, setContainerClassName] = useState('container');

  const handleClickRegister = () => {
    setContainerClassName('container active');
  };

  const handleClickLogin = () => {
    setContainerClassName('container');
  };

  return (
    <MainContainer>
      <div title="Página Inicial" className="return">
        <Link href="/">
          <StyledArrow size={45} />
        </Link>
        <Link href="/">
          <h2>VOLTAR</h2>
        </Link>
      </div>
      <div className={containerClassName}>
        <div className="form-container sign-up">
          <form>
            <h1>Criar Conta</h1>
            <SocialIcons>
              <a href="#" className="icon">
                <FaGooglePlusG size={20} color="black" />
              </a>
              <a href="#" className="icon">
                <FaFacebookF size={20} color="black" />
              </a>
            </SocialIcons>
            <span>ou use o seu email para cadastrar</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="CPF: 000.000.000-00" />
            <input type="text" placeholder="WhatsApp: (00) 0 0000-0000" />
            <input type="password" placeholder="Senha" />
            <button>Cadastrar</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Acessar Conta</h1>
            <SocialIcons>
              <a href="#" className="icon">
                <FaGooglePlusG size={20} />
              </a>
              <a href="#" className="icon">
                <FaFacebookF size={20} />
              </a>
            </SocialIcons>
            <span>use o seu email senha para acessar</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu Sua Senha?</a>
            <button>Acessar Plataforma</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem Vindo(a) de Volta!</h1>
              <p>Insira seus dados para usar todos os recursos do site</p>
              <button className="hidden" onClick={handleClickLogin} id="login">
                Acessar Plataforma
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Amigo(a)!</h1>
              <p>Cadaste-se seus dados para usar todos os recursos do site</p>
              <button
                className="hidden"
                onClick={handleClickRegister}
                id="register"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
