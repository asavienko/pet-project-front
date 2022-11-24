export const OATH_EVENT = 'OATH_EVENT';
export const DEFAULT_TIME_ZONE = 'Europe/London';

// @ts-ignore
export const APP_ENV = import.meta.env.MODE;
// @ts-ignore
export const IS_PROD = import.meta.env.MODE === 'production';
export const IS_DEV = !IS_PROD;
export const APP_PROD = APP_ENV === 'prod';
export const APP_STAGE = APP_ENV === 'stage';
export const INSTAGRAM_LINK = '';
export const LINKEDIN_LINK = '';
