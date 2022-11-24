export const intToHex = (nr) => nr.toString(16).padStart(2, '0');

export const getRandomString = (bytes) => {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join('');
};
