import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import LoaderFallback from '../../../routing/LoaderFallback';

const GreyLayout = () => (
  <Box bgcolor={'var(--body-background)'} height={'100%'}>
    <Suspense fallback={<LoaderFallback />}>
      <Outlet />
    </Suspense>
  </Box>
);

export default GreyLayout;
