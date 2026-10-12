//your JS code here. If required.

function mapLetters(word) {
  const result = {};
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!result[ch]) result[ch] = [];
    result[ch].push(i);
  }
  return result;
}

if (typeof module !== 'undefined') module.exports = mapLetters;