/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const indexes = [];
  const tempArr = arr.filter((item, index) => {
    if (item === -1) {
      indexes.push(index);
    }
    return item !== -1;
  }).sort((a, b) => a - b);
  for (let i = 0; i < indexes.length; i++) {
    tempArr.splice(indexes[i], 0, -1);
  }
  return tempArr;
}

module.exports = sortByHeight;
