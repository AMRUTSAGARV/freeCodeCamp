// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  const flattenedArray = [];
  //loop over array contents man
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //recursively flatten entries that are arrays and push into the flatten array.
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      //copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
