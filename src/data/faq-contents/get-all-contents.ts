import { markdownToHtml } from '@/utils/markdown-to-html';
import { CONTENTS_URL } from '../../config/app-config';
import { ContentData } from '../../domain/faq-content/faq-content';

export type GetAllContentsProps = {
  data: ContentData[];
};

const headers = new Headers({ Accept: 'application/json' });

export const GetAllContents = async (query = '') => {
  const res = await fetch(`${CONTENTS_URL}${query}`, {
    headers: headers,
    next: {
      revalidate: 3600,
    },
  });

  const contents: GetAllContentsProps = await res.json();

  const formattedContents = await Promise.all(
    contents.data.map(async (content) => {
      const htmlContent = await markdownToHtml(content.attributes.content);
      return {
        ...content,
        attributes: { ...content.attributes, contentHtml: htmlContent },
      };
    }),
  );

  return formattedContents;
};
