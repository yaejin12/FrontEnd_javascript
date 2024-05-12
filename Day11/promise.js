console.log("a");

new Promise((resolve, reject) => {
  //이 내부에 있는 함수가 실행되는 시간이 곧 걸리는 시간
  //promise 이후에 실행되는 코드는 비동기

  resolve("b");
  reject("에러");

  //resolve 와 reject는 둘중에 하나만
  //promise 내부에는 보통 비동기 함수
})
  .then((res) => {
    console.log(res);
    //promise.then
  })
  .catch((err) => {
    console.log(err);
  });
console.log("c");

/*

all, allSettled, race 
예를 들면 백엔드한테 요청을 보내야하는데

백엔드 요청 a,v,c,d,e,f 순서대로 실행되어야한다면 순서대로 백엔드에 요청

만약 abcdef가 관련 없다면? 동시에 요청하는 것이 빠르다.
batching request  ----> promise pool(동시 요청)
: 동일한 요청을 묶어서 한번에 처리하는 것

 */

new Promise.all([/*promise1,promise2,promise3 비동기 함수 */])
/*
all의 단점은 하나라도 실패하면 모두 다 실패한 것으로 간주
allSettled -> 실패하는 것과 성공한 것을 구분 할 수 있음
race는 가장 빨리 온 결과값을 반환한다.

실행이 안되는 것이 아니라 실행한 이후의 반환하는 결과값의 차이

pending, fulfilled, rejected
대기 이행 실패로 구분
*/