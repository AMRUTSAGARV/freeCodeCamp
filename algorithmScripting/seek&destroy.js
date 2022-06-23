// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  const argsArray = [...arguments].slice(1);
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (argsArray.indexOf(arr[i]) == -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
