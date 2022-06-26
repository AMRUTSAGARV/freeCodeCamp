function convertHTML(str) {
  //regex for patterns across the entire string
  var regex = [/&/g, /</g, />/g, /"/g, /'/g];
  var chars = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  //search and replace loop
  for (var i = 0; i < chars.length; i++) {
    str = regex[i][Symbol.replace](str, chars[i]);
  }
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
