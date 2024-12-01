export type UserPermissionsUser = {
  id: number;
  attributes: {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    phone: string;
    type: string;
  };
};

export type DiaryAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  users_permissions_user: {
    data: UserPermissionsUser;
  };
};

export type Diary = {
  id: number;
  attributes: DiaryAttributes;
};

export type DiaryType = {
  data: Diary[];
};
