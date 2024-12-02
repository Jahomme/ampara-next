import { API_URL } from '@/config/app-config';

export interface CreateDiaryReqBodyprops {
  data: {
    title: string;
    content: string;
    slug: string;
    users_permissions_user: {
      connect: number[];
    };
  };
}

export async function createDiaryService(diaryData: CreateDiaryReqBodyprops) {
  const url = new URL('/api/diaries', API_URL);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...diaryData }),
    cache: 'no-cache',
  });

  return await response.json();
}
