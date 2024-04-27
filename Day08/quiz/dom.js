//============전역변수============

const $tabHost = document.querySelector(".tab_host");
const $tabBody = document.querySelector(".tab_body");
let tabTextContent;

//==============함수==============

//1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오.
function loading() {
  window.addEventListener("DOMContentLoaded", function () {
    const $DisplayP = document.querySelector("#display p");
    $DisplayP.textContent = "환영합니다!";
  });
}

//2.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오

function tabStyleToggle() {
  $tabHost.addEventListener("click", (e) => {
    if (e.target.matches(".tab")) {
      checkClass("tab-click");
      e.target.classList.add("tab-click");

      //클릭 탭 숫자가 같은 것
      displayNone(e);
    } //matches end
  });
}

//class 확인
function checkClass(className) {
  [...$tabHost.children].forEach((tab) => {
    if (tab.classList.contains(className)) {
      tab.classList.remove(className);
    }
  });
}

//3. 위의 탭 클릭시 아래의 컨텐츠중 탭과 숫자가 같은 것만 보이게 하시오.

function displayNone(e) {
  tabTextContent = e.target.textContent;
  [...$tabBody.children].filter((block) => {
    if (!block.innerHTML.includes(tabTextContent)) {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });
}

//==============실행==============

loading();
tabStyleToggle();
