/* 
    4개의 회원 목록이 존재합니다.
    회원 목록에는 "김사과", "이멜론", "오렌지", "박하나"
    각 회원 상세에는 나이, 키, 이름이 정의되어있습니다, 나이, 키 임의

    회원 목록 중 특정한 회원 사용자의 정보를 출력할 것

    prev()라는 사용하면 이 전의 사용자
    next()라는 사용하면 이 다음의 사용자

    단, prev 함수는 0 밑으로 내려갈 수 없습니다.
    next 함수는 회원 목록 수 이상을 넘어갈 수 없습니다.

    기본 값은 가장 첫번째 회원 목록에 등록된 사용자입니다.

    ex)
        next()
        next()
        console.log() ---> 해당하는 사용자의 상세정보
    
    hint index를 잘 활용해보세요! 인덱스의 기본값은 0부터 시작
*/

const user = [
  { name: "감사과", hight: 150, age: 20 },
  { name: "이멜론", hight: 130, age: 25 },
  { name: "오렌지", hight: 180, age: 23 },
  { name: "박하나", hight: 170, age: 21 },
];
let index = 0;
const prev = () => {
  for (let i = 0; i <= user.length - 1; i++) {
    index += i;
    if (i === user.length - 1) {
      index === 0;
    }
  }
};
