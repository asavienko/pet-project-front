import { ReactElement } from 'react';
import { T } from 'i18n/translate';

export const menuItems: {
  label: ReactElement<any, any>;
  to: string;
  onClick?: () => void;
}[] = [{ label: <T defaultMessage="Features" />, to: '/' }];
