const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let s = 0;
  backyard.forEach(item => {
    item.forEach(itemitem => {
      if (itemitem === '^^') {
        s++;
      }
    })
  });
  return s;
};
