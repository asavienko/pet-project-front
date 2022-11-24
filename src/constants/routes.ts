export const REGISTRATION_PROFILE = '/registration';
export const ROUTES_MAP = {
  HOME: { auth: false, path: '/' },
  LOGIN: { auth: false, path: '/login' },
  PROFILE: { auth: true, path: 'profile' },
  PROFILE_SETTINGS: { auth: true, path: '/profile/settings' },

  REGISTRATION_PROFILE: { auth: false, path: REGISTRATION_PROFILE },

  OAUTH_REDIRECT: {
    auth: false,
    path: '/v1/oauth/redirect',
  },
};

export const ROUTES = Object.entries(ROUTES_MAP).reduce((acc, [key, route]) => {
  acc[key as keyof typeof ROUTES_MAP] = route.path;
  return acc;
}, {} as Record<keyof typeof ROUTES_MAP, string>);

export const AFTER_LOGIN_ROUTE = ROUTES.HOME;
export const LOGIN_ROUTE = ROUTES.LOGIN;
export const SIGNOUT_ROUTE = LOGIN_ROUTE;
