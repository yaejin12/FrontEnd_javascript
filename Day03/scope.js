/*
scope
  변수에 접근 할 수 있는 범위 
  변수를 찾기 위한 규칙

  지역 스코프: 특정한 코드 블럭{}에서 접근하는 값
  전역 스코프: 어디에서나 접근할 수 있음, 우선순의가 낮습니다.


 

1. 전역 변수
전역 스코프에 저장되며, 전역에서 사용 가능한 변수
메모리에서 삭제되지 않습니다.


2. 지역변수
지역 스코프에 저장되며, 특정 구역을 벗어나면 메모리에서 사라집니다.
*/

//스코프 체인

let c = 7;
{
  let c = 3;
  let b = 5;
  {
    let c = 3;
    let d = 2;
    b = 3;
    console.log(c, b, d); //3,5,2
  }
  console.log(b); //3
}

//quiz
let A = 7;
function f() {
  let B = 5;
  console.log(A, B); //7, 5
  A = 4;
  function fb() {
    let C = 5;
    let A = 3;
    console.log(A, B, C); //3,5,5
    A = 5;
  }
  fb();
  console.log(A);//4
}
f();
