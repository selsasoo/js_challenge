function longestWord(words) {
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
}

// Example:
console.log(longestWord(["apple", "banana", "cherry", "blueberry"])); // Output: "blueberry"
