const fs = require('fs');

<<<<<<< HEAD
// not used in app currently
=======
>>>>>>> back-end
// eslint-disable-next-line
function read(path) {
  const json = fs.readFileSync(path, 'utf8');
  return JSON.parse(json);
}

module.exports = (path, content) => {
  return fs.writeFileSync(path, JSON.stringify(content));
};
