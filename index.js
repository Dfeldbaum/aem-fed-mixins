let fs = require('fs');

function getAssetData() {
   return fs.readFileSync('./mixins/_mixins.scss')
}

module.exports = { getAssetData };