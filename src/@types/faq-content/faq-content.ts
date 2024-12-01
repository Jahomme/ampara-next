export type ContentID = number;

export type ContentData = {
  id: ContentID;
  attributes: ContentAttributes;
};

export type ContentAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
