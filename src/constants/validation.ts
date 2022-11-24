import { ONE_MB } from '.';

// eslint-disable-next-line import/prefer-default-export
export const ALIAS_MAX_LENGTH = 12;

export const NAME_MAX_LENGTH = 128;
export const POSTAL_CODE_MAX_LENGTH = 15;
export const ADDRESS_MAX_LENGTH = 128;
export const STATE_MAX_LENGTH = 128;
export const CITY_MAX_LENGTH = 128;
export const COMPANY_MAX_LENGTH = 128;
export const PHONE_NUMBER_MAX_LENGTH = 16;
export const PHONE_NUMBER_MIN_LENGTH = 6;
export const BOOKING_NOTE_MAX_LENGTH = 1000;
export const BOOKING_MAX_GUESTS_COUNT = 25;
export const MAX_AVATAR_FILE_SIZE = 10 * ONE_MB;

export const SCHEDULE_ALLOWED_MIME_TYPES = [
  'image/*',
  'application/pdf',
  'application/msword',
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/gzip',
  'application/vnd.oasis.opendocument.presentation',
  'application/vnd.oasis.opendocument.spreadsheet',
  'application/vnd.oasis.opendocument.text',
  'application/vnd.rar',
  'application/rtf',
  'text/plain',
  'application/zip',
  'application/x-7z-compressed',
  'application/vnd.apple.keynote',
  'application/vnd.apple.pages',
  'application/vnd.apple.numbers',
];

export const SCHEDULE_ALLOWED_FILE_EXTENSIONS = [
  '.pdf',
  '.xls',
  '.xlsx',
  '.odt',
  '.odp',
  '.ods',
  '.xlsm',
  '.pps',
  '.key',
  '.ppt',
  '.pptx',
  '.txt',
  '.doc',
  '.docx',
  '.rtf',
  '.7z',
  '.zip',
  '.rar',
  '.bmp',
  '.jpeg',
  '.jpg',
  '.png',
  '.heic',
];

export const BOOKING_MAX_FILE_SIZE = 50 * ONE_MB;
export const COMPANY_LOGO_MAX_FILE_SIZE = 10 * ONE_MB;

export const BOOKING_ALLOWED_MIME_TYPES = SCHEDULE_ALLOWED_MIME_TYPES;
export const BOOKING_ALLOWED_FILE_EXTENSIONS = SCHEDULE_ALLOWED_FILE_EXTENSIONS;
export const COMPANY_LOGO_FILE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
export const SCHEDULE_MAX_FILE_SIZE = 50 * ONE_MB;
