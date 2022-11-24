import React, { useState } from 'react';
import { Box, Button, Divider, Menu, MenuItem } from '@mui/material';
import { RiArrowDropDownLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar';
import styles from './styles.module.scss';
import { useUserContext } from 'context';
import { T } from 'i18n/translate';
import { menuItems } from 'constants/menuItems';
import { getFullName } from 'utils/profile';
import useTranslation from 'hooks/useTranslation';
import avatar from 'styles/components/avatar.module.scss';

type TProps = {
  onlyPhoto: boolean;
};

const ProfileMenu = ({ onlyPhoto }: TProps) => {
  const { user, logout } = useUserContext();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={'flex'} alignItems={'center'}>
      <Box ml={5}>
        {user?.avatar ? (
          <img
            src={user.avatar}
            className={avatar.avatar}
            alt={t({ defaultMessage: 'Avatar' })}
          />
        ) : (
          <Avatar variant={'rounded'} sx={{ width: 48, height: 48 }} />
        )}
      </Box>
      {!onlyPhoto && (
        <Button
          aria-haspopup
          aria-controls={t({ defaultMessage: 'User menu' })}
          aria-expanded={open}
          disableElevation
          variant={'outlined'}
          onClick={handleClick}
          sx={{
            '.MuiButton-endIcon, .MuiButton-endIcon *': { transition: 'none' },
          }}
          endIcon={<RiArrowDropDownLine />}
        >
          {getFullName(user)}
        </Button>
      )}
      {!onlyPhoto && (
        <Menu
          MenuListProps={{
            'aria-labelledby': t({ defaultMessage: 'User menu' }),
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          {user.isFinished &&
            menuItems.map(({ to, label, icon: Icon }, index) => (
              <NavLink key={index} to={to} className={styles.menuItem}>
                <MenuItem onClick={handleClose}>
                  <Icon />
                  {label}
                </MenuItem>
              </NavLink>
            ))}

          {user.isFinished && <Divider />}
          <MenuItem disableRipple className={styles.menuItem} onClick={logout}>
            <RiLogoutBoxRLine width={20} height={20} />
            <T defaultMessage={'Logout'} />
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
};

export default ProfileMenu;
