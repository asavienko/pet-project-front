type TUserInfo = {
  givenName?: string | null;
  familyName?: string | null;
};

export const getFullName = (profile?: TUserInfo, fallback?: string) => {
  if (!profile) {
    return fallback;
  }

  const fullName = [profile.givenName || '', profile.familyName || '']
    .filter(Boolean)
    .join(' ');

  return fullName || fallback;
};
