function solution(arr) {
  const uniqeArr = [...new Set(arr)];
  uniqeArr.sort((a, b) => b - a);
  return uniqeArr;
}
