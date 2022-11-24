import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button/index';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type TProps<T> = ButtonProps & {
  id: string;
  items: {
    value: T;
    label: string;
  }[];
  as: any;
  anchorOrigin?: MenuProps['anchorOrigin'];
  transformOrigin?: MenuProps['transformOrigin'];
  onMenuItemClick: (item: T) => void;
  children: React.ReactNode;
};

const DropdownMenu = <T,>(props: TProps<T>) => {
  const {
    id,
    items,
    onMenuItemClick,
    children,
    as = Button,
    anchorOrigin,
    transformOrigin,
    ...rest
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: T) => {
    onMenuItemClick?.(item);
    setAnchorEl(null);
  };

  const Component = as;

  return (
    <>
      <Component
        size="medium"
        aria-controls={id}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Component>

      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={handleClose}
      >
        {items.map((item, idx) => (
          <MenuItem key={idx} onClick={() => handleMenuItemClick(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
