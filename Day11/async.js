/* 

async, await
then catch는 동기적이지 않다라는 단점을 지울 수가 없다.

함수를 정의한다. 그리고 그 함수를 통째로 비동기(프로미스)로 만들어버림

*/

//결과값이 나올때 까지 기다릴게! then을 사용하지 않아도 괜찮다.
//가독성이 좋다!
async function asyncPromise() {
  /*
  try(성공 혹은 실패 할 수 있는 코드) catch
  */
  try {
    const response = await new Promise((resolve) => resolve("44"));
    console.log(response, "response");
  } catch (err) {
    console.log(err);
    //상단에
    throw new Error(err);
  }
}

asyncPromise();
