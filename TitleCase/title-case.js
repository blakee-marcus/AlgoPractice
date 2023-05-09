// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  const sentenceArr = str.split(' ');
  let updatedSentenceArr = [];
  for (let i = 0; i < sentenceArr.length; i++) {
    let word = sentenceArr[i].split('');
    word[0] = word[0].toUpperCase();
    updatedSentenceArr.push(word.join(''));
  }
  return updatedSentenceArr.join(' ');
};

