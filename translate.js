const translate = (word) => {
  //if the word starts with a vowel... do the stuff
  const vowels = ["a", "e", "i", "o", "u"];

  word = word.toLowerCase();
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    // Compose final string
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};
module.exports = translate;
