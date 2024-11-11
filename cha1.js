function averageOfEvens(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  const sum = evens.reduce((acc, num) => acc + num, 0);
  return evens.length === 0 ? 0 : sum / evens.length;
}


console.log(averageOfEvens([1, 2, 3, 4, 5, 6])); // Output: 4
