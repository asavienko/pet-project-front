import React from 'react';
import { Alert, Box, Typography } from '@mui/material';
import { Container } from 'components/Layouts/PublicLayout';

type TProps = {
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const BaseBanner: React.FC<TProps> = (props) => {
  const { icon, children } = props;

  return (
    <Container>
      <Box mb={6}>
        <Alert color="error" variant="filled" icon={icon}>
          <Typography variant="body1">{children}</Typography>
        </Alert>
      </Box>
    </Container>
  );
};

export default BaseBanner;
