const arr = [0, 1, 2, 3];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]); //0,2
}

//반드시 모든 요소를 순회 //조기 종료 가능 (조건문 쓰고 return사용하면 된다)
arr.forEach((el, i, origin) => {
  console.log(el, i, origin);
  //el: 0 i:0번 인덱스 origin은 배열이기에 생략가는. 보통 생략함
});

for (let el of arr) {
  console.log(el); //0,1,2,3
}

//객체의 키를 통해 값을 확인
const jin = {
  age: 10,
  height: 180,
};
for (let k in jin) {
  console.log(k); //age, height
  console.log(jin[k]); //10, 180
}

Object.keys(jin); //[age, height] 키가 배열로 온다
Object.values(jin); // [10,180]값이 배열로 나온다
Object.entries(jin); //[[age, 10], [height, 180]]
//객체를 배열화 할 때 사용

//구조\
//구조분해 할당
//[age, 20]--> let [key, value]
//const [key, value] = ["age", 20]
for (let [key, values] of Object.entries(jin)) {
  console.log(key, values);
}
