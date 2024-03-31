/*

수학, 국어, 영어, 탐구영역이 있습니다.
이 네가지 과목의 평군에 따라 

90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그외는 f 학점

'000님의 이번 학기 성적은 0 학점 입니다'출력

*/

const math = 60;
const ko = 100;
const en = 90;
const research = 80;
let score = null;

const average = (math + ko + en + research) / 4;

if (average >= 90) {
  score = "a";
} else if (average >= 80) {
  score = "b";
} else if (average >= 70) {
  score = "c";
} else {
  score = "f";
}
console.log(`이예진님의 이번 학기 성적은 ${score}학점 입니다`);
