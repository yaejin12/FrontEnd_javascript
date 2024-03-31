// 반복문
//for(초기화식; 조건식; 증감식;){}

for (let i = 0; i < 3; i++) {
  console.log(`반복문${i}`);
}

//오산고등학교(1~3학년, 각 학년당 9반)
for (let i = 1; i < 4; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}학년${j}반`);
  }
}
