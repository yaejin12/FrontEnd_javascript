const users = [
  {
    id: 1,
    name: "seongyong",
  },
  {
    id: 2,
    name: "seongyong",
  },
  {
    id: 3,
    name: "seongyong",
  },
];

let index = 0;

function print() {
  console.log(users[index]);
  console.log(index);
}

function next() {
  if (index >= users.length-1) {
    console.log("다음 사용자가 존재하지 않습니다. 초기값으로 돌아갑니다");
    index = 0;
  } else {
    index++;
  }
}

function prev() {
  if (index <= 0) {
    console.log("이전 사용자가 존재하지 않습니다. 마지막 사용자를 선택합니다");
    index = users.length - 1;
  } else {
    index--;
  }
}

print(); // {id: 1 // name: 1}
next();
print(); // {id: 2 // name: 2}
next();
next(); // "다음 사용자가 존재하지 않습니다. 초기값으로 돌아갑니다"
print(); // {id: 1, name: 1}
prev(); // "이전 사용자가 존재하지 않습니다. 마지막 사용자를 선택합니다"
print(); // {id: 3 // name: 3}
prev();
print(); // {id: 2 // name: 2}
