module.exports = function check(str, bracketsConfig) {
  const arr = bracketsConfig.map(item => item.join(''));
  let string = str,
    val;

  do {
    val = string;
    arr.forEach(item => string = string.replace(item, ''));
  } while (string.length < val.length)

  return !string.length;
}
