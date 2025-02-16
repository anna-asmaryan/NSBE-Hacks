chrome.runtime.onInstalled.addListener(() => {
    // Code to fetch and store the vectorizer and model files when the extension is installed
  });
  
  function fetchModelData() {
    return Promise.all([
      fetch('https://github.com/anna-asmaryan/NSBE-Hacks/raw/refs/heads/email_phishing/vectorizer.pkl'),
      fetch('https://github.com/anna-asmaryan/NSBE-Hacks/raw/refs/heads/email_phishing/logistic_model.pkl')
    ]).then(([vectorizer, model]) => {
      return Promise.all([vectorizer.blob(), model.blob()]);
    });
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkPhishing") {
      fetchModelData().then(([vectorizerBlob, modelBlob]) => {
        // Process the email content with the model
        let prediction = runPhishingCheck(request.emailBody, vectorizerBlob, modelBlob);
        sendResponse({ result: prediction });
      });
      return true; // Indicating async response
    }
  });
  
  function runPhishingCheck(emailBody, vectorizerBlob, modelBlob) {
    // Use the vectorizer and model to check for phishing (implement the required logic here)
    return false; // Return phishing status (True/False)
  }
  