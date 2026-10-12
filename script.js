//your JS code here. If required.
//your code here
app.use(express.json()); 
function mapLetters(word) {
  const result = {};
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!result[ch]) result[ch] = [];
    result[ch].push(i);
  }
  return result;
}

app.post('/mapLetters', (req, res) => {
  const { word } = req.body;
  res.status(200).json(mapLetters(word));
});