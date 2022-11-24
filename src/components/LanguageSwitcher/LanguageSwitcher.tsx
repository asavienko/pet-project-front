import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ISO6391 from 'iso-639-1';
import cx from 'classnames';

import { LOCALE } from '../../i18n';
import DropdownMenu from '../DropdownMenu';
import EarthIcon from '../Icons/EarthIcon';
import TranslateIcon from '../Icons/TranslateIcon';

import styles from './LanguageSwitcher.module.scss';
import { useInternalizationContext } from 'context';

type TProps = {
  className?: string;
  variant?: 'icon' | 'text';
  languageVersion?: 'full' | 'short';
};

const LanguageSwitcher: React.VFC<TProps> = ({
  variant = 'icon',
  languageVersion = 'full',
  className,
  ...rest
}) => {
  const { locale, changeLocale } = useInternalizationContext();

  const languages = [
    {
      value: LOCALE.ENGLISH,
      label: ISO6391.getNativeName('en'),
      shortLabel: 'EN',
    },
    {
      value: LOCALE.UK,
      label: ISO6391.getNativeName('uk'),
      shortLabel: 'UK',
    },
  ];

  const selectedLanguage = languages.find(
    (l) => l.value.toLowerCase() === locale.toLowerCase()
  );
  const isIcon = variant === 'icon';

  const dropdownItems =
    languageVersion === 'full'
      ? languages
      : languages.map((l) => ({
          value: l.value,
          label: l.label,
        }));

  const icons = isIcon
    ? {}
    : {
        startIcon: <EarthIcon color="inherit" className={styles.startIcon} />,
        endIcon: <KeyboardArrowDownIcon className={styles.endIcon} />,
      };

  const onChangeLocale = (value: LOCALE) => {
    changeLocale(value);
  };

  return (
    <DropdownMenu
      id="main-menu"
      onMenuItemClick={onChangeLocale}
      items={dropdownItems}
      as={isIcon ? IconButton : Button}
      className={cx(styles.textButton, className)}
      {...icons}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...rest}
    >
      {isIcon && <TranslateIcon />}
      {!isIcon && selectedLanguage?.shortLabel}
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
