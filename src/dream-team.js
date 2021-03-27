const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let res = [];
  members.forEach(item => {
    if (typeof item === 'string') {
      res.push(item.trim()[0].toUpperCase());
    }
  });
  return res.sort().join('');
};
