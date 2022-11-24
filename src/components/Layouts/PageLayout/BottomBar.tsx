import React from 'react';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router';
import styles from './BottomBar.module.scss';
import { menuItems } from 'constants/menuItems';

const BottomBar = () => {
  const location = useLocation();
  const activeLinkIdx = menuItems.findIndex((item) =>
    location.pathname.startsWith(item.to)
  );

  return (
    <Paper className={styles.root} elevation={3}>
      <BottomNavigation
        showLabels
        value={activeLinkIdx}
        className={styles.bottomBar}
      >
        {menuItems.map(({ icon: Icon, to, label }, idx) => (
          <BottomNavigationAction
            component={NavLink}
            to={to}
            key={idx}
            label={label}
            icon={<Icon />}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
