export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url?: string;
  thumbnailUrl?: string;
}

export type IAccount = {
  platform: string;
  username: string;
  views: number;
  likes: number;
  followers: number;
};

export type IPackage = {
  title: string;
  contentType: string;
  packageType: string;
  price: number;
  services: string[];
};

export type IUserData = {
  id: string;
  isVerified: boolean;
  name: string;
  username: string;
  industries: string[];
  country: string;
  bio: string;
  languages: string[];
  contentType: string;
  accounts: IAccount[];
  packages: IPackage[];
};
