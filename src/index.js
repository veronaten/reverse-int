module.exports = function reverse (n) {
  let str = String(n);
  let reverseN = str.split('').reverse().join('');
  return parseInt(reverseN);
}
