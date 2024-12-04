import { GetDiaryById } from '@/data/diaries/get-diary-by-id';
import { DiaryContainer } from '@/components/Diary/index';
import { markdownToHtml } from '@/utils/markdown-to-html';

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const diary_id = (await params).id;

  const apiResponse = await GetDiaryById(`/${diary_id}`);

  const diary = apiResponse
    ? {
        ...apiResponse,
      }
    : null;
  return <DiaryContainer diary={diary} />;
}
