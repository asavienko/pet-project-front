import React from 'react';
import cx from 'classnames';

import styles from './Title.module.scss';

type TProps = {
  className?: string;
  as?: any;
};

const Title: React.FC<TProps> = ({ as = 'h1', className, ...rest }) => {
  const Component = as;

  return <Component {...rest} className={cx(styles.root, className)} />;
};

export default Title;
