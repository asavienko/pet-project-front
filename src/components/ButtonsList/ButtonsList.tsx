import React from 'react';
import Grid from '@mui/material/Grid';

import { TButtonProps } from '../Buttons/Button/Button';
import { StyledButton, Title } from './ButtonsList.styles';

export type TButtonListProps<T> = {
  columns: 1 | 2;
  scrollable?: boolean;
  title?: React.ReactNode;
  items?: T[];
  size?: TButtonProps<any>['size'];

  formatItem: (item: T) => any;
  onClick: (item: T) => void;
};

const ButtonsList = <T extends unknown>(props: TButtonListProps<T>) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    columns,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollable,
    title,
    items,
    size = 'large',

    formatItem = (item: T): T => item,
    onClick,
  } = props;

  if (!items || !items.length) {
    return null;
  }

  return (
    <div>
      {title && <Title>{title}</Title>}

      <Grid container spacing="10px" columnSpacing="18px">
        {items.map((item, idx) => (
          <Grid item xs={6} key={idx}>
            <StyledButton
              fullWidth
              size={size}
              variant="outlined"
              onClick={() => onClick(item)}
              sx={{ fontWeight: 'bold' }}
            >
              {formatItem(item)}
            </StyledButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ButtonsList;
