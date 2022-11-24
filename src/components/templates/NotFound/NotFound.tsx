import Error from '../Error';
import { T } from 'i18n/translate';

const NotFound = () => (
  <Error
    icon={<img src="/assets/404-icon.svg" alt="" />}
    title={404}
    subTitle={<T defaultMessage="Uh oh. That page doesn’t exist." />}
    text={
      <T defaultMessage="Please make sure that you've typed in the URL correctly" />
    }
  />
);

export default NotFound;
