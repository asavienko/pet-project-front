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
    name: 'uk.json',
    filePath: path.resolve(__dirname, '../src/i18n/messages/uk.json'),
    messages: {},
  },
];

translationsConfig.forEach((config) => {
  try {
    const messages = require(config.filePath);
    console.log(messages);
    fs.writeFile(config.filePath, JSON.stringify(messages), (err) => {
      if (err) throw err;
      console.log('File updated', config.name);
    });
  } catch (e) {
    const errorMessage = `Error happened creating a new file for ${config.filePath}`;
    console.log(errorMessage, e);
  }
});
