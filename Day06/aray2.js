const util = require("./module");
const mockPosts = util.generatedMockPosts(10); // 모듈화 된 파일의 export된 함수를 require하여 참조한 것
console.log(mockPosts);

//=============================================================

const arr = [];

//유사배열객체를 배열화
//자바스크립트에서는 원시값을 제외한 모든 값은 객체

const obj = {
  0: "a",
  1: "b",
  length: 2,
};

//빈 배열에 내가 원하는 만큼 0으로 만들고 싶어 하는 코드 하단에 작성
//배열을 생성하고 싶다 = array().fill
//유사배열 객체를 배열로 바꿔야한다 = array().from

const arr2 = Array().from(obj); //[a,b]
const arr3 = Array().from({ length: 6 }); //empty로 채워진 길이 6
const arr4 = Array.from({ length: 6 }).map(() => 0); //[0,0,0,0,0,0]

//Array(6).fill(0)
const arr5 = Array(6).fill(0);

//map,find,문제내기