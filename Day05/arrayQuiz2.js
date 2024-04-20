const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.map((num) => num + 10);

console.log(newNumArr);

console.log("========================================================");

const evenArr = numArr.filter((num) => num % 2 === 0);

console.log(evenArr);

console.log("========================================================");

const posts = [
  { id: 1, title: "title-1", isLiked: false },
  { id: 2, title: "title-2", isLiked: true },
];

//복사본 생성x, 실제 원본 배열의 해당요소를 가지고옴
//해당 요소가 바뀌면 원본 배열의 데이터가 함께 수정

//특정한 요소의 특정한 조건을 만족하는 가장 빨리 발견된 요소를 반환
//해당요소를 수정할때 사용
const findPosts = posts.find((post) => post.id === 1);
findPosts.isLiked = true;
console.log(posts);
console.log("========================================================");

const findIndexPosts = posts.findIndex((post) => post.id === 1);
posts[findIndexPosts].isLiked = true;
posts[findIndexPosts].title = "이예찐이야앙";
console.log(posts);
console.log("========================================================");

//특정한 배열에서 어떠한 객체가 있는지 찾기 위해서 includes를 사용하면
//같은 내용의 객체라고 하더라도 주소를 비교할 수 없기 때문에 false가 나옵니다
//따라서 특정한 배열에서 조건을 만족하는 객체를 찾기 위해서는 find,findIndex 같이 순회
const arr = [{ name: "이예진" }, {}];
arr.includes({ name: "이예진" }); //false
