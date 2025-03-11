chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("content.js message 이벤트 발생..."); 
    
    console.log("content에서 html 정보 가져오기 시작");
    let nodeList = document.querySelectorAll('input, textarea, select');
    let array = [...nodeList].map(el => el.outerHTML); // HTML 태그 형식으로 변환

    console.log(array); // 현재 페이지의 모든 input, textarea, select 요소를 출력
    console.log("content에서 html 정보 가져오기 종료");
});
