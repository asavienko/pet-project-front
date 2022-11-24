import React, { useMemo } from 'react';
import { countries } from 'countries-list';
import SearchSelectFieldController from '../SearchSelectFieldController';
import useTranslation from 'hooks/useTranslation';
import { useInternalizationContext } from 'context';

type TProps = {
  control: any;
  name?: string;
  onChange?: () => void;
};

const CountrySelectController = ({
  control,
  name = 'country',
  onChange,
}: TProps) => {
  const { isEnglish } = useInternalizationContext();
  const { t } = useTranslation();
  const countryCodes = useMemo(() => Object.keys(countries), []);

  return (
    <SearchSelectFieldController
      options={countryCodes}
      getOptionLabel={(countryCode: keyof typeof countries) => {
        const country = countries[countryCode];

        if (country) {
          return isEnglish ? country.name : country.native;
        }

        return '';
      }}
      placeholder={t({ defaultMessage: 'Country' })}
      name={name}
      label={`${t({ defaultMessage: 'Country' })} *`}
      control={control}
      autoHighlight
      onChange={onChange}
    />
  );
};

export default CountrySelectController;
