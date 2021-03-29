const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addStr = '';
  let sep = options.separator ? options.separator : '+';

  let addSep = options.additionSeparator ? options.additionSeparator :  '|';
  if (options.addition !== undefined) {
    addStr = new Array(options.additionRepeatTimes).fill(options.addition.toString()).join(addSep);
  }
  let arr = new Array(options.repeatTimes).fill(str.toString()+addStr);
  console.log(arr);

  return arr.join(sep);
};
