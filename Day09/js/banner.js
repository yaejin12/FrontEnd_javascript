

// shade banner
// next btn -> 다음 요소를 제외한 요소들 opacity 0
// 다음 요소는 opacity 1

// prev btn -> 이전 요소를 제외한 요소들 opacity 0
// 이전 요소는 opacity 1

// 현재 요소, 다음 요소와, 이전 요소
// 0부터 시작해서 next를 누르면 1씩 증가하는 값 
// prev를 누르면 1씩 감속하는 값

// 다음 요소와 이전 요소를 제외한 요소
// index === 다음요소 혹은 이전 요소가 아니라면 제외한 요소

let currentShadeBannerIndex = 0;

// 현재 선택된 배너 외 나머지 배너를 제거해야하므로 배열로 가지고옵니다
// 내가 opacity를 조절할 요소들을 가지고 와야하는구나
const $shadeBanner = document.querySelectorAll("#shade-banner > ul > li")

// 버튼이 클릭될 떄 마다 이벤트가 발생 -> 버튼 요소 필요
const $shadeBannerPrevBtn = document.querySelector('.shade-prev-btn')
const $shadeBannerNextBtn = document.querySelector('.shade-next-btn')

function handlePrevShadeBannerBtn() {
    // 분기 생성 --> (if)
    // 첫번째는 -> 마지막
    // 그 이외는 이전

    // $shadeBanner를 순회하여
    // currentShadeBannerIndex가 같은 것만 opacity 1
    // 나머지는 0으로 만든다

    // currentShadeBannerIndex--
    // 경험 --> 다른 사람의 코드를 보고 분석 --> input, output을 추론하는 과정

    // 설계 --> 자연 풀이로 바로 이어지는 것 --> 풀이
    // 경험 --> 다른 사람의 코드를 보고 따라한다(o) --> 그 사람의 의도를 파악하여 추론 과정 분석

    if(currentShadeBannerIndex <= 0){
        currentShadeBannerIndex = $shadeBanner.length - 1;
        // 보여줘야할 인덱스를 마지막 인덱스로 수정
    } else {
        currentShadeBannerIndex-- // 핵심기능
    }

    // 순회한 이유, 나머지는 opacity = 0; 현재 보여줘야하는 것만 opacity = 1;
    // 현재, 나머지 --> 모든 요소 (순회), index -> forEach
    $shadeBanner.forEach((banner, index) => {
        if(index === currentShadeBannerIndex) {
            // 순회하여 현재 인덱스와 보여줘야하는 인덱스가 같은것만 보여준다
            banner.style.opacity = 1;
        } else {
            banner.style.opacity = 0;
        }
    })
}


function handleNextShadeBannerBtn() {
    if(currentShadeBannerIndex >= $shadeBanner.length - 1){
        currentShadeBannerIndex = 0;
    } else {
        currentShadeBannerIndex ++
    }
    renderShadBanner()
}


function renderShadBanner(){
    $shadeBanner.forEach((banner, index) => {
        if(index === currentShadeBannerIndex) {
            banner.style.opacity = 1;
        } else {
            banner.style.opacity = 0;
        }
    })
}

$shadeBannerPrevBtn.addEventListener('click', handlePrevShadeBannerBtn)
$shadeBannerNextBtn.addEventListener('click', handleNextShadeBannerBtn)

// 문제
// slide index(x) -> count
// style.translate
// ??.style.transform = 'translateX(-?? * count + "px") -> 1.?? // 2.??
// next, prev => count++, count--
// 오늘 이 문제 못 푸신 분들, 함수가 익숙하지 않으신 분들 --> 제가 풀어주면 의미가 없어요
// 이것을 풀어보면서 얻을 수 있는 것들이 너무 많으니까

// 심화
// 자동 슬라이드 배너 setInterval(), cloneNode(), 계속 쌓이면 안된다

let slideBannerCount = 0;
const $slideBannerList = document.querySelector("#slide-banner > .banner-list") 
const $slideBannerNextBtn = document.querySelector(".slide-next-btn")
const $slideBannerPrevBtn = document.querySelector(".slide-prev-btn")
// 두개의 함수에서 모두 사용하기 때문에 전역변수 처리
const slideBannerWidth = $slideBannerList.clientWidth


const handleSlideBannerPrevBtn = () => {
    if(slideBannerCount <= 0) return;
    slideBannerCount--;

    // prev가 눌러졌을 때 slideBannerCount--
    // * 1080px이라는 매직넘버를 실제로 할당해서는 안됩니다
    // 요소의 길이가 바뀌면 수정해야하는 코드의 범위가 늘어나기 때문에 요소의 크기를 가지고오는 것이 올바르다
    // const slideBannerWidth = $slideBannerList.clientWidth

    // 자바스크립트 요소 크기 가지고오는 방법
    // offsetWidth => 마진이나 패딩을 포함한 크기 (가장 많이 사용하는 방법)
    // clientWidth => 마진과 테두리를 제외한 실제 내용물의 크기 (패딩 포함)
    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
}


const handleSlideBannerNextBtn = () => {
    if(slideBannerCount >= $slideBannerList.children.length - 1) return;
    slideBannerCount++;
    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
}

// 왼쪽으로 움직여야한다는 것은 초기 상태 기준 "-"
// translate는 누적값이 아니기 때문입니다
$slideBannerPrevBtn.addEventListener('click', handleSlideBannerPrevBtn)
$slideBannerNextBtn.addEventListener('click', handleSlideBannerNextBtn)

