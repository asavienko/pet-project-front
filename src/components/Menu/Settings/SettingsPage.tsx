import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

const SettingPage = () => (
  <div>
    <Box mt={6}>
      <Outlet />
    </Box>
  </div>
);

export default SettingPage;
