import { Characters } from '@Types/character-type';
import { HeroComics } from '@Types/comics-type';

export type GetCharactersResponse = {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: Characters[];
    total: number;
  };
};

export type GetHeroDetailResponse = {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: [Characters];
    total: number;
  };
};

export type GetHeroDetailComicsResponse = {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: HeroComics[];
    total: number;
  };
};

export type GetListCharactersParams = {
  nameStartsWith?: string | null;
  limit?: string;
  orderBy?: string;
};
