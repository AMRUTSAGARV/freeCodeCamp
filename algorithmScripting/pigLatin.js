function translatePigLatin(str) {
  // make regex to identify words that start with vowels
  let vowelRegex = /^[aeiou]+/;
  // make regex to identify consonant clusters
  let consonantRegex = /^[^aeiou]+/;
  // regex to identify words with no vowels
  let vowels = /[aeiou]/;

  let pigStr = "";

  if (vowelRegex.test(str)) {
    // if a word starts with a vowel, just add -way
    pigStr = str.concat("way");
  } else if (!vowels.test(str)) {
    // if a word contains no vowels, just add -ay
    pigStr = str.concat("ay");
  } else {
    // otherwise find the consonant cluster
    let consonant = str.match(consonantRegex);
    // remove it by using the length of the match
    let middle = str.substr(consonant[0].length);
    // concatenate middle, consonants, and -ay
    pigStr = middle.concat(consonant[0], "ay");
    console.log(pigStr);
  }

  return pigStr;
}

console.log(translatePigLatin("paragraphs"));
