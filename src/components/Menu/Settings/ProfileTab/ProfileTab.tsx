import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import Button from '../../../Buttons/Button';
import TextFieldController from '../../../Controllers/TextFieldController';
import useTranslation from '../../../../hooks/useTranslation';
import { T } from '../../../../i18n/translate';
import FormSection from '../../../FormSection';
import Loader from '../../../Loader';
import schema from './schema';
import { useUserQuery } from 'generated/graphql';
import {
  CITY_MAX_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
  POSTAL_CODE_MAX_LENGTH,
} from 'constants/validation';
import CountrySelectController from 'components/Controllers/CountrySelectController';
import Divider from 'components/Divider';

const ProfileTab = () => {
  const { t } = useTranslation();

  const { loading, data, refetch } = useUserQuery({
    fetchPolicy: 'network-only',
  });

  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      avatar: '',
    },
  });

  useEffect(() => {
    if (!data) return;
    const formData = {
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      country: data.user.country,
      state: data.user.state,
      city: data.user.city,
      phone: data.user.phone,
    };

    Object.entries(formData).forEach(([key, value]) => {
      setValue(key as any, value || '');
    });
  }, [data, data?.user]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  const onSubmit = async (profileData: any) => {
    try {
      // todo add update
      await refetch();
      enqueueSnackbar(t({ defaultMessage: 'Profile successfully updated' }), {
        variant: 'success',
      });
    } catch (error) {
      enqueueSnackbar(
        t({
          defaultMessage:
            'Error happened while saving your data, please try again',
        }),
        { variant: 'error' }
      );
    }
  };
  return (
    <div>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection title={<T defaultMessage="Basic information" />}>
          <Grid item maxWidth={{ md: 587, xs: '100%' }}>
            {/* Name */}
            <TextFieldController
              sx={{ mt: { xs: 5, sm: 6, md: 7 } }}
              name="firstName"
              label={`${t({ defaultMessage: 'First Name' })} *`}
              placeholder={t({ defaultMessage: 'First Name' })}
              control={control}
            />

            <TextFieldController
              sx={{ mt: { xs: 5, sm: 6, md: 7 } }}
              name="lastName"
              label={`${t({ defaultMessage: 'Last Name' })} *`}
              placeholder={t({ defaultMessage: 'Last Name' })}
              control={control}
            />
          </Grid>
        </FormSection>
        <Divider />

        <Divider />

        {/* Contact information */}
        <FormSection title={<T defaultMessage="Contact Information" />}>
          {/* Country */}
          <Grid item maxWidth={{ md: 587, xs: '100%' }}>
            <CountrySelectController control={control} />
          </Grid>

          <Grid item xs={12} mt={{ xs: 5, sm: 6, md: 7 }}>
            <Box maxWidth={{ md: 587, xs: '100%' }}>
              <Grid container columnSpacing={{ xs: 5, sm: 6, md: 7 }}>
                {/* ZIP */}
                <Grid item sm={3} xs={5}>
                  <TextFieldController
                    name="post"
                    label={t({ defaultMessage: 'ZIP' })}
                    placeholder={t({ defaultMessage: 'ZIP' })}
                    inputProps={{ maxLength: POSTAL_CODE_MAX_LENGTH }}
                    control={control}
                  />
                </Grid>

                {/* City */}
                <Grid item sm={9} xs={7}>
                  <TextFieldController
                    name="city"
                    label={t({ defaultMessage: 'City' })}
                    placeholder={t({ defaultMessage: 'City' })}
                    inputProps={{ maxLength: CITY_MAX_LENGTH }}
                    control={control}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            mt={{ xs: 5, sm: 6, md: 7 }}
            maxWidth={{ md: 587, xs: '100%' }}
          >
            {/* State */}
            <TextFieldController
              name="state"
              label={t({ defaultMessage: 'State' })}
              placeholder={t({ defaultMessage: 'State' })}
              control={control}
            />
          </Grid>

          {/* Phone */}
          <Grid
            item
            mt={{ xs: 5, sm: 6, md: 7 }}
            maxWidth={{ md: 587, xs: '100%' }}
          >
            <TextFieldController
              name="phone"
              placeholder={t({ defaultMessage: 'Phone number' })}
              label={`${t({ defaultMessage: 'Phone number' })}`}
              inputProps={{ maxLength: PHONE_NUMBER_MAX_LENGTH }}
              control={control}
            />
          </Grid>
        </FormSection>

        <FormSection>
          {/* Save */}
          <Grid
            item
            maxWidth={{ md: 587, xs: '100%' }}
            mt={{ xs: 0, md: 7 }}
            mb={7}
            spacing={0}
          >
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={formState.isSubmitting}
            >
              <T defaultMessage="Save" />
            </Button>
          </Grid>
        </FormSection>
      </form>
    </div>
  );
};

export default ProfileTab;
