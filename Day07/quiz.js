/*

/* 
    로또 번호 맞추기
    랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
    길이가 7인 각 요소가 1~45중 랜덤한 숫자로 들어가는 번호 생성

    function lottery(){
        let lottoArr = Math.random, 배열 생성 (from, fill, map / for, while, push)
        * 중복 번호가 있어서는 안됩니다
        if, includes, Set

        let lottoArr = []

        // 초기식이나 증감식 없이 특정 조건을 만족할 때까지 반복하는 것은 while
        while(lottoArr.length < 7){
            if(!lottoArr.includes(random)){
                lottoArr.push(random)
            }
        }
    }

    번호 당첨 기준 (switch, flag(분기), 마지막 인덱스를 따로 빼는 작업)
    로또 번호 3개 -> 5등
    로또 번호 4개 -> 4등
    로또 번호 5개 -> 3등
    로또 번호 5개 + 보너스(마지막숫자) -> 2등
    로또 번호 6개(마지막번호 제외) -> 1등

    input
    [구매한 번호]
    [1, 4, 8, 12, 25, 68, 32]

    operate
    [랜덤 생성된 번호] -- 정답
    맞는지 확인

    output
    등수, 꽝

    (심화)
    하나의 구매가 천원이라 했을 때
    랜덤 생성된 번호를 통해 5등 당첨 되려면 
    얼마가 필요할지 계산 반복 
*/

//로또 답
let lottoList = [];

//input
let input = [1, 4, 8, 12, 26, 64, 32];

function lottery() {
  while (lottoList.length < 7) {
    let lottoNum = Math.floor(Math.random() * 45 + 1);
    //로또 번호를 배열에 저장
    if (!lottoList.includes(lottoNum)) {
      lottoList.push(lottoNum);
    }
  }
}

lottery();
console.log(lottoList);

let lottoListSlice = lottoList.slice(0, 6);

// 번호 당첨 기준
const operate = () => {
  //정답 확인
  const arr = input.filter((i) => lottoListSlice.includes(i));

  if (arr.length === 3) {
    console.log("5등");
  } else if (arr.length === 4) {
    console.log("4등");
  } else if (arr.length === 5 && input.includes(lottoList[6])) {
    console.log("2등");
  } else if (arr.length === 5) {
    console.log("3등");
  } else if (arr.length === 6) {
    console.log("1등");
  } else {
    console.log("꽝!!");
  }
};

operate();
