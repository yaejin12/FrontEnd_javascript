//구구단 만들기

for (let i = 1; i < 10; i++) {
  console.log(`====${i}단====`);
  for (let num = 1; num <= 9; num++) {
    console.log(`${i} x ${num} = ${i * num}`);
  }
}
