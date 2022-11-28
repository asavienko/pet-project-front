// @ts-ignore

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Skeleton } from '@mui/material';
import Paper from '@mui/material/Paper';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import useTranslation from '../../../hooks/useTranslation';
import { Markdown } from '../../Markdown';
import MarkdownController from '../../Controllers/MarkdownController';

import { T } from '../../../i18n/translate';

// @ts-ignore
import {
  usePostsQueryQuery,
  usePublishPostsMutation,
  useRemovePostMutation,
} from '../../../generated/graphql';
import Button from '../../Buttons/Button';
import Loader from '../../Loader';
import Divider from '../../Divider';
import { DEFAULT_POSTS_LIMIT } from '../../../constants/app';
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

  const [useMutation, { loading }] = usePublishPostsMutation();
  const {
    data: { posts } = {},
    loading: loadingPosts,
    fetchMore,
  } = usePostsQueryQuery({
    fetchPolicy: 'cache-first',
    variables: { offset: 0, limit: DEFAULT_POSTS_LIMIT },
  });

  const handleFormSubmit = async (result: TFormValues) => {
    await useMutation({
      variables: { input: result.post },
      onCompleted: (response) => {
        reset();
        fetchMore({
          variables: { limit: 0, offset: 0 },
          updateQuery: (prev) => ({
            ...prev,
            posts: [response.publishPosts, ...(prev.posts || [])],
          }),
        });
      },
      // TODO Add Error handling for gql query
      onError: () => console.error('Tri again'),
    });
  };

  const [removePostMutation] = useRemovePostMutation();

  const onDelete = (id: number) => {
    removePostMutation({ variables: { input: { id: `${id}` } } });
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

        <InfiniteScroll
          pageStart={0}
          loadMore={(page: number) =>
            fetchMore({
              variables: {
                offset: (page || 1) * DEFAULT_POSTS_LIMIT,
                limit: DEFAULT_POSTS_LIMIT,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                  ...prev,
                  posts: [
                    ...(prev.posts || []),
                    ...(fetchMoreResult.posts || []),
                  ],
                };
              },
            })
          }
          hasMore={!loadingPosts}
          loader={
            <>
              {loadingPosts &&
                Array(DEFAULT_POSTS_LIMIT)
                  .fill('')
                  .map((_, index) => <Skeleton key={index} />)}
            </>
          }
        >
          {posts?.map(({ post, id }, index) => (
            <Box>
              {/*   <Button onClick={() => onDelete(+id)}>
                <T defaultMessage={'Remove'} />
              </Button> */}
              <Paper
                key={index}
                variant="outlined"
                sx={{
                  mt: 4,
                  padding: 2,
                }}
              >
                <Markdown>{post}</Markdown>
              </Paper>
            </Box>
          ))}
        </InfiniteScroll>
      </Box>
    </Grid>
  );
};

export default Home;
