document.getElementById('checkButton').addEventListener('click', () => {
    const emailContent = document.getElementById('emailContent').value;
    chrome.runtime.sendMessage(
      { action: "checkPhishing", emailBody: emailContent },
      (response) => {
        const resultText = response.result ? "Phishing detected!" : "Email is safe.";
        document.getElementById('result').innerText = resultText;
      }
    );
  });
  