import { TOKEN_KEY } from '../constants/app';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);
