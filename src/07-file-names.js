/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arrNames = names;
  let num = 1;
  for (let i = 1; i < arrNames.length; i++) {
    let isFound = false;
    let temp = arrNames[i];
    while (!isFound && num < 10) {
      if (arrNames.indexOf(temp) >= i || arrNames.indexOf(temp) === -1) {
        arrNames[i] = temp;
        num = 1;
        isFound = true;
      } else {
        temp = `${arrNames[i]}(${num})`;
        num++;
      }
    }
  }
  return arrNames;
}

module.exports = renameFiles;
