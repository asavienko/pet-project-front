import { countries } from 'countries-list';

// eslint-disable-next-line import/prefer-default-export
export const getCodeForCountry = (country: string) => {
  const countriesList = Object.entries(countries);
  const index = countriesList.findIndex(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_code, { native, name }]) => native === country || name === country
  );
  return countriesList[index][0];
};

export type TFormValues = {
  company: string;
  givenName: string;
  familyName?: string;
  country: string;
  avatar: string;
};
