/* eslint-disable prefer-const */
import md5 from 'crypto-js/md5';
import { paramsApiDefault, privateKey, publicKey } from 'utils/paramsService';

import { api } from '../configs/api';
import { GetListCharactersParams, GetCharactersResponse } from './listCharacters-type';

export async function getListCharacters(params: GetListCharactersParams) {
  try {
    paramsApiDefault.hash = md5(paramsApiDefault.ts + privateKey + publicKey);

    const data = await api.get<GetCharactersResponse>(
      `/characters?ts=${paramsApiDefault.ts}&apikey=${paramsApiDefault.apikey}&hash=${paramsApiDefault.hash}`,
      {
        params: {
          limit: params.limit || 20,
          nameStartsWith: params.nameStartsWith || null,
          orderBy: params.orderBy || null,
          offset: params.offset || 0
        }
      }
    );
    const dataResponse = data.data;
    return {
      success: true,
      data: dataResponse
    };
  } catch (error) {
    return {
      success: false,
      data: {} as GetCharactersResponse
    };
  }
}
