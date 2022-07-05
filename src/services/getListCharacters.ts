/* eslint-disable prefer-const */
import md5 from 'crypto-js/md5';

import { api } from '../configs/api';
import { GetListCharactersParams, GetListCharactersResponse } from './listCharacters-type';

type ParamsApiDefaultProps = {
  apikey: string | undefined;
  ts: number;
  hash?: CryptoJS.lib.WordArray;
};

export async function getListCharacters(params: GetListCharactersParams) {
  try {
    const now = Date.now();
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';

    let paramsApiDefault: ParamsApiDefaultProps = {
      apikey: publicKey,
      ts: now
    };

    paramsApiDefault.hash = md5(paramsApiDefault.ts + privateKey + publicKey);

    const data = await api.get<GetListCharactersResponse>(
      `/characters?ts=${paramsApiDefault.ts}&apikey=${paramsApiDefault.apikey}&hash=${paramsApiDefault.hash}`,
      {
        params: {
          limit: 20,
          nameStartsWith: params.nameStartsWith || null,
          orderBy: params.orderBy || null,
          offset: 0
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
