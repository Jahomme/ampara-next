'use client';

import Link from 'next/link';
import { EyeIcon } from '../../svg/EyeIcon';
import { LoupeIcon } from '../../svg/LoupeIcon';
import * as C from './styled';
import { ArrowIcon } from '../../svg/ArrowIcon';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Tiptap } from '../../Tiptap';
import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { createDiaryService } from '@/data/diaries/create-diary';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createDiaryAction } from '@/data/actions/diary-actions';
import { UniqueDiaryType } from '@/data/diaries/get-diary-by-id';
import { RelievedIcon } from '../../svg/emotions/relieved';
import { ConvertPxToMm } from '@/utils/convert-px-to-mm';
import { AfraidIcon } from '@/components/svg/emotions/afraid';
import { AnxiousIcon } from '../../svg/emotions/anxious';
import { HappyIcon } from '../../svg/emotions/happy';
import { HopefulIcon } from '../../svg/emotions/hopeful';
import { GuiltyIcon } from '../../svg/emotions/guilty';
import { ConfusedIcon } from '../../svg/emotions/confused';
import { DepressedIcon } from '../../svg/emotions/depressed';

export const DiaryContainer = ({
  diary,
}: {
  diary: UniqueDiaryType | null;
}) => {
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const [emotions, setEmotions] = useState<String[]>([]);
  const router = useRouter();

  const emotionsMap = diary?.data.attributes.emotions.split('_');

  const iconConfig = { size: 32, color: '#d85037' };

  const formatedEmotionsMap = [
    {
      id: 1,
      value: 'ansioso',
      icon: <AnxiousIcon size={iconConfig.size} color={iconConfig.color} />,
      style: {},
    },
    {
      id: 2,
      value: 'medo',
      icon: <AfraidIcon size={iconConfig.size} color={iconConfig.color} />,
      style: { transform: 'translateY(15%)' },
    },
    {
      id: 3,
      value: 'feliz',
      icon: <HappyIcon size={iconConfig.size} color={iconConfig.color} />,
      style: { transform: 'translateY(10%)' },
    },
    {
      id: 4,
      value: 'esperançoso',
      icon: <HopefulIcon size={iconConfig.size} color={iconConfig.color} />,
      style: {},
    },
    {
      id: 5,
      value: 'aliviado',
      icon: <RelievedIcon size={iconConfig.size} color={iconConfig.color} />,
      style: {},
    },
    {
      id: 6,
      value: 'culpado',
      icon: <GuiltyIcon size={iconConfig.size} color={iconConfig.color} />,
      style: { transform: 'translateY(4%)' },
    },
    {
      id: 7,
      value: 'confuso',
      icon: <ConfusedIcon size={iconConfig.size} color={iconConfig.color} />,
      style: { transform: 'translateY(10.5%)' },
    },
    {
      id: 8,
      value: 'depressivo',
      icon: <DepressedIcon size={iconConfig.size} color={iconConfig.color} />,
      style: {},
    },
  ];

  return (
    <C.MainContainer>
      <C.Header>
        <Link href="/user_panel/diaries">
          <button>
            <ArrowIcon /> Diários
          </button>
        </Link>
      </C.Header>
      <C.TableContainer>
        <C.HeaderInfo>
          <h1>{diary?.data.attributes.title}</h1>
        </C.HeaderInfo>
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
          <div
            dangerouslySetInnerHTML={{
              __html: diary?.data.attributes.content || '',
            }}
          />
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
          <C.EmotionsWraper>
            {formatedEmotionsMap?.map((item) => {
              return (
                emotionsMap?.includes(item.value) && (
                  <C.EmotionIcon
                    $active={emotionsMap?.includes(item.value)}
                    title={item.value}
                    style={item.style}
                  >
                    {item.icon}
                  </C.EmotionIcon>
                )
              );
            })}
          </C.EmotionsWraper>
        </div>
      </C.TableContainer>
    </C.MainContainer>
  );
};
