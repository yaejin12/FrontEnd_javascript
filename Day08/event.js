const $textChangeBtn = document.querySelector(".text-change-btn");
const $textDiv = document.querySelector("#text");
$textChangeBtn.addEventListener("click", () => {
  $textDiv.innerHTML = "반갑습니다";
});

const $colorChangeBtn = document.querySelector(".color-change-btn");
$colorChangeBtn.addEventListener("click", () => {
  $textDiv.style.color = "#f00";
});

function addClassOn(target) {
  target.classList.add("on");
}

const $addClassBtn = document.querySelector(".add-class-btn");
$addClassBtn.addEventListener("click", () => {
  addClassOn($textDiv);
});

//menu-item 있으면 지우고 클릭한 타겟에 on을 추가
const $menuItems = document.querySelectorAll(".menu-item");
$menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    $menuItems.forEach((el) => {
      //on이라는 class를 가지고있는 요소가 있다면 제거하기 위한 순회
      if (el.classList.contains("on")) el.classList.remove("on");
    });
    event.target.classList.add("on");
  });
});


//과제
