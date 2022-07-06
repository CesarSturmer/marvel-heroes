export type ParamsApiDefaultProps = {
  apikey: string | undefined;
  ts: number;
  hash?: CryptoJS.lib.WordArray;
};

const now = Date.now();
export const publicKey = process.env.REACT_APP_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';

export const paramsApiDefault: ParamsApiDefaultProps = {
  apikey: publicKey,
  ts: now
};
