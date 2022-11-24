# Translations



we use transifex for translations

run comman `yarn extract-translations` to find all strings for translations in .js/.ts files and create base translation file

after translationg the file download translation into `src/i18n/messages` directory. Run the command `yarn normalize-translations` to normalize translated file (currently it replaces new line symbols with br tags)


## Guidelines

1. Use `\n` in translations for new lines. You can combine few in a row `\n\n\n`