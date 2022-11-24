// eslint-disable-next-line import/prefer-default-export
export const getColorFromString = (string: string) => {
  const firsLetterCode = string.toLowerCase().charCodeAt(0);

  if (firsLetterCode % 4 === 0) {
    return '#F07979';
  }
  if (firsLetterCode % 3 === 0) {
    return '#B953DD';
  }
  if (firsLetterCode % 2 === 0) {
    return '#69CC79';
  }

  return '#EFB051';
};
