// 현재 시간을 가지고 온다.
const date = new Date();
console.log(date);
// 년도만 들고오고싶어
console.log(date.getFullYear());

//0~11월
console.log(date.getMonth());

//일자 나옴
console.log(date.getDate());

//0일요일 ~ 6토요일
console.log(date.getDay());

//현재 위치에 맞는 시간
//utc타임이 아니기때문에 조심해서 쓰기
console.log(date.toString());


//utc기준 문자열
console.log(date.toISOString());

//날짜시간 변환, 현재 위치
console.log(date.toLocaleString());

//시분초 제거
console.log(date.toDateString());

//같은 Date 타입이라면 사간끼리의 연산도 가능하다
//Date 외에 다른 라이브러리의 경우 이러한 diff를 계산하는 유틸 함수
//라이브러리 : 다른사람이 만들어진 것을 다운받아 만드는 것이다.