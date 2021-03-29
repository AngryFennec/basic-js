const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  sampleActivity.replace(/\n\t\r/g, '');
  try {
    const num = Number(sampleActivity);
    if (num <= 0 || num > MODERN_ACTIVITY || isNaN(num)) {
      return false;
    }
    let res = Math.floor(Math.log(MODERN_ACTIVITY/num)/(0.693 / HALF_LIFE_PERIOD))+1;
    return res;
  } catch (e) {
    return false;
  }
};
