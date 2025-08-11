function pull_out_plus(arr) {
  const ret = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(ret)].sort((a, b) => a - b);
}
