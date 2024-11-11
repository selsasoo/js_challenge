function stringFrequency(strings) {
  return strings.reduce((freq, str) => {
    freq[str] = (freq[str] || 0) + 1; 
    return freq;
  }, {}); 
}


const strings = ["hello", "world", "hello"];
console.log(stringFrequency(strings));