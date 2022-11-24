import React, { HTMLAttributeAnchorTarget } from 'react';
import cx from 'classnames';
import { GiOwl } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

type TProps = {
  to?: string;
  className?: string;
  noLink?: boolean;
  width?: string | number;
  target?: HTMLAttributeAnchorTarget;
};

const Logo: React.VFC<TProps> = ({
  target,
  noLink,
  className,
  width,
  to,
  ...rest
}) => (
  <Link
    to={to || '/'}
    {...rest}
    className={cx(styles.root, className)}
    style={{ width }}
  >
    <GiOwl size={40} />
  </Link>
);

export default Logo;
