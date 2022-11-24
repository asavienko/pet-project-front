/* eslint-disable import/order */
import cx from 'classnames';
import { useToggle } from 'react-use';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import { IconButton } from '@mui/material';
import { menuItems as publicMenuItems } from './helpers';
import { menuItems as authMenuItems } from 'constants/menuItems';
import Button from 'components/Buttons/Button';
import scrollLock from 'utils/scrollLock.utils';
import styles from './MobileMenu.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { ROUTES } from 'constants/routes';
import { T } from 'i18n/translate';
import { useUserContext } from 'context';
import { Link } from 'react-router-dom';

type TProps = {
  authMenu?: boolean;
};

const MobileMenu = ({ authMenu }: TProps) => {
  const [open, toggleOpen] = useToggle(false);
  const { logout } = useUserContext();

  const handleToggle = () => {
    const newValue = !open;
    scrollLock.toggle(newValue);
    toggleOpen(newValue);
  };

  const menuItems = authMenu ? authMenuItems : publicMenuItems;

  return (
    <div className={cx(styles.root, authMenu && styles.authMenu)}>
      <IconButton
        color="primary"
        sx={{ ml: 5 }}
        onClick={handleToggle}
        className={styles.button}
      >
        {open ? (
          <RiCloseLine fontSize="24px" />
        ) : (
          <RiMenuLine fontSize="24px" />
        )}
      </IconButton>

      <div className={cx(styles.menuContainer, open && styles.open)}>
        <div className={styles.linksContainer}>
          {menuItems.map(({ label, to, onClick }, idx) => (
            <Button
              variant="text"
              component={Link}
              to={to}
              key={idx}
              className={styles.link}
              onClick={() => {
                handleToggle();
              }}
            >
              {label}
            </Button>
          ))}

          {authMenu && (
            <Button
              variant="text"
              className={styles.link}
              onClick={() => {
                handleToggle();
                logout();
              }}
            >
              <T defaultMessage="Logout" />
            </Button>
          )}

          <LanguageSwitcher
            variant={'text'}
            className={styles.languageSwitcher}
          />
        </div>

        {!authMenu && (
          <div className={styles.buttonsContainer}>
            <Button
              component={Link}
              to={ROUTES.LOGIN}
              color="secondary"
              variant={'contained'}
              className={styles.bottomButton}
              onClick={handleToggle}
            >
              <T id="common.signIn" defaultMessage={'Sign In'} />
            </Button>
            <Button
              component={Link}
              to={ROUTES.LOGIN}
              variant={'contained'}
              className={styles.bottomButton}
              onClick={handleToggle}
            >
              <T defaultMessage={'Start free trial'} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
