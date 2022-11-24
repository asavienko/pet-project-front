import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { menuItems } from 'constants/menuItems';

const Sidebar = () => (
  <div className={styles.root}>
    <nav className={styles.nav}>
      {menuItems.map(({ icon: Icon, to, label, ...rest }, index) => (
        <NavLink
          {...rest}
          to={to}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
          key={index}
        >
          <Icon />
          {label}
          {index > 0 && <span className={styles.beforeRadius} />}
          <span className={styles.afterRadius} />
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Sidebar;
