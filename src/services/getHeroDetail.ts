/* eslint-disable prefer-const */
import { Characters } from '@Types/character-type';
import md5 from 'crypto-js/md5';
import { paramsApiDefault, privateKey, publicKey } from 'utils/paramsService';

import { api } from '../configs/api';
import { GetHeroDetailResponse } from './listCharacters-type';

export type HeroDetailParams = {
  characterId: string;
};
export async function getHeroDetail(params: HeroDetailParams) {
  try {
    paramsApiDefault.hash = md5(paramsApiDefault.ts + privateKey + publicKey);

    const data = await api.get<GetHeroDetailResponse>(
      `/characters/${params.characterId}?ts=${paramsApiDefault.ts}&apikey=${paramsApiDefault.apikey}&hash=${paramsApiDefault.hash}`
    );

    const dataResponse = data.data.data.results[0];
    return {
      success: true,
      data: dataResponse
    };
  } catch (error) {
    return {
      success: false,
      data: {} as Characters
    };
  }
}
