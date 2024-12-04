'use client';

import { Diary, DiaryType } from '@/@types/diaries/diaries';
import { DiariesContainer } from '@/components/Diaries';
import { UserContext } from '@/context/UserContext';
import { GetDiariesByUser } from '@/data/diaries/get-diaries-by-user';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { useWindowDimensions } from '@/utils/windows_size';
import { useRouter } from 'next/navigation'; // Correção: usar o hook de navegação correto
import { useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

export default function Diaries() {
  const router = useRouter();
  const token = getAuthTokenClient();
  const username = useContextSelector(UserContext, (ctx) => ctx.username); // Seleciona apenas o necessário
  const [diaries, setDiaries] = useState<Diary[]>([]); // Inicializa como array vazio
  const [loading, setLoading] = useState(true); // Indica se a chamada está carregando

  useEffect(() => {
    if (!token) {
      router.push('/login'); // Redireciona se o token não estiver presente
      return;
    }

    async function fetchDiaries() {
      try {
        setLoading(true); // Inicia o carregamento

        const diaries: DiaryType | undefined = await GetDiariesByUser(
          `&filters[users_permissions_user][username][$eq]=${username}`,
        );

        if (diaries) {
          setDiaries(diaries.data || []); // Atualiza o estado com os diários
        }
      } catch (error) {
        console.error('Erro ao buscar diários:', error);
        setDiaries([]);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    if (username) {
      fetchDiaries(); // Faz a chamada somente se o username estiver disponível
    }
  }, [router, token, username]); // Dependências

  if (loading) {
    return <div>Carregando...</div>; // Feedback visual enquanto carrega
  }

  return <DiariesContainer diaries={diaries} />;
}
