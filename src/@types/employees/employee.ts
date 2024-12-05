export type EmployeeID = number;

export type EmployeeAttributesData = {
  name: string;
  crp: string;
  about: string;
  aproach: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  picture: Picture;
};

export type EmployeeData = {
  id: EmployeeID;
  attributes: EmployeeAttributesData;
};

export type PictureAttributes = {
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PictureFormat;
    small: PictureFormat;
    medium: PictureFormat;
    large: PictureFormat;
  };
  url: string;
};

export type PictureFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type Picture = {
  data: {
    id: EmployeeID;
    attributes: PictureAttributes;
  };
};
