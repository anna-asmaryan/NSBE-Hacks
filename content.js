document.addEventListener("click", function (event) {
    let emailElement = event.target.closest(".zA"); // Gmail email row
    if (emailElement) {
        setTimeout(() => {
            let emailBody = document.querySelector(".ii.gt div"); // Extracts email body
            if (emailBody) {
                let emailText = emailBody.innerText;

                // Send to backend for phishing detection
                fetch("http://127.0.0.1:5000/predict", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content: emailText })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.prediction === "phishing") {
                        alert("⚠️ Warning: This email is likely phishing!");
                    } else {
                        console.log("✅ Email is safe.");
                    }
                });
            }
        }, 1000); // Delay to allow Gmail to load email content
    }
});