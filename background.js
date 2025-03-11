chrome.runtime.onInstalled.addListener(() => {
    console.log("Chrome Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
    console.log("background.js click 이벤트 발생...");
});
