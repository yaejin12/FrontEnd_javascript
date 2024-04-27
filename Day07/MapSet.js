const errors = new Map([
  [404, "Not Found"],
  [400, "Bad Request"],
  [401, "UnAuthorized"],
]);

errors.set(500, "Network Error");
const a = errors.set(400);
console.log(a);

for (let error of errors) {
  console.log(error);
}

let object = {};
let map = new Map(Object.entries(object)); //객체 -> 맵
Object.fromEntries(map); // 맵 -> 객체

//Set

const arr = ["arr", "arr", "arr", "set", "set", "map"];
const set = new Set(arr); //중복이 삭제된다. 배열이 아니다
console.log(set);

const setArr = Array.from(set); //다시 배열로 변경 //배열이 아니기에 배열로 저장하는 코드
const spreadSet = [...set]; //전개연산자를 활용한 배열 전환법 //['arr', 'set', 'map' ] 반환 // 다른 배열을 만들어 준다.
//숫자 3이 있는지 찾으시오.
//arr.includes(3)
//new Set(arr), set.has(3)
//데이터의 값이 많은데 특정한 값이 있는지 확인해야한다면 Set으로 확인
//해쉬한 값으로 비교하는 해쉬 테이블 자료구조 => 암호화 된 객체
