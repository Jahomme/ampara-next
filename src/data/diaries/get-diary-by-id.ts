import { markdownToHtml } from '@/utils/markdown-to-html';
import { DIARIES_URL, DIARY_URL } from '../../config/app-config';
import { Diary } from '@/@types/diaries/diaries';

const headers = new Headers({ Accept: 'application/json' });

export interface UniqueDiaryType {
  data: Diary;
}

export const GetDiaryById = async (query = '') => {
  try {
    const res = await fetch(`${DIARY_URL}${query}`, {
      headers: headers,
    });

    const contents: UniqueDiaryType = await res.json();

    return contents;
  } catch (error) {
    console.error(error);
  }
};
