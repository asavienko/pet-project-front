import { FormattedMessage } from 'react-intl';
import { Props } from 'react-intl/lib/src/components//message';

// eslint-disable-next-line import/prefer-default-export
export const T = ({ values, ...rest }: Props<any>) => (
  <FormattedMessage
    {...rest}
    values={{
      br: () => <br />,
      ...values,
    }}
  />
);
