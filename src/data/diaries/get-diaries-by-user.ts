import { markdownToHtml } from '@/utils/markdown-to-html';
import { DIARIES_URL } from '../../config/app-config';
import { DiaryType } from '@/@types/diaries/diaries';

const headers = new Headers({ Accept: 'application/json' });

export const GetDiariesByUser = async (query = '') => {
  try {
    const res = await fetch(`${DIARIES_URL}${query}`, {
      headers: headers,
    });

    const contents: DiaryType = await res.json();

    return contents;
  } catch (error) {
    console.error(error);
  }
};
