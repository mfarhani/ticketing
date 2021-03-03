const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/web-component/runtime.js',
    './dist/web-component/polyfills.js',
    './dist/web-component/main.js'
  ];
  await fs.ensureDir('nicico-ticket');
  await concat(files, 'nicico-ticket/nicico-ticket.js');
  await fs.copyFile('./dist/web-component/styles.css', 'nicico-ticket/styles.css');
})();
