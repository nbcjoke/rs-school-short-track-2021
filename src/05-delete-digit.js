/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const x = (`${n}`).split('').sort();
  const a = (`${n}`).split('');
  a.splice(a.indexOf(x[0]), 1);
  return +(a.join(''));
}
module.exports = deleteDigit;
