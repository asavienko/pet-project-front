import isChinese from 'is-chinese';
import isAscii from 'validator/lib/isAscii';

const CYRYLIC_REGEX = /^[\u0400-\u04FF ]+/im;

// eslint-disable-next-line import/prefer-default-export
export const isNameValid = (name: any) => {
  if (typeof name !== 'string') return false;

  return (
    isAscii(name) ||
    CYRYLIC_REGEX.test(name) ||
    isChinese(name.replaceAll(' ', ''))
  );
};
