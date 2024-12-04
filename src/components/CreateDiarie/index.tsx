'use client';

import Link from 'next/link';
import { EyeIcon } from '../svg/EyeIcon';
import { LoupeIcon } from '../svg/LoupeIcon';
import * as C from './styled';
import { ArrowIcon } from '../svg/ArrowIcon';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Tiptap } from '../Tiptap';
import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { createDiaryService } from '@/data/diaries/create-diary';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createDiaryAction } from '@/data/actions/diary-actions';
import { RelievedIcon } from '../svg/emotions/relieved';
import { ConvertPxToMm } from '@/utils/convert-px-to-mm';
import { AfraidIcon } from '@/components/svg/emotions/afraid';
import { AnxiousIcon } from '../svg/emotions/anxious';
import { HappyIcon } from '../svg/emotions/happy';
import { HopefulIcon } from '../svg/emotions/hopeful';
import { GuiltyIcon } from '../svg/emotions/guilty';
import { ConfusedIcon } from '../svg/emotions/confused';
import { DepressedIcon } from '../svg/emotions/depressed';

const createDiarySchema = z.object({
  title: z
    .string()
    .max(50, { message: 'O título deve conter até 50 caracteres' }),
  description: z.string(),
  emotions: z.string(),
});

export type DiaryFields = z.infer<typeof createDiarySchema>;

export const CreateDiarieContainer = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DiaryFields>({
    resolver: zodResolver(createDiarySchema),
    defaultValues: {
      description: '',
    },
  });
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const [emotions, setEmotions] = useState<String[]>([]);
  const router = useRouter();

  const description = watch('description');

  function gerarSlugAleatorio(title: string) {
    const slugBase = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');

    const aleatorio = Math.random().toString(36).substring(2, 8);

    return `${slugBase}-${aleatorio}`;
  }

  const handleDescriptionChange = (richText: string) => {
    setValue('description', richText); // Atualiza o valor do formulário
  };

  const formatedEmotions = emotions.join('_');

  const handleEmotionsChange = (emotion: string) => {
    if (emotions.includes(emotion)) {
      setEmotions((prevstate) => prevstate.filter((item) => item !== emotion));
      return;
    }

    setEmotions((prevstate) => [...prevstate, emotion]);
  };

  const iconConfig = { size: 32, color: '#d85037' };

  const emotionsMap = [
    {
      id: 1,
      value: 'ansioso',
      icon: (
        <AnxiousIcon
          size={iconConfig.size}
          color={`${emotions.includes('ansioso') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 2,
      value: 'medo',
      icon: (
        <AfraidIcon
          size={iconConfig.size}
          color={`${emotions.includes('medo') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 3,
      value: 'feliz',
      icon: (
        <HappyIcon
          size={iconConfig.size}
          color={`${emotions.includes('feliz') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 4,
      value: 'esperançoso',
      icon: (
        <HopefulIcon
          size={iconConfig.size}
          color={`${emotions.includes('esperançoso') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 5,
      value: 'aliviado',
      icon: (
        <RelievedIcon
          size={iconConfig.size}
          color={`${emotions.includes('aliviado') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 6,
      value: 'culpado',
      icon: (
        <GuiltyIcon
          size={iconConfig.size}
          color={`${emotions.includes('culpado') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 7,
      value: 'confuso',
      icon: (
        <ConfusedIcon
          size={iconConfig.size}
          color={`${emotions.includes('confuso') ? iconConfig.color : 'black'}`}
        />
      ),
    },
    {
      id: 8,
      value: 'depressivo',
      icon: (
        <DepressedIcon
          size={iconConfig.size}
          color={`${emotions.includes('depressivo') ? iconConfig.color : 'black'}`}
        />
      ),
    },
  ];
  //   const emotionsMap = ['tristeza', 'ansiedade', 'raiva', 'felicidade', 'medo'];

  useEffect(() => {
    setValue('emotions', formatedEmotions);
  }, [formatedEmotions, setValue]);

  const onSubmit: SubmitHandler<DiaryFields> = async (data) => {
    try {
      const userId = userContext.user_id ? [userContext.user_id] : [];
      const finalObject = {
        title: data.title,
        content: data.description,
        emotions: data.emotions,
        slug: gerarSlugAleatorio(data.title),
        users_permissions_user: {
          connect: userId,
        },
      };
      const response = await createDiaryAction({ data: { ...finalObject } });

      if (response.strapiErrors) {
        toast.error('Erro ao criar novo diário');
        return;
      }
      toast.success('Diário registrado com sucesso');
      router.push(response.redirectTo);
    } catch (error) {
      console.error(error);
    }
  };

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
          <h1>Novo registro</h1>
        </C.HeaderInfo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="title-container">
            <label htmlFor="title">Seu nome:</label>
            <input type="text" {...register('title')} />
          </div>
          <div className="description-container">
            <label htmlFor="description">Descreva o que está sentindo:</label>
            <Tiptap
              description={description}
              onChangeValue={handleDescriptionChange}
            />
          </div>
          <div className="emotions-container">
            <label htmlFor="emotions">Como estou me sentindo hoje ?</label>
            <C.EmotionsWraper>
              {emotionsMap.map((item) => {
                return (
                  <C.EmotionIcon
                    key={item.id}
                    $active={emotions.includes(item.value)}
                    onClick={() => handleEmotionsChange(item.value)}
                    title={item.value}
                  >
                    {item.icon}
                  </C.EmotionIcon>
                );
              })}
            </C.EmotionsWraper>
            <input
              type="text"
              {...register('emotions')}
              value={formatedEmotions}
            />
          </div>
          <div className="button-container">
            <button type="submit">Criar novo diário</button>
          </div>
        </form>
      </C.TableContainer>
    </C.MainContainer>
  );
};
