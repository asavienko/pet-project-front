export const DEFAULT_TIME_ZONE = 'Europe/London';

// @ts-ignore
export const APP_ENV = import.meta.env.MODE;
// @ts-ignore
export const IS_PROD = import.meta.env.MODE === 'production';
export const IS_DEV = !IS_PROD;
export const APP_PROD = APP_ENV === 'prod';
export const APP_STAGE = APP_ENV === 'stage';
export const INSTAGRAM_LINK = 'https://www.instagram.com/anton_savienko/';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/asavienko/';

export const GITHUB_AUTH_LOGIN_URL = 'https://github.com/login/oauth/authorize';

export const TOKEN_KEY = 'TOKEN';

export const DEFAULT_POSTS_LIMIT = 3;
