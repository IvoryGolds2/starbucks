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