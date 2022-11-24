import { TimeZone } from '@vvo/tzdb';

// export type TCustomTimeZoneMap = {
//   [key: string]: string;
// };

export interface TTimeZoneOption {
  value: string;
  label: string;
  abbrev?: string;
  altName?: string;
  offset?: number;
}

export type TCustomTimeZone = TimeZone & {
  label: string;
};
