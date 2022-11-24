import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { menuItems } from './helpers';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => (
  <div className={styles.root}>
    {menuItems.map(({ label, to, onClick }, index) => (
      <Link to={to} key={index}>
        <Button
          variant={'text'}
          color={'primary'}
          className={styles.button}
          onClick={onClick}
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);
export default NavigationMenu;
