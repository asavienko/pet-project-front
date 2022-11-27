import { captureException } from '@sentry/react';
import { getTimeZones } from '@vvo/tzdb';
import memoize from 'memoizee';
import { APP_PROD, DEFAULT_TIME_ZONE } from '../../constants/app';
import { timeZoneOptions } from '../../constants/timeZones';
import { detectTimeZone } from '..';
import { TCustomTimeZone } from 'types/timeZone';

const tz = getTimeZones();

// TODO: change name of this function
// eslint-disable-next-line import/prefer-default-export
export const getHumanizedTimeZoneList = () => {
  const t = Object.entries(timeZoneOptions)
    .map(([timeZone, label]) => {
      const data = tz.find((tzItem) => tzItem.name === timeZone);

      if (data) {
        const min = data.currentTimeOffsetInMinutes;
        // eslint-disable-next-line no-bitwise
        const hr = `${(min / 60) ^ 0}:${
          min % 60 === 0 ? '00' : Math.abs(min % 60)
        }`;
        const formattedLabel = `(GMT${
          hr.includes('-') ? hr : `+${hr}`
        }) ${label}`;

        return {
          ...data,
          label: formattedLabel,
        } as TCustomTimeZone;
      }

      return undefined;
    })
    .filter((tz): tz is TCustomTimeZone => tz !== undefined)
    .sort(
      (a: TCustomTimeZone, b: TCustomTimeZone) =>
        a.currentTimeOffsetInMinutes - b.currentTimeOffsetInMinutes
    );

  return t;
};

export const getTimeZoneOptions = () =>
  getHumanizedTimeZoneList().map((tz) => ({
    value: tz.name,
    name: tz.label,
    tz,
  }));

export const getDefaultTimeZone = memoize(
  (localStorageKey?: string, preferTimeZone?: string) => {
    const options = getTimeZoneOptions();
    const timeZones = getTimeZones();

    let userTimeZone = localStorageKey
      ? (localStorage.getItem(localStorageKey) as string)
      : '';

    if (preferTimeZone) {
      userTimeZone = preferTimeZone;
    }

    if (!userTimeZone) {
      userTimeZone = detectTimeZone();
    }

    if (!userTimeZone) {
      // TODO: handle case when time zone is not available
      return DEFAULT_TIME_ZONE;
    }

    const timeZone = timeZones.find((tz) => {
      let isSame = tz.name === userTimeZone;

      if (isSame) return true;

      if (tz.group) {
        isSame = tz.group.includes(userTimeZone);
        return isSame;
      }

      return false;
    });

    if (!timeZone) {
      // TODO: handle case when time zone is not available
      return DEFAULT_TIME_ZONE;
    }

    let timeZoneOption = options.find(
      (option) => option.tz.name === userTimeZone
    );

    if (!timeZoneOption) {
      // if user time zone is not on our list we select time zone from our with the same offset
      // TODO: handle case when optionsWithSameOffset are missing
      let optionsWithSameOffset = options.filter(
        (option) =>
          option.tz.currentTimeOffsetInMinutes ===
          timeZone?.currentTimeOffsetInMinutes
      );

      if (!optionsWithSameOffset.length) {
        // user offset is not found. Round user offset
        const offset = timeZone?.currentTimeOffsetInMinutes;
        const roundedOffset = offset - (offset % 60) + 60;
        optionsWithSameOffset = options.filter(
          (option) => option.tz.currentTimeOffsetInMinutes === roundedOffset
        );
      }

      // find time zone on the same continent

      timeZoneOption = optionsWithSameOffset.find(
        (option) => option.tz.continentCode === timeZone?.continentCode
      );

      if (!timeZoneOption) {
        // eslint-disable-next-line prefer-destructuring
        timeZoneOption = optionsWithSameOffset[0];
      }
    }

    try {
      return timeZoneOption.tz.name;
    } catch (err) {
      if (APP_PROD) {
        // eslint-disable-next-line no-console
        console.log({ userTimeZone });
        // eslint-disable-next-line no-console
        console.log({ timeZoneOption });
      }

      captureException(err);
      return DEFAULT_TIME_ZONE;
    }
  }
);
