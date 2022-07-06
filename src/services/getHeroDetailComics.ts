/* eslint-disable prefer-const */
import md5 from 'crypto-js/md5';
import { paramsApiDefault, privateKey, publicKey } from 'utils/paramsService';

import { api } from '../configs/api';

export type HeroDetailParams = {
  characterId: number;
};
export async function getHeroDetailComics(params: HeroDetailParams) {
  try {
    paramsApiDefault.hash = md5(paramsApiDefault.ts + privateKey + publicKey);

    const data = await api.get(
      `/characters/${params.characterId}/comics?ts=${paramsApiDefault.ts}&apikey=${paramsApiDefault.apikey}&hash=${paramsApiDefault.hash}`,
      {
        params: {
          orderBy: 'onsaleDate',
          limit: 10
        }
      }
    );

    const dataResponse = data.data.data.results;
    return {
      success: true,
      data: dataResponse
    };
  } catch (error) {
    return {
      success: false,
      data: []
    };
  }
}
