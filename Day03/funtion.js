//선언부
function addNumberPrint(num1, num2) {
  return num1 + num2;
}

//실행부, 매개변수
console.log(addNumberPrint(2, 3));

/*return
함수의 종류
기명함수 익명함수 재귀함수 즉시실행함수 화살표함수 콜백함수

1. 기명함수: 이름을 지어주고 재사용하는 함수
2. 익명함수: 함수에 이름을 지어주지 않음 -> 혼자서는 실행할 수 없다.
   일회성 함수, 즉시 실행함수, 콜백함수, 사용자 이벤트 때 주로 사용됨
   이름이 없기 때문에 가독성이 좋지 않습니다.

function(){
console.log("hello")
}

3. 즉시실행함수 (한번 실행하고 다시 재사용하지 않을때 주로 사용)
보톡은 익명함수와 같이 쓰인다.
함수의 선언과 동시에 실행시켜주는 함수 -> (여기에 함수 적고)(매개변수 적기)

*/
(function (num1, num2) {
  console.log(num1, num2);
})(2, 3);

/*
4. 화살표함수
보다 간단한 표현식으로 함수를 선언
function a(param1){console.log(param)}
*/
const a = (param) => {
  console.log(param);
};

/*
5. 콜백함수
보다 간단한 표현식으로 함수를 선언
function a(param1){console.log(param)}
*/
function func1(num1, num2, callback) {
  let result = num1 + num2;
  //함수의 연산 결과를 콜백함수의 매개변수로 사용할 수 있음
  //비동기 함수 실행 이후 다음 실행해야할 동작을 동기적으로 작성 가능
  callback(result);
}

func1(2, 3, (res) => {
  console.log(res);
});

//6.재귀함수
//탐색 문제에 재귀함수가 사용된다
//같은 함수 안에서 또다시 자기 자신을 호출하는 것
function hello() {
  console.log("hello");
  hello();
}
//hello(); 가 무한반복이다.
//return이라고 종료하지 않으면 무한 반복이다.
function f(n) {
  if (n <= 1) return 1;
  return n + f(n - 1);
}
f(10);
