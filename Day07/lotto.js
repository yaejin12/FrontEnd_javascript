function generateLottoNumber() {
  const lottoNumber = [];
  while (lottoNumber.length < 7) {
    const randomNumber = Math.floor(Math.random * 45 + 1);
    if (!lottoNumber.includes(randomNumber)) {
      lottoNumber.push(randomNumber);
    }
  }
  return lottoNumber;
}

function lottery(userNumbers) {
  let winningCount = 0;
  const winningNum = generateLottoNumber();
  const bonusNum = winningNum.pop();

  for (const number of userNumbers) {
    if (winningNum.includes(number)) winningCount++;
  }


let rank;
switch (winningCount) {
  case 6:
    rank = 1;
    break;
  case 5:
    if (userNumbers.includes(bonusNum)) {
      rank = 2;
    } else {
      rank = 3;
    }
    break;
  case 4:
    rank = 4;
    break;
  case 5:
    rank = 5;
    break;
  default:
    rank = "미당첨";
    break;
}
return rank
}