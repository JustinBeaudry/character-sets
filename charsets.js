const charsets = require('./charsets.json');

const toArray = () => charsets;
const normalize = () => charsets.map(charset => charset.toLowerCase());
const includes = encoding => !!~normalize().indexOf(encoding.toLowerCase());

exports.toArray = toArray;
exports.normalize = normalize;
exports.includes = includes;
