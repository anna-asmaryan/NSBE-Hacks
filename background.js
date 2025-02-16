chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url) {
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: tab.url })
        })
        .then(response => response.json())
        .then(data => {
            if (data.prediction === 'phishing') {
                chrome.browserAction.setIcon({ path: 'icons/phishing-icon-48.png' });
                chrome.browserAction.setTitle({ title: 'Warning: Phishing Attempt!' });
            } else {
                chrome.browserAction.setIcon({ path: 'icons/phishing-icon-128.png' });
                chrome.browserAction.setTitle({ title: 'Safe Email' });
            }
        });
    }
});
