function shortestArrang(n) {
  if(n % 2 === 1) return [(n + 1) / 2, (n - 1) / 2];
  let min = n / 2 - 2, max = n / 2, sum = min + max + 1;
  while(true) {
    if(n === sum)break;
    if(sum > n) sum -= max--;
      else sum += min--;
    if(min < 0)return [-1];
  }  
  return Array.from(Array(max - min)).map((_, i) => max - i);
}
