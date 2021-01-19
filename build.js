const rimraf = require('rimraf');
const fileSave = require('file-save');

rimraf.sync('dist');

const str = json => JSON.stringify(json, null, 4);

const preset = require('./preset.json');
fileSave('./dist/preset.json').write(str(preset));
preset.vueVersion = '2';
fileSave('./dist/v2/preset.json').write(str(preset));
