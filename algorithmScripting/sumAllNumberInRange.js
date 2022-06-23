const summAll = (array) => {
  let largeNumberInArray = Math.max(...array);
  let smallNumberInArray = Math.min(...array);

  let total = largeNumberInArray + smallNumberInArray;

  for (let i = smallNumberInArray + 1; i < largeNumberInArray; i++) {
    total += i;
  }
  return total;
};

console.log(summAll([1, 5]));
