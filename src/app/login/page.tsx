'use client';

import React, { useState } from 'react';
import { MainContainer, SocialIcons, StyledArrow } from './styled';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import SignUpForm from '@/components/Forms/SignUpForm';
import SignInForm from '@/components/Forms/SignInForm';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  identifier: z.string().email({ message: 'Digite um email válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter entre 6 e 50 caracteres' })
    .max(50, { message: 'A senha deve conter entre 6 e 50 caracteres' }),
});

export type LoginFields = z.infer<typeof loginSchema>;

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
          <SignUpForm />
        </div>
        <div className="form-container sign-in">
          <SignInForm />
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
