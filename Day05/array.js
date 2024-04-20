const arr = ["이예진", "짱구", "마이멜로디"];
arr.push("해피캣"); //원본 제일 마지막 추가
console.log(arr);
arr.pop(); //젤 마지막 삭제
console.log(arr);
arr.unshift("쿠로미");
console.log(arr);
arr.shift();
console.log(arr);

//만약 arr에 쿠로미가 없다면 쿠로미를 먄 끝 요소에 추가해라
if (!arr.includes("쿠로미")) {
  arr.push("쿠로미");
}
console.log(arr);
console.log("============================================");

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr2.concat(arr1);
console.log(arr3);

const apart = ["짱구", "오수", "스폰지밥", "훈이", "징징이"];
const apart_1 = apart.slice(1, 3); //오수 ,스폰지밥 복사본 생성
const apart_2 = apart.slice(2); //스폰지밥 훈이 징징이
const apart_3 = apart.slice(-3, -1); //스폰지밥 훈이 //-를 붙이면 뒤에서 부터 세면 된다

console.log(apart_1, apart_2, apart_3);

console.log("============================================");

//마지막 인덱스에 있는 값
apart[apart.length - 1];

//ES2020에서 가능한 명령어
//.at을 사용하면 마지막 인덱스에 있는 값을 받을 수 있다
console.log(apart.at(-1));

console.log("============================================");

apart.splice(2, 2, "완전배고파", "졸려요", "추워용");
console.log(apart);

console.log("============================================");

const menus = [
  {
    title: "상품목록",
    isToggled: false,
  },
  {
    title: "회원목록",
    isToggled: true,
  },
  {
    title: "결제관리",
    isToggled: false,
  },
];

const everyToggledMenus = menus.every((menus) => menus.isToggled);
const someToggledMenus = menus.some((menus) => menus.isToggled);
console.log(everyToggledMenus);
console.log(someToggledMenus);

console.log("============================================");

const sortArr = [1, 2, 10, 4, 8];
sortArr.sort((a, b) => {
  return a - b;
});

console.log(sortArr);

//내장함수의 반환 값에 따라 데이터 타입에 따른 내장 함수를 이어서 사용
//유니코드 - 모든 세계의 언어를 코드로 기준한 일종의 국제 표준
//10이 2보다 앞에 있기 때문에 숫자를 직접 이전과 이후를 비교
