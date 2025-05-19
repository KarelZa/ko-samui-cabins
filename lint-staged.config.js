/* eslint-env node */
// const path = require('path');
// const formatCommand = 'prettier . --check';

// module.exports = {
//   '*': formatCommand,
// };

/**
 * @type {import('lint-staged').Configuration}
 */
module.exports = {
  '**/*.{tsx,ts,js}': [
    'prettier --write --end-of-line lf',
    'eslint --fix',
    'eslint',
  ],
  '**/*.{json,md,yml}': ['prettier --write --end-of-line lf'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
