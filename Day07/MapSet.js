const errors = new Map(
  [404, "Not Found"],
  [400, "Bad Request"],
  [401, "UnAuthorized"]
);

errors.set(500, "Network Error");
const a = errors.set(400);
console.log(a);

for (let error of errors) {
  console.log(error);
}

let Object = {};
let map = new Map(Object.entries(Object)); //객체 -> 맵
Object.fromEntries(map); // 맵 -> 객체

//Set

const arr = ["arr", "arr", "arr", "set", "set", "map"];
const set = new Set(arr); //중복이 삭제된다.
const setArr = Array.from(set); //다시 배열로 변경
const spreadSet = [...set] //전개연산자를 활용한 배열 전환법
