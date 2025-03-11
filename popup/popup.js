document.addEventListener("DOMContentLoaded", function () {
    console.log("팝업 열림, 폼 데이터 수집 중...");

    const fillFormButton = document.getElementById("fill-form");

    if (!fillFormButton) {
        console.error("버튼을 찾을 수 없음!");
        return;
    }

    // collectFormData();
    // 직접 content.js에 보내기
    // 팝업에서 content.js에 메시지 전송
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: collectFormData
        });
    });

    // 버튼 클릭 시 이벤트 리스너 추가
    fillFormButton.addEventListener("click", async () => {
        console.log("Fill Form 버튼 클릭됨!");
    });

    // 현재 활성화된 탭 가져오기
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;
        const activeTabId = tabs[0].id;
    });
});

// 팝업에서 실행되는 함수 (현재 페이지의 폼 데이터 수집)
function collectFormData() {
    console.log("collectFormData 시작")
    let nodeList = document.querySelectorAll('input, textarea, select');
    let array = [...nodeList];
    console.log(array);
    let formFields = {};

    return formFields;
}
