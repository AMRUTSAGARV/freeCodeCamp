function spinalCase(str) {
  // regex to find underscores and spaces
  let spacesRegex = /\s+|_+/g;
  // regex to convert low-uppercase to low-space-uppercase

  let camelRegex = /([a-z])([A-Z])/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(camelRegex, "$1 $2");

  // then replace all underscores and spaces with dashes
  let spinalStr = str.replace(spacesRegex, "-");

  return spinalStr.toLowerCase();
}

console.log(spinalCase("myNameIsAmrut"));
