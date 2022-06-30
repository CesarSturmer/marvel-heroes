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
