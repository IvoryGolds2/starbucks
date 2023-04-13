// 검색창 요소(.search) 선택 시 강제 포커스 및 제어
const searchEl = document.querySelector('.search')
// const searchinputEl = document.querySelector('.search input')
// 아래와 같이 최적화 위에 서치를 찾아뒀으니 서치에서부터 찾으면 됨
const searchinputEl = searchEl.querySelector('input')

// 검색창 요소를 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click', function(){
  // 이벤트를 다루는 함수 이벤트 핸들러 라고 부름
  searchinputEl.focus(); //포커스 강제 적용
})

// input 요소에 포커스되면 실행
searchinputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchinputEl.setAttribute('placeholder', '통합검색'); //HTML 속성을 추가하는 메소드
})
// input 요소에 포커스 해제(블러)되면 실행
searchinputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchinputEl.setAttribute('placeholder', ''); //HTML 속성을 추가하는 메소드
})

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// window: 브라우저 창 객체
window.addEventListener('scroll', function (){
  // console.log(window.screenY); //y축으로 얼마나 스크롤 했는지에 대한 수치

  // 만약 스크롤의 위치가 500을 넘으면 배지 요소를 숨기고
  // 그렇지 않으면 다시 보이기!!
  if (window.scrollY > 500 ) {
    // 배지 요소 숨기기!
    badgeEl.style.display = 'none';
  } else {
    badgeEl.style.display = 'block';
  }
});