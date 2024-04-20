//연락처"010-1234-1234"
//해당 연락처의 가운데 숫자를 *로 표기하여
//반환하는 함수를 작성하세요
//매개변수에는 문자열 연락처가 입력 값으로 들어갑니다
//출력값은 "010-****-1234"

// const ph = "010-1234-1234".split("-");
// ph.splice(1, 1, "****");
// console.log(ph.join("-"));

function hashedPhoneNumber(phone) {
  const sPhone = phone.split("-");
  sPhone.splice(1, 1, "****");
  const hashPhone = sPhone.join("-");
  return hashPhone;
}

console.log(hashedPhoneNumber("010-1234-1234"));

const phNum = (phone) => {
  const arrPhone = phone.split("-");
  arrPhone[1] = "****";
  const phNumChange = arrPhone.join("-");
  return phNumChange;
};

console.log(phNum("010-1234-1234"));
