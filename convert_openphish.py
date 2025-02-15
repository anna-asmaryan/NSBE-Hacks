import pandas as pd

# Read the phishing URLs from the text file
with open("phishing_urls.txt", "r") as file:
    urls = file.readlines()

# Clean up URLs (remove newlines)
urls = [url.strip() for url in urls]

# Save as CSV
df = pd.DataFrame(urls, columns=["url"])
df.to_csv("datasets/phishing_urls.csv", index=False)

print("Phishing URLs saved to datasets/phishing_urls.csv")
