// This script will interact with the page and extract email content for phishing detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "extractEmailContent") {
      const emailBody = document.body.innerText; // Simplified; adapt based on email structure
      sendResponse({ emailBody });
    }
  });
  