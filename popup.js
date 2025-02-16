chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        const status = document.getElementById('status');
        if (data.prediction === 'phishing') {
            status.classList.add('phishing');
            status.textContent = '⚠️ Warning: Phishing Email!';
        } else {
            status.classList.add('safe');
            status.textContent = '✅ Safe Email';
        }
    });
});
