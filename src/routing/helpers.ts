import { AFTER_LOGIN_ROUTE, REGISTRATION_PROFILE } from '../constants/routes';

export const detectRegistrationStep = (userProfile: any): string => {
  if (!userProfile) {
    return '/';
  }

  if (!userProfile.name) {
    return REGISTRATION_PROFILE;
  }

  return AFTER_LOGIN_ROUTE;
};
