import React from 'react';
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';

import ProfileIcon from '../Icons/ProfileIcon';

const Avatar: React.FC<AvatarProps> = (props) => (
  <MuiAvatar
    children={<ProfileIcon sx={{ width: '100%', height: '100%' }} />}
    {...props}
  />
);

export default Avatar;
