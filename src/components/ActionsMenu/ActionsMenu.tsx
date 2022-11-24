import React, { useState } from 'react';
import cx from 'classnames';
import {
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Theme,
  IconButtonProps,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import isEmpty from 'lodash/isEmpty';
import styles from './ActionsMenu.module.scss';
import Tooltip from 'components/Tooltip';

export type TAction = {
  label: React.ReactChild;
  icon: React.ReactNode;
  mobileColor?: string;
  dropdown?: boolean;
  tooltip?: false | React.ReactNode;
} & IconButtonProps;

type TProps = {
  actions: TAction[];
  className?: string;
  dropdownButtonProps?: IconButtonProps;
  MenuIcon?: any;
};

const ActionsMenu = ({
  actions,
  className,
  dropdownButtonProps,
  MenuIcon = MoreVertIcon,
}: TProps) => {
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isEmpty(actions)) {
    return null;
  }

  const iconsActions = actions.filter((action) => !action.dropdown);
  let dropdownActions = actions.filter((action) => action.dropdown);

  const showIcons = !isSmallDevice;

  if (!showIcons) {
    dropdownActions = actions;
  }

  return (
    <div className={cx(styles.root, className)}>
      {showIcons &&
        iconsActions.map((button, idx) => {
          const { label, icon, mobileColor, tooltip, ...buttonProps } = button;

          const buttonElement = (
            <IconButton
              key={idx}
              size="large"
              {...(buttonProps as any)}
              sx={{
                ml: {
                  xs: 5,
                  sm: 6,
                },
                ...buttonProps.sx,
              }}
            >
              {icon}
            </IconButton>
          );

          if (tooltip === false) {
            return buttonElement;
          }

          return (
            <Tooltip title={label} key={idx}>
              {buttonElement}
            </Tooltip>
          );
        })}

      {dropdownActions.length > 0 && (
        <>
          <IconButton
            aria-label="more"
            aria-haspopup="true"
            color="primary"
            {...dropdownButtonProps}
            onClick={handleMenuClick}
            sx={{
              ml: {
                xs: 5,
                sm: 6,
              },
              ...dropdownButtonProps?.sx,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {dropdownActions.map(
              ({ label, icon, mobileColor, ...buttonProps }, idx) => (
                <MenuItem
                  key={idx}
                  {...(buttonProps as any)}
                  onClick={(e) => {
                    buttonProps?.onClick?.(e as any);
                    handleClose();
                  }}
                  className={cx(
                    styles.mobileLink,
                    mobileColor && styles.customColor
                  )}
                  sx={{
                    ...buttonProps.sx,
                    color: mobileColor,
                  }}
                >
                  {icon}
                  {label}
                </MenuItem>
              )
            )}
          </Menu>
        </>
      )}
    </div>
  );
};

export default ActionsMenu;
