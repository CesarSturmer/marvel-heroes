import { Characters } from '@Types/character-type';

export type GetListCharactersResponse = {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: Characters[];
    total: number;
  };
};

export type GetListCharactersParams = {
  nameStartsWith?: string | null;
  limit?: string;
  orderBy?: string;
};
