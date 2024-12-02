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

  const emotionsMap = ['Tristeza', 'Ansiedade', 'Raiva', 'Felicidade', 'Medo'];

  useEffect(() => {
    setValue('emotions', formatedEmotions);
  }, [formatedEmotions, setValue]);

  const onSubmit: SubmitHandler<DiaryFields> = async (data) => {
    try {
      const finalObject = {
        title: data.title,
        content: data.description,
        emotions: data.emotions,
        // slug: gerarSlugAleatorio(data.title),
        users_permissions_user: {
          connect: [userContext.user_id],
        },
      };
      console.log(finalObject);
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
                  <C.EmotionIcon $active={emotions.includes(item)}>
                    {' '}
                    <span onClick={() => handleEmotionsChange(item)}>
                      {item}
                    </span>
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
