import { useEffect, useState } from 'react';
import { Diary, DiaryType } from '@/@types/diaries/diaries';
import { GetDiariesByUser } from '@/data/diaries/get-diaries-by-user';

export function useDiaries(username: string) {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDiaries() {
      try {
        const response: DiaryType | undefined = await GetDiariesByUser(
          `&filters[users_permissions_user][username][$eq]=${username}`,
        );

          if (response) {
            setDiaries(response.data);
          }
      } catch (error) {
        console.error('Failed to fetch diaries:', error);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchDiaries();
    }
  }, [username]);

  return { diaries, loading };
}
