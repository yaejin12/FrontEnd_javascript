/*
로또번호 맞추기
랜덤번호 생성 [1~45,1~45,1~45,1~45,1~45,1~45,1~45]
길이가 7인 각 요소가 1~45중 랜덤한 숫자로 들어가는 번호 생성

function lottery(){
  let lottoArr = Math.random, 배열생성(form, fill, map / for, while, push)
  if, includes, Set
}



*중복 번호가 있어서는 안된다.

번호 당첨 기준(Flag(분기), 마지막 인덱스를 따로 빼는 작업)
로또 번호 3개 -> 5등
로또 번호 4개 -> 4등
로또 번호 5개 -> 3등
로또 번호 5개 + 보너스 -> 2등
로또 번호 6개 마지막번호 제외 -> 1등

input
[구매한 번호]

operate
[랜덤 생성된 번호] --정답
맞는지 확인 

output
등수,꽝

(심화)
하나의 구먀가 천원이라 했을 때
랜덤 생성된 번호를 5등 당첨이 되려면 얼마가 필요할지 계산 반복



*/

let arr = [];

function lottery() {
  while (arr.length <= 7) {
    let lottoArr = Math.floor(Math.random() * 45 + 1);
    //로또 번호를 배열에 저장
    arr.push(lottoArr);
  }
}
console.log(arr);
