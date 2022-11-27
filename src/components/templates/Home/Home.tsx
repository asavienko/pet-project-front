// @ts-ignore

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import useTranslation from '../../../hooks/useTranslation';
import { Markdown } from '../../Markdown';
import MarkdownController from '../../Controllers/MarkdownController';

import { T } from '../../../i18n/translate';

// @ts-ignore
import { usePublishPostsMutation } from '../../../generated/graphql';
import Button from '../../Buttons/Button';
import Loader from '../../Loader';
import Divider from '../../Divider';
import schema from './Post.schema';

type TFormValues = { post: string };

const Home = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TFormValues>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      post: '',
    },
  });

  const [useMutation, { data, loading, error }] = usePublishPostsMutation();

  const handleFormSubmit = async (result: TFormValues) => {
    await useMutation({
      variables: { input: result.post },
      onCompleted: () => {
        reset();
      },
      // TODO Add Error handling for gql query
      onError: () => console.error('Tri again'),
    });
  };

  return (
    <Grid item xs={12} md={10} lg={8} mt={6}>
      <Loader loading={loading} />

      <Box
        display="flex"
        justifyContent={'center'}
        flexDirection={'column'}
        padding={5}
      >
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <MarkdownController
            tooltip={t({
              defaultMessage: 'Write some post to test functionality',
            })}
            control={control}
            name="post"
            label={<T defaultMessage={'Write down your post'} />}
            insideDialog={true}
          />
          <Button
            variant={'contained'}
            type={'submit'}
            disabled={!isValid}
            size="large"
            loading={loading}
          >
            <T defaultMessage={'Post'} />
          </Button>
        </form>

        <Divider />
        <Paper
          variant="outlined"
          sx={{
            padding: 2,
          }}
        >
          <Markdown navigation>"ASDASDAS"</Markdown>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Home;
