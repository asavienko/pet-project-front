/* eslint-disable */
const fs = require('fs');
const path = require('path');

const translationsConfig = [
  {
    name: 'en.json',
    filePath: path.resolve(__dirname, '../src/i18n/messages/en.json'),
    messages: {},
  },
  {
    name: 'ua.json',
    filePath: path.resolve(__dirname, '../src/i18n/messages/ua.json'),
    messages: {},
  },
];

translationsConfig.forEach((config) => {
  try {
    const messages = require(config.filePath);

    const normalizedMessages = normalizeMessages(messages);

    fs.writeFile(config.filePath, JSON.stringify(normalizedMessages), (err) => {
      if (err) throw err;
      console.log('Translation file updated', config.name);
    });
  } catch (e) {
    const errorMessage = `Error happened creating a new file for ${config.filePath}`;
    console.log(errorMessage, e);
  }
});

function normalizeMessages(messages) {
  const result = {};
  Object.entries(messages).forEach(function ([key, translation]) {
    result[key] = {
      ...translation,
      message: translation?.message?.replaceAll('\n', '<br></br>'),
    };
  });

  return result;
}
