const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  let d = new Date(date);
  if (typeof d.getMonth !== 'function') {
    throw new Error();
  }
  const m = d.month;
  console.log(m);
  if (m ===0 || m === 1 || m === 11) {
    return 'winter';
  }
  if (m >=2 && m <=4) {
    return 'spring';
  }
  if (m>=5 && m <=7) {
    return 'summer';
  }
  if (m>=8 && m <=10) {
    return 'autumn';
  }

};
