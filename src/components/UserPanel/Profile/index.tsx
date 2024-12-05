'use client';

import Link from 'next/link';
import * as C from './styled';
import { ArrowIcon } from '../../svg/ArrowIcon';
import React, { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { createDiaryService } from '@/data/diaries/create-diary';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const ProfileContainer = () => {
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const [emotions, setEmotions] = useState<String[]>([]);
  const router = useRouter();

  return (
    <C.MainContainer>
      <C.Header>
        <h1>Minha Conta</h1>
      </C.Header>
      <C.TableContainer>
        <C.HeaderInfo></C.HeaderInfo>
        <div className="description-container">
          <h2
            style={{
              fontSize: '28px',
              marginBottom: '1rem',
              textDecoration: 'underline',
            }}
          >
            Detalhes de como me senti:
          </h2>
        </div>
        <div className="emotions-container">
          <h2
            style={{
              fontSize: '28px',
              marginBottom: '1rem',
              textDecoration: 'underline',
            }}
          >
            Como me senti:
          </h2>
          <C.EmotionsWraper></C.EmotionsWraper>
        </div>
      </C.TableContainer>
    </C.MainContainer>
  );
};
