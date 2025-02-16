from IPython import get_ipython
from IPython.display import display
from flask import Flask,render_template, request, jsonify

import urllib.request
import joblib

# Connect to javascript server
app = Flask(__name__,template_folder="templates")

# GitHub raw file URLs
vectorizer_url = "https://github.com/anna-asmaryan/NSBE-Hacks/raw/refs/heads/email_phishing/vectorizer.pkl"
model_url = "https://github.com/anna-asmaryan/NSBE-Hacks/raw/refs/heads/email_phishing/logistic_model.pkl"

# Download the files
urllib.request.urlretrieve(vectorizer_url, "vectorizer.pkl")
urllib.request.urlretrieve(model_url, "logistic_model.pkl")

# Load the vectorizer and model
vectorizer = joblib.load("vectorizer.pkl")
model = joblib.load("logistic_model.pkl")

import numpy as np
import joblib
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer, PorterStemmer
from string import punctuation


# Initialize NLP tools
nltk.download('punkt', quiet=True)       # For tokenization
nltk.download('stopwords', quiet=True)   # For stopwords
nltk.download('wordnet', quiet=True)     # For lemmatization

lemmatizer = WordNetLemmatizer()
stemmer = PorterStemmer()

# Function to process the email body and predict if email is spam
def check_if_phishing(body):
    tokens = word_tokenize(body)
    stop_words = set(stopwords.words('english')) | set(punctuation)

    processed_tokens = [
        stemmer.stem(lemmatizer.lemmatize(word.lower()))
        for word in tokens
        if word.lower() not in stop_words
    ]
    processed_body = ' '.join(processed_tokens)  # Process text

    #STEP 2: Vectorized the processed body
    email_vec = vectorizer.transform([processed_body])

    #STEP 3: Determine the prediction
    prediction = model.predict(email_vec)[0]
    return prediction
    #If predictions = 1, the email is a phishing email. If 0, it is legitimate.

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    result = check_if_phishing(data['email_body'])
    return jsonify(result=result) # return the result to JavaScript

if __name__ == '__main__':
    app.run(debug=True)