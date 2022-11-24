import format from 'date-fns/format';

import { useInternalizationContext } from 'context';

const useDate = () => {
  useInternalizationContext();

  const localizedFormat: typeof format = (date, dateFormat, options = {}) =>
    format(date, dateFormat, {
      ...options,
      locale: window.constants.dateFnsLocale,
    });

  return {
    dateFnsLocale: window.constants.dateFnsLocale,
    format: localizedFormat,
  };
};

export default useDate;
