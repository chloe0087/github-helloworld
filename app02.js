const x = 6;
let result = 0;

for (i = 1; i <= x; i++) {
  result = result + i;
}

console.log(result);

result = 0;
let j = 1;
while (j <= x) {
  result = result + j;
  j++;
}

console.log(result);
