import HomeRounded from '@mui/icons-material/HomeRounded';
import SettingsIcon from '../components/Icons/SettingsIcon';
import { ROUTES } from './routes';
import { T } from 'i18n/translate';

export const menuItems = [
  {
    icon: HomeRounded,
    to: ROUTES.HOME,
    label: <T defaultMessage="Home" />,
    'data-intro-id': 'menu-home',
  },

  {
    icon: SettingsIcon,
    to: ROUTES.PROFILE_SETTINGS,
    label: <T defaultMessage="Settings" />,
    onClick: () => {},
    'data-intro-id': 'menu-profile',
  },
];
