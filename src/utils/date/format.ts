import { Locale } from 'date-fns';
import dateFnsFormat from 'date-fns/format';

export enum DateFormat {
  'yyy-MM-dd' = 'yyy-MM-dd',
}

type TOptions = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: number;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
};

// TODO: fix logic here
export const format = (
  date: Date | number,
  format: DateFormat,
  options?: TOptions
) => {
  dateFnsFormat(date, format, options);
};
