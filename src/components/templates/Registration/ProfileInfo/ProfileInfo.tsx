import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';
import { captureException } from '@sentry/react';
import { ROUTES } from '../../../../constants/routes';
import useTranslation from '../../../../hooks/useTranslation';
import { T } from '../../../../i18n/translate';
import Button from '../../../Buttons/Button';
import TextFieldController from '../../../Controllers/TextFieldController';
import Registration from '../../../Layout/Registration';
import Loader from '../../../Loader';
import { useUserContext } from '../../../../context';
import { detectBrowserCountry } from '../../../../utils';
import schema from './validationSchema';
import { TFormValues } from './helpers';
import styles from './ProfileInfo.module.scss';
import CountrySelectController from 'components/Controllers/CountrySelectController';

const ProfileInfo = () => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const { user: { email, id } = {} } = useUserContext();

  const { handleSubmit, control, setValue } = useForm<TFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      company: '',
      givenName: '',
      familyName: '',
      country: '',
    },
  });

  useEffect(() => {
    const country = detectBrowserCountry();
    if (country) {
      setValue('country', country);
    }
  }, []);

  const navigate = useNavigate();
  const onSubmit = async ({
    company,
    givenName,
    familyName,
    country,
    avatar,
  }: TFormValues) => {
    try {
      console.log('form', company, givenName, familyName, country, avatar);
    } catch (error) {
      captureException(error);
      enqueueSnackbar(
        t({
          defaultMessage:
            'Error happened while saving your data, please try again',
        }),
        { variant: 'error' }
      );
      return;
    }

    navigate(ROUTES.HOME);
  };
  return (
    <Registration>
      <Loader loading={false} />

      <Typography variant="h1" color="primary" textAlign="center">
        <T defaultMessage="Tell more about yourself" />
      </Typography>
      <Typography variant="body3" mb={7} textAlign="center">
        <T defaultMessage="Fill in your Basic and contact information to complete your profile" />
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Grid container rowSpacing={6} columnSpacing={6} sx={{ maxWidth: 572 }}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextFieldController
              name="givenName"
              label={`${t({ defaultMessage: 'First Name' })} *`}
              placeholder={t({ defaultMessage: 'First Name' })}
              control={control}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextFieldController
              name="familyName"
              label={t({ defaultMessage: 'Last Name' })}
              placeholder={t({ defaultMessage: 'Last Name' })}
              control={control}
            />
          </Grid>

          {/* Country */}
          <Grid item xs={12}>
            <CountrySelectController control={control} />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={false}
            >
              <T defaultMessage="Finish registration" />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Registration>
  );
};

export default ProfileInfo;
