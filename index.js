let fs = require('fs');

function getAssetData() {
   return fs.readFileSync('./mixins/_mixins-test.scss')
}

module.exports = { getAssetData };