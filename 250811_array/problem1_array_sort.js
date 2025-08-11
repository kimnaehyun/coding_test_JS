// 내장 함수 사용
function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

// 내장 함수 없이
function bubble_sort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
